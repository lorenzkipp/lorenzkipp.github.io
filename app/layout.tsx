import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f3f4f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1d22' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://lorenzkipp.github.io/'),
  alternates: { canonical: '/' },
  title: {
    default: 'Lorenz Kipp - Sciences Po',
    template: '%s | Lorenz Kipp',
  },
  description: 'Personal website of Lorenz Kipp.',
  keywords: [
    'Lorenz Kipp',
    'Economics',
    'Sciences Po',
    'PhD',
    'Research',
    'Data Analysis',
  ],
  authors: [{ name: 'Lorenz Kipp', url: '/about' }],
  openGraph: {
    title: 'Lorenz Kipp – Sciences Po',
    description: 'Personal website of Lorenz Kipp.',
    url: '/',
    siteName: 'Lorenz Kipp',
    locale: 'en_US',
    type: 'website',
  },
  verification: {
    google: 'bA8uf81UQ46-kKmJd9ifnOtzNqKfMw5ihU1xL6jPBlU',
  },
  icons: {
    icon: [
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png?v=2', sizes: '16x16', type: 'image/png' },
      '/favicon.ico?v=2',
    ],
    apple: '/apple-touch-icon.png?v=2',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="site-body antialiased">
        <ThemeProvider
          enableSystem
          attribute="class"
          storageKey="theme"
          defaultTheme="dark"
        >
          <div className="flex min-h-screen w-full flex-col">
            <div className="relative mx-auto w-full max-w-[41rem] flex-1 px-4 pt-10 sm:pt-12">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
