type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: '\'Off and Away all Day\': Smartphone Use and Mental Health',
    description: 'How school mobile phone bans impact student mental health',
    link: '/blog/smartphones-and-mental-health',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/lorenzkipp',
  },
]

export const EMAIL = 'lorenz.kipp@sciencespo.fr'
