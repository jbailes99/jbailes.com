import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function Contact() {
  return (
    <div className='flex-1 justify-center p-8 overflow-auto'>
      <div className=' bg-gray-800 px-8 py-24 shadow-lg h-full rounded-2xl'>
        <div>
          <h2 className='mx-auto text-gray-200 max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-5xl'>
            Let’s keep in touch.
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-11/12 sm:w-96 mx-auto mt-12'>
            <div className='rounded-2xl'>
              <dl className='text-lg leading-6 text-gray-600'>
                <dt className='sr-only'>Email</dt>
                <dd className='bg-gray-200 p-3 text-center rounded mx-auto'>
                  <SocialIcon
                    url='https://github.com/jbailes99'
                    target='_blank'
                    style={{
                      width: '28px',
                      height: '28px',
                      marginRight: '10px',
                    }}
                  />
                  <a
                    className='font-semibold text-indigo-600'
                    href='https://github.com/jbailes99'
                    target='_blank'
                  >
                    Github
                  </a>
                </dd>
              </dl>
            </div>

            <div className='rounded-2xl'>
              <dl className='text-lg leading-6 text-gray-600'>
                <dt className='sr-only'>LinkedIn</dt>
                <dd className='bg-gray-200 p-3 text-center rounded mx-auto'>
                  <SocialIcon
                    url='https://www.linkedin.com/in/jbailes01/'
                    target='_blank'
                    style={{
                      width: '28px',
                      height: '28px',
                      marginRight: '10px',
                    }}
                  />
                  <a
                    className='font-semibold text-indigo-600'
                    href='https://www.linkedin.com/in/jbailes01/'
                    target='_blank'
                  >
                    LinkedIn
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </div>

        <div className='relative'>
          <div
            className='inset-0 mt-12 w-3/4 mx-auto flex items-center'
            aria-hidden='true'
          >
            <div className='w-full border-t border-gray-400' />
          </div>
        </div>

        <div className='mt-12 flex flex-col items-center'>
          <h2 className='mx-auto text-gray-200 max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-5xl'>
            Say hello.
          </h2>
          <dl className='mt-12 space-y-12 text-2xl leading-6 text-gray-900'>
            <div className=''>
              <dt className='sr-only'></dt>
              <dd className='flex items-center'>
                <SocialIcon
                  url='mailto:contact@jbailes.com'
                  target='_blank'
                  style={{
                    width: '30px',
                    height: '30px',
                    marginRight: '10px',
                  }}
                />
                <a
                  className='font-semibold text-gray-200'
                  href='mailto:contact@jbailes.com'
                >
                  contact@jbailes.com
                </a>
              </dd>
            </div>
            <div className='mt-1'>
              <dt className='sr-only'>Phone number</dt>
              <dd className='font-semibold text-gray-200 flex items-center'>
                <SocialIcon
                  url='https://wa.me/17815131582'
                  target='_blank'
                  style={{
                    width: '30px',
                    height: '30px',
                    marginRight: '10px',
                  }}
                />
                +1 (781) 513-1582
              </dd>
            </div>
          </dl>
        </div>

        <div className='relative'>
          <div
            className='inset-0 mt-12 w-3/4 mx-auto flex items-center'
            aria-hidden='true'
          >
            <div className='w-full border-t border-gray-400' />
          </div>
        </div>

        <div className='mt-12 flex flex-col items-center'>
          <h2 className='mx-auto text-gray-200 max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-5xl'>
            Resume
          </h2>
          <div className='mt-4'>
            <dt className='sr-only'>Resume</dt>
            <dd className='font-semibold text-gray-200 flex items-center'>
              <a
                href='Resume.pdf'
                download
                className='text-gray-300 hover:text-orange-400 hover:cursor-pointer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-12 w-12 text-gray-100 hover:text-orange-400 mr-2'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1z' />
                  <path d='M5 4a1 1 0 011-1h8a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-1-1V4z' />
                </svg>
              </a>
            </dd>
          </div>
        </div>
      </div>
    </div>
  )
}
