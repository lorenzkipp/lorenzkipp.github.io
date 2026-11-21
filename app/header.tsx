'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Download } from 'lucide-react'

export function Header() {
  return (
    <header className="mb-14 sm:mb-16">
      <div className="mb-16 sm:mb-20">
        <div className="relative h-55 w-full overflow-hidden border-y border-zinc-400/55">
          <Image
            src="/wide-portrait.png"
            alt="Portrait banner"
            fill
            priority
            className="object-cover object-[60%_22%] saturate-100 brightness-95"
          />
        </div>
      </div>

      <div className="border-y border-zinc-300/70 py-1">
        <Link
          href="/"
          className="block text-[1.125rem] uppercase leading-tight tracking-normal text-black"
          style={{ fontFamily: 'Avenir, Futura, "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 'lighter' }}
        >
          LORENZ KIPP
        </Link>
      </div>

      <div className="mt-4">
        <Link
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-black"
        >
          <Download className="h-3 w-3" />
          CV
        </Link>
      </div>
    </header>
  )
}
