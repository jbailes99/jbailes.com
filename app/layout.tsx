import './globals.css'

import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import React from 'react'
import Navbar from './components/navbar'
const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JB | Portfolio ',
  description: 'Jacob Bailes | Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className='flex-grow overflow-y-auto'>{children}</main>
      </body>
    </html>
  )
}
