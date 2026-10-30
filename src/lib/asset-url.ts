export function publicAssetUrl(client: string, ...rest: string[]): string {
  return `/assets/${[client, ...rest]
    .map((segment) => encodeURIComponent(segment))
    .join('/')}`;
}
