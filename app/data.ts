type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

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

// type Education = {
//   institution: string
//   degree: string
//   distinction?: string
//   start: string
//   end: string
//   link: string
//   id: string
// }

type Degree = {
  title: string          
  start: string          
  end: string            
  distinction?: string   
}

type Education = {
  id: string
  institution: string
  link: string
  degrees: Degree[]
}

// export const EDUCATION: Education[] = [
//     {
//     institution: 'Sciences Po, Paris',
//     degree: 'Master of Arts',
//     distinction: 'summa cum laude',
//     start: '2022',
//     end: '2024',
//     link: 'https://www.sciencespo.fr/fr/',
//     id: 'edu2',
//   },
//   {
//     institution: 'Paris School of Economics',
//     degree: 'Master of Research',
//     distinction: 'summa cum laude',
//     start: '2024',
//     end: '2025',
//     link: 'https://www.parisschoolofeconomics.eu/en/',
//     id: 'edu1',
//   },
//   {
//     institution: 'Magdalen College, University of Oxford',
//     degree: 'Bachelor of Arts',
//     distinction: 'First Class Honours',
//     start: '2018',
//     end: '2022',
//     link: 'https://www.ox.ac.uk/admissions/undergraduate/colleges/college-listing/magdalen-college',
//     id: 'edu3',
//   },
// ]

// -- data.ts
export const EDUCATION: Education[] = [
  {
    id: 'edu_scpo',
    institution: 'Sciences Po, Paris',
    link: 'https://www.sciencespo.fr/en/',
    degrees: [
      {
        title: 'PhD',
        start: '2025',
        end: 'Present',          // or just '-'
      },
      {
        title: 'MA, Economics & Public Policy',
        distinction: 'summa cum laude',
        start: '2022',
        end: '2024',
      },
    ],
  },
  {
    id: 'edu_pse',
    institution: 'Paris School of Economics',
    link: 'https://www.parisschoolofeconomics.eu/en/',
    degrees: [
      {
        title: 'MRes, Analysis & Policy in Economics',
        distinction: 'summa cum laude',
        start: '2024',
        end: '2025',
      },
    ],
  },
  {
    id: 'edu_oxford',
    institution: 'Magdalen College, University of Oxford',
    link: 'https://www.ox.ac.uk/admissions/undergraduate/colleges/college-listing/magdalen-college',
    degrees: [
      {
        title: 'BA, Philosophy & Modern Languages',
        distinction: 'First Class Honours',
        start: '2018',
        end: '2022',
      },
    ],
  },
]


export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

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
    link: 'https://github.com/LorenzK-5714',
  },
]

export const EMAIL = 'lorenz.kipp@sciencespo.fr'
