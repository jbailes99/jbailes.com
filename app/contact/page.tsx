import type { Metadata } from 'next'
import { profile } from '../lib/content'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Jacob Bailes by email, or find him on GitHub, LinkedIn, and his resume.',
}

const links = [
  { label: 'GitHub', href: profile.github, icon: GitHubIcon },
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedInIcon },
  { label: 'Resume', href: profile.resume, icon: ResumeIcon },
]

export default function ContactPage() {
  return (
    <article className='mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20'>
      <p className='font-mono text-sm text-lime'>~/jacob/contact</p>
      <h1 className='mt-4 max-w-3xl text-4xl font-medium tracking-tight text-paper sm:text-6xl'>
        Say hello.
      </h1>
      <p className='mt-6 max-w-xl text-lg text-mist'>
        Have a question, need a hand with a technical issue, or want to talk
        about an app idea? Feel free to reach out by email.
      </p>
      <div className='mt-12 max-w-2xl border-t border-line'>
        <a
          href={`mailto:${profile.email}`}
          className='group grid gap-1 border-b border-line py-6 sm:grid-cols-[9rem_1fr] sm:items-baseline'
        >
          <span className='font-mono text-xs uppercase tracking-[0.16em] text-mute group-hover:text-lime'>
            Email
          </span>
          <span className='text-xl text-paper group-hover:text-lime sm:text-2xl'>
            {profile.email}
          </span>
        </a>
        <div className='mt-4 flex items-center gap-1'>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={link.label}
              title={link.label}
              className='p-2 text-mute hover:text-lime'
            >
              <link.icon />
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

function GitHubIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className='h-8 w-8'
      fill='currentColor'
    >
      <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z' />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className='h-8 w-8'
      fill='currentColor'
    >
      <path d='M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z' />
    </svg>
  )
}

function ResumeIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className='h-8 w-8'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.75'
    >
      <path d='M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z' />
      <path d='M14 3v5h5M8 13h8M8 17h5' />
    </svg>
  )
}
