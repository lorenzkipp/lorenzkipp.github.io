import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
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
  verification : {
    google: 'bA8uf81UQ46-kKmJd9ifnOtzNqKfMw5ihU1xL6jPBlU',
  },
  icons: {
    icon: [{ url: '/icon.ico', sizes: 'any' }],   // main favicon
    shortcut: [{ url: '/icon.ico' }],             // browser shortcuts
    apple: [],                                     // (optional) none for now
  },
}

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
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
