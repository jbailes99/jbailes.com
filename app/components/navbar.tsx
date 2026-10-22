'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useLayoutEffect, useState } from 'react'
import { profile } from '../lib/content'

const links = [
  { href: '/#home', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const NAME = 'jacob bailes'

function applyTheme(theme: 'light' | 'dark') {
  const root = document.documentElement
  root.dataset.theme = theme
  root.style.colorScheme = theme
  localStorage.setItem('theme', theme)
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta)
    meta.setAttribute('content', theme === 'light' ? '#f6f3ea' : '#07080a')
}

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [typed, setTyped] = useState(0)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useLayoutEffect(() => {
    const current =
      document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
    setTheme(current)
  }, [])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setTyped(NAME.length)
      return
    }
    setTyped(0)
    let count = 0
    const timer = window.setInterval(() => {
      count += 1
      setTyped(count)
      if (count >= NAME.length) window.clearInterval(timer)
    }, 62)
    return () => window.clearInterval(timer)
  }, [])

  function toggleTheme() {
    const current =
      document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
    const next = current === 'light' ? 'dark' : 'light'
    applyTheme(next)
    setTheme(next)
  }

  return (
    <header className='sticky top-0 z-40 border-b border-line/80 bg-ink/80 backdrop-blur-md'>
      <div className='mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8'>
        <Link
          href='/'
          aria-label='Jacob Bailes'
          className='inline-flex min-w-[14ch] items-center font-mono text-sm tracking-tight text-paper'
        >
          <span aria-hidden='true'>
            {NAME.slice(0, typed)}
            {typed < NAME.length && <span className='cursor-blink text-lime'>_</span>}
          </span>
        </Link>
        <div className='flex items-center gap-5 sm:gap-7'>
          <nav
            className='hidden items-center gap-7 sm:flex'
            aria-label='Primary'
          >
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-sm ${active ? 'text-lime' : 'text-mute hover:text-paper'}`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              )
            })}
            <a
              href={profile.resume}
              target='_blank'
              rel='noopener noreferrer'
              className='font-mono text-sm text-mute hover:text-paper'
            >
              Resume
            </a>
          </nav>
          <button
            type='button'
            onClick={toggleTheme}
            aria-label={
              theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
            }
            className='p-2 text-mute hover:text-lime'
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            type='button'
            className='font-mono text-sm text-mist sm:hidden'
            aria-expanded={open}
            aria-controls='mobile-nav'
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'close' : 'menu'}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id='mobile-nav'
          className='border-t border-line px-5 py-4 sm:hidden'
          aria-label='Mobile'
        >
          <div className='flex flex-col gap-3'>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='font-mono text-sm text-paper'
              >
                {link.label}
              </Link>
            ))}
            <a
              href={profile.resume}
              target='_blank'
              rel='noopener noreferrer'
              className='font-mono text-sm text-paper'
            >
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

function SunIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className='h-[18px] w-[18px]'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.75'
    >
      <circle cx='12' cy='12' r='4' />
      <path d='M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4' />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      className='h-[18px] w-[18px]'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.75'
    >
      <path d='M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5Z' />
    </svg>
  )
}
