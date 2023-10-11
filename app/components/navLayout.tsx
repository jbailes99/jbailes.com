import React, { ReactNode } from 'react'
import Navbar from '@/app/components/nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col overflow-hidden w-full h-screen '>
      <Navbar />
      {children}
    </div>
  )
}
