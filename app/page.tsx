'use client'

import Link from 'next/link'
import { EMAIL, RESEARCH_ITEMS, SOCIAL_LINKS } from './data'

function SocialLink({ children, link }: { children: React.ReactNode; link: string }) {
  return (
    <a
      href={link}
      className="text-[0.84rem] text-zinc-700 underline decoration-zinc-400 underline-offset-3 transition-colors hover:text-black dark:text-zinc-300 dark:decoration-zinc-600 dark:hover:text-white"
    >
      {children}
    </a>
  )
}

export default function Personal() {
  return (
    <main className="space-y-9 text-[0.84rem] leading-[1.58]">
      <section>
        <h3 className="mb-3 text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-zinc-600 dark:text-zinc-400">
          About
        </h3>
        <div className="w-full space-y-3 text-zinc-700 dark:text-zinc-300">
          <p>
            I&apos;m a PhD candidate at Sciences Po supervised by{' '}
            <Link
              href="https://juliacage.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-400 underline-offset-3 hover:text-black dark:decoration-zinc-600 dark:hover:text-white"
            >
              Julia Cagé
            </Link>
            . My research is in Political Economics, focused on social media, platform design, and user outcomes.
          </p>
          <p>
            I am a replicator for the{' '}
            <Link
              href="https://www.journals.uchicago.edu/toc/jpe/current"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-zinc-400 underline-offset-3 hover:text-black dark:decoration-zinc-600 dark:hover:text-white"
            >
              Journal of Political Economy
            </Link>
            .
          </p>
        </div>

      </section>

      <section className="pt-6">
        <h3 className="mb-3 text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-zinc-600 dark:text-zinc-400">
          Research
        </h3>
        <ul className="w-full space-y-2 text-zinc-700 dark:text-zinc-300">
          {RESEARCH_ITEMS.map((item) => {
            return (
              <li key={item.uid}>
                <span className="font-medium italic text-zinc-900 dark:text-zinc-100">{item.title}</span>
                <span className="text-zinc-600 dark:text-zinc-400">
                  {item.coauthors.length > 0 && (
                    <>
                      {' · with '}
                      {item.coauthors.map((author, index) => (
                        <span key={author.name}>
                          {index > 0 ? ', ' : ''}
                          {author.link ? (
                            <Link
                              href={author.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline decoration-zinc-400 underline-offset-3 hover:text-black dark:decoration-zinc-600 dark:hover:text-white"
                            >
                              {author.name}
                            </Link>
                          ) : (
                            author.name
                          )}
                        </span>
                      ))}
                    </>
                  )}
                  {item.status ? ` · ${item.status}` : ''}
                </span>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="pt-7">
        <h3 className="mb-3 text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-zinc-600 dark:text-zinc-400">
          Contact
        </h3>
        <div className="min-w-0">
          <p className="mb-3 text-zinc-700 dark:text-zinc-300">
            <a
              className="underline decoration-zinc-400 underline-offset-3 dark:decoration-zinc-600"
              href={`mailto:${EMAIL}`}
            >
              {EMAIL}
            </a>
          </p>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <SocialLink key={link.label} link={link.link}>
                {link.label}
              </SocialLink>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
