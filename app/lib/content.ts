export const profile = {
  name: 'Jacob Bailes',
  role: 'it specialist, software engineer',
  email: 'contact@jbailes.com',
  phone: '+1 (781) 513-1582',
  phoneHref: 'tel:+17815131582',
  github: 'https://github.com/jbailes99',
  githubLabel: 'github.com/jbailes99',
  linkedin: 'https://www.linkedin.com/in/jbailes01/',
  linkedinLabel: 'linkedin.com/in/jbailes01',
  resume: '/Resume.pdf',
}

export const intro =
  'Computer science graduate working across IT, software development, and hands-on technology projects.'

export const bioLines = [
  'IT specialist in educational IT — supporting about 1500 staff and students across four schools, where no two days are quite the same.',
  'Problem solving is what draws me to technology: dig into an issue, find the root cause, and fix it. Same energy when building an app.',
  'B.S. Computer Science from Salem State University, with a minor in mathematics.',
  'Off hours: restoring consoles, building computers, Arduino and ESP32, cameras, sensors, home automation, and 3D printing. Figure it out, and fix it.',
]

export type ProjectTone = 'lime' | 'sky' | 'violet' | 'amber' | 'teal' | 'rose'

export type Project = {
  slug: string
  name: string
  url: string
  kind: string
  summary: string
  tags: string[]
  tone: ProjectTone
}

export const projects: Project[] = [
  {
    slug: 'fitxpress',
    name: 'FitXpress',
    url: 'https://fitxpress.app',
    kind: 'Full-stack web app',
    summary:
      'Built and deployed a full-stack fitness app on AWS for tracking body metrics, logging workouts, and generating weekly training plans.',
    tags: [
      'React',
      'TypeScript',
      'AWS',
      'Lambda',
      'DynamoDB',
      'Cognito',
      'Tailwind',
    ],
    tone: 'lime',
  },
  {
    slug: 'mbtaxpress',
    name: 'MBTAXpress',
    url: 'https://main.d356nzcx62zjtr.amplifyapp.com/',
    kind: 'Full-stack web app',
    summary:
      'A commuting app on the MBTA API: live vehicle tracking, service status, stations, and reviews.',
    tags: ['React', 'Node', 'Express', 'MongoDB', 'AWS', 'Bootstrap'],
    tone: 'sky',
  },
  {
    slug: 'showcase',
    name: 'LoL Showcase',
    url: 'https://bestvayne.com',
    kind: 'Web Application',
    summary:
      'A lightweight app for tracking games and stats, with a backend on the Riot API.',
    tags: ['React', 'TypeScript', 'Express', 'AWS', 'Tailwind'],
    tone: 'violet',
  },
  {
    slug: 'naashka',
    name: 'Naashka2.0',
    url: 'https://naashka.project.jbailes.com/',
    kind: 'Portfolio',
    summary: 'Professional portfolio ',
    tags: ['React', 'Next.js', 'Tailwind'],
    tone: 'amber',
  },
  {
    slug: 'naashka',
    name: 'Win95 Portfolio',
    url: 'https://project.jbailes.com',
    kind: 'Portfolio',
    summary:
      'A nostalgic portfolio that borrows the Windows 95 interface, down to the windows and the chrome.',
    tags: ['React', 'JavaScript', 'React95'],
    tone: 'teal',
  },
  {
    slug: 'me',
    name: 'me.jbailes.com',
    url: 'https://me.jbailes.com',
    kind: 'Portfolio',
    summary: 'An IT portfolio.',
    tags: ['React', 'JavaScript', 'Tailwind'],
    tone: 'rose',
  },
]

export const education = [
  {
    date: 'May 2025',
    title: 'B.S. Computer Science',
    place: 'Salem State University',
    note: 'Networking & cloud computing',
  },
  {
    date: 'May 2025',
    title: 'Minor in Mathematics',
    place: 'Salem State University',
    note: '',
  },
  {
    date: 'Jan 2023',
    title: 'Attended',
    place: 'Salem State University',
    note: '',
  },
  {
    date: 'Jan 2021',
    title: 'Attended, then transferred',
    place: 'University of Massachusetts Lowell',
    note: '',
  },
  {
    date: 'Jan 2021',
    title: 'A.A. Computer Science',
    place: 'North Shore Community College',
    note: '',
  },
  {
    date: 'Jan 2020',
    title: 'Attended',
    place: 'North Shore Community College',
    note: '',
  },
]

export const skillGroups = [
  {
    label: 'Information technology',
    items: [
      'Help Desk',
      'Hardware and Software Troubleshooting',
      'Asset Management',
      'Wireless Network Troubleshooting',
      'Active Directory',
      'Windows Server',
      'Google Admin Console',
      'Jamf Pro',
      'Apple School Manager',
      'GAM',
      'PaperCut',
      'Mitel VoIP',
      'A/V Equipment',
      'Digital Signage',
      'Windows',
      'macOS',
      'Linux',
      'ChromeOS',
    ],
  },
  {
    label: 'Software development',
    items: [
      'JavaScript',
      'TypeScript',
      'Python',
      'Java',
      'R',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Bootstrap',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Cloud & Serverless Architecture',
    ],
  },
]
