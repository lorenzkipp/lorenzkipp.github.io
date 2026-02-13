type ResearchItem = {
  uid: string
  title: string
  coauthors: {
    name: string
    link?: string
  }[]
  status?: string
  note?: string
}

type SocialLink = {
  label: string
  link: string
}

export const RESEARCH_ITEMS: ResearchItem[] = [
  {
    uid: 'research-1',
    title: "'Off and Away all Day': Smartphone Use and Mental Health",
    coauthors: [],
    status: 'Working paper',
    note: 'How school mobile phone bans impact student mental health.',
  },
  {
    uid: 'research-2',
    title: "Multimodal Bias and its Electoral Outcomes",
    coauthors: [
      {
        name: 'Elliott Ash',
        link: 'https://elliottash.com/',
      },
      {
        name: 'Aarushi Kalra',
        link: 'https://aarushirita.github.io/',
      },
    ],
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/lorenzkipp',
  },
]

export const EMAIL = 'lorenz.kipp@sciencespo.fr'
