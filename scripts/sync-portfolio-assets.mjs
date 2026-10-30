import fs from 'fs/promises';
import path from 'path';

const ROOT = path.join(process.cwd());
const ASSETS = path.join(ROOT, 'public/assets');
const OUT_IMAGES = path.join(ROOT, 'public/images/projects');
const OUT_MDX = path.join(ROOT, 'content/projects');

const CLIENTS = [
  { folder: 'Astrummo', name: 'Astrummo', slug: 'astrummo', id: '1' },
  {
    folder: 'Casa São Francisco',
    name: 'Casa São Francisco',
    slug: 'casa-sao-francisco',
    id: '2',
  },
  { folder: 'Dream', name: 'Dream', slug: 'dream', id: '3' },
  {
    folder: 'Empório Odo',
    name: 'Empório Odo',
    slug: 'emporio-odo',
    id: '4',
  },
  {
    folder: 'Modo Avião',
    name: 'Modo Avião',
    slug: 'modo-aviao',
    id: '5',
  },
  { folder: 'Rustcat', name: 'Rustcat', slug: 'rustcat', id: '6' },
  {
    folder: 'Silicon Seven',
    name: 'Silicon Seven',
    slug: 'silicon-seven',
    id: '7',
  },
  { folder: 'Silueta', name: 'Silueta', slug: 'silueta', id: '8' },
  { folder: 'Techtonics', name: 'Techtonics', slug: 'techtonics', id: '9' },
  {
    folder: 'Tributa Consult',
    name: 'Tributa Consult',
    slug: 'tributa-consult',
    id: '10',
  },
  { folder: 'Vittorio', name: 'Vittorio', slug: 'vittorio', id: '11' },
  { folder: 'Zero Labs', name: 'Zero Labs', slug: 'zero-labs', id: '12' },
  { folder: 'Zero bala', name: 'Zero Bala', slug: 'zero-bala', id: '13' },
];

function naturalSort(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

function pickLogo(files) {
  const tests = [
    (f) => /^Link.*\.svg$/i.test(f),
    (f) => f === '0.svg',
    (f) => /negativo/i.test(f) && /\.(svg|png)$/i.test(f),
    (f) => /branco/i.test(f) && /\.(svg|png)$/i.test(f),
    (f) => /^0_.*\.(svg|png)$/i.test(f),
    (f) => /\.svg$/i.test(f),
    (f) => /logo/i.test(f) && /\.png$/i.test(f),
    (f) => /\.(png|jpg|jpeg|webp)$/i.test(f),
  ];
  for (const test of tests) {
    const hit = files.find(test);
    if (hit) return hit;
  }
  return files[0];
}

function ext(file) {
  return path.extname(file).toLowerCase() || '.jpg';
}

async function copyFile(src, dest) {
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.copyFile(src, dest);
}

async function main() {
  const existing = await fs.readdir(OUT_MDX);
  await Promise.all(
    existing
      .filter((f) => f.endsWith('.mdx'))
      .map((f) => fs.unlink(path.join(OUT_MDX, f))),
  );

  for (const client of CLIENTS) {
    const base = path.join(ASSETS, client.folder);
    const imagensDir = path.join(base, 'Imagens');
    const logoDir = path.join(base, 'Logo');
    const outDir = path.join(OUT_IMAGES, client.slug);

    await fs.rm(outDir, { recursive: true, force: true });
    await fs.mkdir(outDir, { recursive: true });

    let logoPublic = '';
    try {
      const logoFiles = (await fs.readdir(logoDir)).filter((f) => !f.startsWith('.'));
      const logoName = pickLogo(logoFiles);
      if (logoName) {
        const logoExt = ext(logoName);
        await copyFile(path.join(logoDir, logoName), path.join(outDir, `logo${logoExt}`));
        logoPublic = `/images/projects/${client.slug}/logo${logoExt}`;
      }
    } catch {
      /* no logo folder */
    }

    let imageEntries = [];
    try {
      const imgs = (await fs.readdir(imagensDir))
        .filter((f) => !f.startsWith('.') && /\.(jpe?g|png|webp)$/i.test(f))
        .sort(naturalSort);

      let i = 1;
      for (const file of imgs) {
        const imageExt = ext(file);
        const destName = `${i}${imageExt}`;
        await copyFile(path.join(imagensDir, file), path.join(outDir, destName));
        imageEntries.push({
          src: `/images/projects/${client.slug}/${destName}`,
          alt: `${client.name} — ${i}`,
        });
        i += 1;
      }
    } catch {
      /* no images */
    }

    if (imageEntries.length === 0 && logoPublic) {
      imageEntries.push({
        src: logoPublic,
        alt: `${client.name} logo`,
      });
    }

    const hero = imageEntries[0];
    const description = `Identidade visual e branding para ${client.name}, do conceito à aplicação em touchpoints digitais e impressos.`;

    const frontmatter = {
      id: client.id,
      name: client.name,
      slug: client.slug,
      category: 'brand-identity',
      url: `/projects/${client.slug}`,
      date: '2024',
      industry: 'Identidade visual',
      title: `Identidade visual para ${client.name}.`,
      description,
      logoSrc: logoPublic || undefined,
      hideLogoOverlay: !logoPublic,
      images: imageEntries,
    };

    const yaml = `---
id: '${frontmatter.id}'
name: ${frontmatter.name}
slug: ${frontmatter.slug}
category: brand-identity
url: ${frontmatter.url}
date: '${frontmatter.date}'
industry: ${frontmatter.industry}
title: '${frontmatter.title.replace(/'/g, "''")}'
description: '${description.replace(/'/g, "''")}'
${logoPublic ? `logoSrc: ${logoPublic}` : ''}
hideLogoOverlay: ${!logoPublic}
images:
${imageEntries.map((img) => `  - src: ${img.src}\n    alt: '${img.alt.replace(/'/g, "''")}'`).join('\n')}
---

## Visão geral

${description}
`;

    await fs.writeFile(path.join(OUT_MDX, `${client.slug}.mdx`), yaml, 'utf8');
    console.log(`✓ ${client.slug} (${imageEntries.length} images${logoPublic ? ', logo' : ''})`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
