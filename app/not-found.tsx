import Link from 'next/link'

export default function NotFound() {
  return (
    <article className='mx-auto max-w-6xl px-5 py-20 sm:px-8'>
      <p className='font-mono text-sm text-lime'>404</p>
      <h1 className='mt-4 text-4xl font-medium tracking-tight text-paper sm:text-6xl'>
        This route is not in the build.
      </h1>
      <p className='mt-6 text-lg text-mist'>The shell is still running on the home page.</p>
      <Link
        href='/'
        className='mt-8 inline-block border border-lime px-4 py-2 font-mono text-sm text-lime hover:bg-lime hover:text-ink'
      >
        cd ~
      </Link>
    </article>
  )
}
