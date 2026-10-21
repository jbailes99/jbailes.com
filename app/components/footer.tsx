'use client'

import { usePathname } from 'next/navigation'
import { profile } from '../lib/content'

export default function Footer() {
  const pathname = usePathname()
  if (pathname === '/' || pathname === '/about' || pathname === '/contact') return null

  return (
    <footer className='border-t border-line'>
      <div className='mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-8'>
        <div>
          <p className='font-mono text-xs uppercase tracking-[0.2em] text-lime'>Contact</p>
          <a
            href={`mailto:${profile.email}`}
            className='mt-3 block text-2xl text-paper hover:text-lime sm:text-3xl'
          >
            {profile.email}
          </a>
          <a href={profile.phoneHref} className='mt-2 block font-mono text-sm text-mute hover:text-paper'>
            {profile.phone}
          </a>
        </div>
        <div className='flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm'>
          <a
            href={profile.github}
            target='_blank'
            rel='noopener noreferrer'
            className='text-mute hover:text-lime'
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='text-mute hover:text-lime'
          >
            LinkedIn
          </a>
          <a
            href={profile.resume}
            target='_blank'
            rel='noopener noreferrer'
            className='text-mute hover:text-lime'
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  )
}
