'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const FADE_UP = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: 'easeOut' }
  }
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-10"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={FADE_UP}
      >
      <h3 className="mb-3 text-lg font-medium">About</h3>
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-300">

            I'm a first-year PhD candidate at Sciences Po supervised by{' '}
  <Link
    href="https://juliacage.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block hover:text-black dark:hover:text-white transition-colors link-underline"
  >
    Julia Cagé
  </Link>.
            My research is in Political Economics, with a focus on social media: how content is produced, how platforms
            distribute it, and how it affects users. One direction I'm exploring is mental health effects on adolescents.
            In parallel, I'm interested in what incentivises people to produce untrue or hateful content, and how 
            platform design shapes those incentives. <br /><br />

            I'm a research assistant to{' '}
  <Link
    href="https://elliottash.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block hover:text-black dark:hover:text-white transition-colors link-underline"
  >
    Elliott Ash
  </Link>{' '}and{' '}
  <Link
    href="https://aarushirita.github.io/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block hover:text-black dark:hover:text-white transition-colors link-underline"
  >
    Aarushi Kalra
  </Link>, and a replicator for the{' '}
            <Link
              href="https://www.journals.uchicago.edu/toc/jpe/current"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors link-underline"
            >
              <i>Journal of Political Economy</i>
            </Link>. I also co-organise the{' '}
            <Link
            href="https://paris-ai-reading-group.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors link-underline"
          >
            Political Economics of AI reading group
          </Link>.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={FADE_UP}
      >
        <h3 className="mb-3 text-lg font-medium">Research</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={FADE_UP}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
