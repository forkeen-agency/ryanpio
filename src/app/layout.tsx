import './globals.css';

import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Footer from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { NavigationProvider } from '@/components/providers/navigation-provider';
import { StyleGlideProvider } from '@/components/providers/styleglide-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { zalandoSansExpanded } from '@/lib/fonts/zalando-sans-expanded';
import { cn } from '@/lib/utils';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const ogImage = {
  url: '/images/projects/dream/1.jpg',
  width: 4000,
  height: 2250,
  alt: 'Dream — identidade visual por Studio Pio.',
} as const;

export const metadata: Metadata = {
  metadataBase: new URL('https://hive-nextjs-template.vercel.app'),
  title: {
    default: 'Studio Pio. — Branding e Estratégia de Marca',
    template: '%s | Studio Pio.',
  },
  description:
    'Studio Pio. — branding e estratégia de marca. Método PONTO: diagnóstico, estratégia, direção, identidade e lançamento. Ryan Pio, fundador.',
  keywords: [
    'Studio Pio',
    'Branding',
    'Estratégia de marca',
    'Identidade visual',
    'Ryan Pio',
  ],
  authors: [{ name: 'Studio Pio.' }],
  creator: 'Ryan Pio',
  publisher: 'Studio Pio.',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: 'Studio Pio. — Branding e Estratégia de Marca',
    description:
      'Studio Pio. — branding e estratégia de marca. Método PONTO: diagnóstico, estratégia, direção, identidade e lançamento.',
    siteName: 'Studio Pio.',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Pio. — Branding e Estratégia de Marca',
    description:
      'Studio Pio. — branding e estratégia de marca. Método PONTO: diagnóstico, estratégia, direção, identidade e lançamento.',
    images: [ogImage.url],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn(
        inter.variable,
        plusJakartaSans.variable,
        zalandoSansExpanded.variable,
      )}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <NavigationProvider>
            <StyleGlideProvider />

            <Navbar initialBannerVisible={false} />
            <main className="flex-1">{children}</main>
            <Footer />
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
