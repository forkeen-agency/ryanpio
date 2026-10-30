import localFont from 'next/font/local';

export const zalandoSansExpanded = localFont({
  src: '../../../node_modules/@fontsource-variable/zalando-sans-expanded/files/zalando-sans-expanded-latin-wght-normal.woff2',
  variable: '--font-zalando-sans-expanded',
  weight: '200 900',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});
