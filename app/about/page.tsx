import Image from 'next/image'

export default function About() {
  return (
    <div className='flex flex-1 pt-24 justify-center'>
      <div className='mx-auto max-w-2xl text-center'>
        <div className='flex flex-1 justify-center'>
          <Image src='/me.png' alt='league ' width={128} height={128} className=' rounded-3xl overflow-hidden' />
        </div>

        <p className='text-base font-semibold leading-7 text-indigo-600'>aaaa</p>
        <h2 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>About me</h2>
        <p className='mt-6 text-lg leading-8 text-gray-600'>aaaa</p>
      </div>
    </div>
  )
}
