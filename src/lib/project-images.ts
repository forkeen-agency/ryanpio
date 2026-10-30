import fs from 'fs/promises';
import path from 'path';

import { ProjectImage } from '@/lib/types';

function naturalSort(a: string, b: string) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

function isGalleryFile(name: string) {
  if (name.startsWith('.')) return false;
  if (/^logo/i.test(name)) return false;
  return /\.(jpe?g|png|webp)$/i.test(name);
}

export async function getProjectImagesFromDisk(
  slug: string,
  frontmatterImages: ProjectImage[] = [],
): Promise<{ hero: ProjectImage; gallery: ProjectImage[] }> {
  const dir = path.join(process.cwd(), 'public/images/projects', slug);
  const altBySrc = new Map(
    frontmatterImages.map((img) => [img.src, img.alt] as const),
  );

  let files: string[] = [];
  try {
    files = (await fs.readdir(dir)).filter(isGalleryFile).sort(naturalSort);
  } catch {
    if (frontmatterImages.length > 0) {
      return {
        hero: frontmatterImages[0],
        gallery: frontmatterImages.slice(1),
      };
    }
    throw new Error(`No images found for project: ${slug}`);
  }

  const diskImages: ProjectImage[] = files.map((file) => {
    const src = `/images/projects/${slug}/${file}`;
    return {
      src,
      alt: altBySrc.get(src) ?? `${slug} — ${file}`,
    };
  });

  const preferredHeroSrc = frontmatterImages[0]?.src;
  const heroIndex = preferredHeroSrc
    ? diskImages.findIndex((img) => img.src === preferredHeroSrc)
    : 0;
  const hero =
    heroIndex >= 0 ? diskImages[heroIndex] : diskImages[0];

  const gallery = diskImages.filter((img) => img.src !== hero.src);

  return { hero, gallery };
}
