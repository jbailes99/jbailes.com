'use client'

import { useRef } from 'react'
import { intro, profile } from '../lib/content'
import Terminal, { type TerminalHandle } from './terminal'

const chips = [
  { cmd: 'whoami', label: 'whoami' },
  { cmd: 'projects', label: 'projects' },
  { cmd: 'play', label: 'play' },
  { cmd: 'help', label: 'help' },
]

const links = [
  { href: profile.github, label: 'GitHub', external: true, icon: GitHubIcon },
  { href: profile.linkedin, label: 'LinkedIn', external: true, icon: LinkedInIcon },
  { href: `mailto:${profile.email}`, label: 'Email', external: false, icon: MailIcon },
  { href: profile.resume, label: 'Resume', external: true, icon: ResumeIcon },
]

export default function Hero() {
  const terminalRef = useRef<TerminalHandle>(null)
  const paneRef = useRef<HTMLDivElement>(null)

  function run(command: string) {
    if (window.innerWidth < 1024) {
      paneRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    terminalRef.current?.run(command)
  }

  return (
    <section className='mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)] lg:gap-12 lg:py-20'>
      <div>
        <p className='font-mono text-sm text-lime'>~/jacob</p>
        <h1 className='mt-4 text-5xl font-medium tracking-tight text-paper sm:text-7xl'>
          Jacob Bailes
        </h1>
        <p className='mt-3 font-mono text-sm lowercase text-mute'>{profile.role}</p>
        <p className='mt-6 max-w-md text-lg leading-relaxed text-mist'>{intro}</p>
        <div className='mt-8 flex flex-wrap gap-2'>
          {chips.map((chip) => (
            <button
              key={chip.cmd}
              type='button'
              onClick={() => run(chip.cmd)}
              className='border border-line px-3 py-1.5 font-mono text-xs text-mist transition-colors hover:border-lime hover:text-lime'
            >
              <span className='text-lime'>❯ </span>
              {chip.label}
            </button>
          ))}
        </div>
        <div className='mt-6 flex flex-wrap gap-1'>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              aria-label={link.label}
              title={link.label}
              className='p-2 text-mute hover:text-lime'
            >
              <link.icon />
            </a>
          ))}
        </div>
      </div>
      <div ref={paneRef} className='min-w-0 scroll-mt-20'>
        <Terminal ref={terminalRef} />
      </div>
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' className='h-5 w-5' fill='currentColor'>
      <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z' />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' className='h-5 w-5' fill='currentColor'>
      <path d='M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z' />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' className='h-5 w-5' fill='none' stroke='currentColor' strokeWidth='1.75'>
      <rect x='3' y='5' width='18' height='14' rx='2' />
      <path d='m4 7 8 6 8-6' />
    </svg>
  )
}

function ResumeIcon() {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' className='h-5 w-5' fill='none' stroke='currentColor' strokeWidth='1.75'>
      <path d='M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z' />
      <path d='M14 3v5h5M8 13h8M8 17h5' />
    </svg>
  )
}
