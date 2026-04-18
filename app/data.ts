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
    title: 'Strategic Sources and Media Investigation',
    coauthors: [],
  },
  {
    uid: 'research-2',
    title: 'Multimodal Bias and its Electoral Outcomes',
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
