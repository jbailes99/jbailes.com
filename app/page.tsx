import Image from 'next/image'
import Link from 'next/link'
import Navbar from './nav'
import Home from './home'

export default function HomePage() {
  return (
    <div className='flex flex-col overflow-hidden w-full h-screen '>

   <Navbar />
   <Home />

    </div>
  )
}
