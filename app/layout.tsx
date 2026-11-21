import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
  colorScheme: 'light',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://lorenzkipp.github.io/'),
  alternates: { canonical: '/' },
  title: {
    default: 'Lorenz Kipp',
    template: '%s | Lorenz Kipp',
  },
  description:
    'Personal website of Lorenz Kipp, PhD candidate in Economics at Sciences Po.',
  keywords: [
    'Lorenz Kipp',
    'Economics',
    'Sciences Po',
    'PhD',
    'Political Economics',
    'Media Economics',
  ],
  authors: [{ name: 'Lorenz Kipp', url: '/' }],
  openGraph: {
    title: 'Lorenz Kipp',
    description:
      'Personal website of Lorenz Kipp, PhD candidate in Economics at Sciences Po.',
    url: '/',
    siteName: 'Lorenz Kipp',
    locale: 'en_US',
    type: 'website',
  },
  verification: {
    google: 'bA8uf81UQ46-kKmJd9ifnOtzNqKfMw5ihU1xL6jPBlU',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="site-body antialiased">
        <div className="flex min-h-screen w-full flex-col">
          <div className="relative mx-auto w-full max-w-[45rem] flex-1 px-4 pt-10 sm:pt-12">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
