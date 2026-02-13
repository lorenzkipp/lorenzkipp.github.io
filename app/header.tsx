'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Download } from 'lucide-react'

export function Header() {
  return (
    <header className="mb-10">
      <div className="mb-12">
        <div className="relative h-55 w-[110%] -ml-[5%] overflow-hidden border-y border-zinc-400/55 dark:border-zinc-600/70">
          <Image
            src="/more-wide-portrait.jpg"
            alt="Portrait banner"
            fill
            priority
            className="object-cover object-[60%_22%] saturate-100 brightness-90"
          />
        </div>
      </div>

      <div className="border-y border-zinc-400/55 py-1.5 dark:border-zinc-600/70">
        <Link
          href="/"
          className="block text-[1.34rem] uppercase leading-none tracking-[0.015em] text-zinc-700 dark:text-zinc-300"
          style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 350 }}
        >
          LORENZ KIPP
        </Link>
      </div>

      <div className="mt-3 space-y-0.5 text-[0.84rem] text-zinc-600 dark:text-zinc-400">
        <p>PhD Student in Economics</p>
        <p>Sciences Po</p>
      </div>

      <div className="mt-3">
        <Link
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[0.82rem] text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          <Download className="h-3.5 w-3.5" />
          CV
        </Link>
      </div>
    </header>
  )
}
