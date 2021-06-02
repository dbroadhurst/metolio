export type BioJobInfo = {
  title: string
  company: string
  summary: string
  startDate: string
  endDate: string
  details: { description: string }[]
}

export type BioJobSkills = {
  description: string
}

export type BioEducation = {
  description: string
}

export type BioOther = {
  description: string
}

export type BioPortfolio = {
  title: string
  date: string
  bannerImage: string
  description: string
}

export type BioInfo = {
  name: string
  username: string
  email: string
  telephone: string
  avatarImage: string
  homeBannerImage: string
  blogBannerImage: string
  contactBannerImage: string
  contactThumbBannerImage: string
  resumeBannerImage: string
  resumeThumbBannerImage: string
  blogsBannerImage: string
  blogsThumbBannerImage: string
  portfolioBannerImage: string
  portfolioThumbBannerImage: string
  linkedinLink: string
  twitterLink: string
  facebookLink: string
  githubLink: string
  gitlabLink: string
  instagramLink: string
  street: string
  city: string
  state: string
  zip: string
  title: string
  summary: string
  darkTheme: boolean
  skills: BioJobSkills[]
  jobs: BioJobInfo[]
  education: BioEducation[]
  other: BioOther[]
  portfolio: BioPortfolio[]
}

export const bio: BioInfo = {
  name: 'Satoshi Nakamoto',
  username: 'snakamoto',
  email: 'snakamoto@bitcoin.com',
  telephone: '10002007',
  avatarImage: '/placeholder-avatar.png',
  homeBannerImage: '/placeholder-home-banner.png',
  blogBannerImage: '/placeholder-banner.jpg',
  contactThumbBannerImage: '/placeholder-thumb-contact-banner.png',
  contactBannerImage: '/placeholder-contact-banner.png',
  resumeBannerImage: '/placeholder-resume-banner.png',
  resumeThumbBannerImage: '/placeholder-thumb-resume-banner.png',
  blogsBannerImage: '/placeholder-blog-banner.png',
  blogsThumbBannerImage: '/placeholder-thumb-blog-banner.png',
  portfolioBannerImage: '/placeholder-portfolio-banner.png',
  portfolioThumbBannerImage: '/placeholder-thumb-portfolio-banner.png',
  linkedinLink: '',
  twitterLink: 'https://twitter.com/i/topics/1007360414114435072',
  facebookLink: '',
  githubLink: 'https://github.com/bitcoin/bitcoin',
  gitlabLink: '',
  instagramLink: '',
  street: '1 Bitcoin Road',
  city: 'Block 0',
  state: 'Internet',
  zip: '20070',
  title: 'Bitcoin Developer',
  summary:
    'On 9 January 2009, Nakamoto released version 0.1 of the bitcoin software on SourceForge, and launched the network by defining the genesis block of bitcoin (block number 0), which had a reward of 50 bitcoins',
  darkTheme: true,
  skills: [
    { description: 'Languages - C' },
    { description: 'Frameworks - ECDSA, secp256k1, ECDH' },
    { description: 'SDLC - Waterfall, Agile, Scrum, GitFlow' },
    { description: 'Roles - Architect, Lead, Developer' },
    { description: 'Databases - Distributed' },
  ],
  jobs: [
    {
      company: 'Bitcoin',
      summary:
        'Hands-on software architect building and managing a team of full-stack developers making next-gen web applications.',
      startDate: new Date('1/11/2007').toDateString(),
      endDate: '',
      title: 'Founder / Lead Developer',
      details: [
        { description: 'Launched the network by defining the genesis block of bitcoin (block number 0)' },
        { description: 'Gave control of the source code repository and network alert key to Gavin Andresen' },
        { description: 'Awesome at keeping secrets' },
      ],
    },
  ],
  education: [
    {
      description: 'TBD',
    },
  ],
  other: [
    {
      description:
        "Developed bitcoin, authored the bitcoin white paper, and created and deployed bitcoin's original reference implementation.",
    },
  ],
  portfolio: [
    {
      bannerImage: '/bitcoin.png',
      date: new Date('7/1/2007').toDateString(),
      description:
        'Bitcoin was created as a way for people to send money over the internet. The digital currency was intended to provide an alternative payment system that would operate free of central control but otherwise be used just like traditional currencies.',
      title: 'Bitcoin',
    },
  ],
}
