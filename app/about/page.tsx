import Image from 'next/image'

export default function About() {
  return (
    <div className='flex-1  justify-center p-8'>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-4xl font-bold tracking-tight text-gray-900'>
          About me
        </h2>
        <div className='flex flex-1 justify-center pt-6'>
          <Image
            src='/aboutMe.png'
            alt='league '
            width={128}
            height={128}
            className=' rounded-3xl overflow-hidden shadow-xl'
          />
        </div>

        <p className='text-base font-semibold leading-7 text-indigo-600'>
          download resume
        </p>
        <p className='mt-6 text-lg leading-8 text-gray-600'>asdfasdfasdfasdf</p>
      </div>
    </div>
  )
}
