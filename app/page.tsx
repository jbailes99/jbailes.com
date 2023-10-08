import Image from 'next/image'
import Link from 'next/link'
// import Navbar from '../components/nav'
// import Home from '../pages/home'
// import Layout from './components/navLayout'

export default function HomePage() {
  return (
    <div className='flex-1 overflow-auto flex flex-col justify-center items-center'>
      {/* <Image src='/me.png' alt='league' width={128} height={128} className='mb-2 rounded-full overflow-hidden' /> */}
      <h1 className='text-7xl font-bold'>Jacob Bailes</h1>
      <p className='text-lg mt-4'>work in progress</p>
    </div>
  )
}
