import type { Metadata } from 'next'
import WorkList from '../components/work-list'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Apps built by Jacob Bailes, alongside school and office IT support.',
}

export default function ProjectsPage() {
  return (
    <article className='mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20'>
      <p className='font-mono text-sm text-lime'>~/jacob/work</p>
      <h1 className='mt-4 text-4xl font-medium tracking-tight text-paper sm:text-6xl'>
        Work
      </h1>
      <p className='mt-6 max-w-2xl text-lg text-mist'>
        Apps I have built, alongside the systems work.
      </p>
      <div className='mt-10'>
        <WorkList />
      </div>
    </article>
  )
}
