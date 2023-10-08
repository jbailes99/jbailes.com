import './globals.css'

import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import React, { ReactNode } from 'react'
import Navbar from '@/components/navbar'

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
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <div className="flex flex-1 overflow-auto">{children}</div>
      </body>
    </html>
  )
}
