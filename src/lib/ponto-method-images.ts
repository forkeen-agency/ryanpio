import pontoHoverImages from '@/data/ponto-hover-images.json';
import { publicAssetUrl } from '@/lib/asset-url';

const pontoImageByKey = Object.fromEntries(
  pontoHoverImages.map((entry) => [
    entry.key,
    publicAssetUrl(entry.folder, 'Imagens', entry.file),
  ]),
) as Record<(typeof pontoHoverImages)[number]['key'], string>;

export function pontoHoverImage(key: keyof typeof pontoImageByKey): string {
  const src = pontoImageByKey[key];
  if (!src) {
    throw new Error(`Missing PONTO hover image for "${String(key)}"`);
  }
  return src;
}
