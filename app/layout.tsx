import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nim-fawn.vercel.app/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Lorenz Kipp - Sciences Po',
    template: '%s | Lorenz Kipp'
  },
  description:  'Personal website of Lorenz Kipp.',
  keywords: [
    'Lorenz Kipp',
    'Sciences Po',
    'Political Science',
    'Public Policy',
    'Data Analysis',
  ],
  authors: [
    { name: 'Lorenz Kipp', url: 'https://nim-fawn.vercel.app/about' },
  ],
  openGraph: {
    title: 'Lorenz Kipp – Sciences Po',
    description: 'Personal website of Lorenz Kipp.',
    url: 'https://nim-fawn.vercel.app/',
    siteName: 'Lorenz Kipp',
    locale: 'en_US',
    type: 'website',
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
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

