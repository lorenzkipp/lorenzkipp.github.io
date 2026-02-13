'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-3.5 w-3.5" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-3.5 w-3.5" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="inline-flex items-center gap-1 rounded-sm border border-zinc-200 p-0.5 dark:border-zinc-800">
      {THEMES_OPTIONS.map((option) => {
        const isActive = theme === option.id

        return (
          <button
            key={option.id}
            className={`inline-flex h-6 w-6 items-center justify-center transition-colors ${
              isActive
                ? 'text-zinc-900 dark:text-zinc-100'
                : 'text-zinc-400 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300'
            }`}
            type="button"
            aria-label={`Switch to ${option.label} theme`}
            onClick={() => setTheme(option.id)}
          >
            {option.icon}
          </button>
        )
      })}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <p className="text-[0.78rem] text-zinc-500 dark:text-zinc-400">© 2026 Lorenz Kipp</p>
        <ThemeSwitch />
      </div>
    </footer>
  )
}
