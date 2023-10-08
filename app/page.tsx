import Image from 'next/image'
import Link from 'next/link'
// import Navbar from '../components/nav'
import Home from '../pages/home'
import Layout from './components/navLayout'

export default function HomePage() {
  return (
    <div className='flex flex-col overflow-hidden w-full h-screen '>
      <Layout>
        <Home />
      </Layout>
    </div>
  )
}
