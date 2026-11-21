'use client'

import Link from 'next/link'
import { EMAIL, RESEARCH_ITEMS, SOCIAL_LINKS } from './data'

function SocialLink({ children, link }: { children: React.ReactNode; link: string }) {
  return (
    <a
      href={link}
      className="text-sm text-black underline underline-offset-3"
    >
      {children}
    </a>
  )
}

export default function Personal() {
  return (
    <main className="max-w-[39rem] space-y-16 text-[0.84rem] leading-[1.75] sm:space-y-20">
      <section>
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-black">
          About
        </h3>
        <div className="w-full space-y-3 text-black">
          <p>
            I&apos;m a PhD candidate in Economics at Sciences Po, supervised by{' '}
            <Link
              href="https://juliacage.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-3"
            >
              Julia Cagé
            </Link>
            . My interests lie in political economics and the economics of media.
            {' '}I benefit from the advice of{' '}
            <Link
              href="https://www.giuliacaprini.com/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-3"
            >
              Giulia Caprini
            </Link>
            ,{' '}
            <Link
              href="https://sites.google.com/site/emericmlhenry/home"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-3"
            >
              Emeric Henry
            </Link>
            , and{' '}
            <Link
              href="https://eperezrichet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-3"
            >
              Eduardo Perez-Richet
            </Link>
            {' '}on my thesis committee.
          </p>
        </div>

      </section>

      <section>
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-black">
          Research
        </h3>
        <ul className="w-full space-y-2 text-black">
          {RESEARCH_ITEMS.map((item) => {
            return (
              <li key={item.uid}>
                <span className="font-medium italic text-black">{item.title}</span>
                <span className="text-black">
                  {item.coauthors.length > 0 && (
                    <>
                      {' with '}
                      {item.coauthors.map((author, index) => (
                        <span key={author.name}>
                          {index > 0 ? ', ' : ''}
                          {author.link ? (
                            <Link
                              href={author.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline underline-offset-3"
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

      <section>
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-black">
          Contact
        </h3>
        <div className="min-w-0">
          <p className="mb-3 text-black">
            <a
              className="underline underline-offset-3"
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
