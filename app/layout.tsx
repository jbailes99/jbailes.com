import './globals.css'

import type { Metadata } from 'next'
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import React from 'react'
import Footer from './components/footer'
import Navbar from './components/navbar'

const sans = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Jacob Bailes',
    template: '%s — Jacob Bailes',
  },
  description:
    'Jacob Bailes is an IT specialist. School and office systems, and the apps built around them.',
  themeColor: '#07080a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className='flex min-h-screen flex-col font-sans antialiased'>
        <Script id='theme-boot' strategy='beforeInteractive'>
          {`(function(){try{var stored=localStorage.getItem('theme');var theme=stored==='light'||stored==='dark'?stored:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');var root=document.documentElement;root.dataset.theme=theme;root.style.colorScheme=theme;var meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.setAttribute('content',theme==='light'?'#f6f3ea':'#07080a');}catch(e){}})();`}
        </Script>
        <a
          href='#content'
          className='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-lime focus:px-3 focus:py-2 focus:text-ink'
        >
          Skip to content
        </a>
        <Navbar />
        <main id='content' className='flex-1'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
