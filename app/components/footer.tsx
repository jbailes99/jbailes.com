import React from 'react'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div>
        <h1 className='mx-auto text-gray-200 font-semibold text-2xl text-center'>
          Contact
        </h1>
        <div className='mt-2 mb-2'>
          <dl className='flex flex-col justify-center sm:flex sm:flex-row sm:justify-between sm:text-xl sm:w-1/2 w-full mx-auto leading-6 text-gray-900'>
            <div className='sm:mx-0 mx-auto mb-2 sm:mb-0'>
              {' '}
              {/* Add mb-2 for mobile spacing */}
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
                  className='font-semibold text-indigo-300'
                  href='mailto:contact@jbailes.com'
                >
                  contact@jbailes.com
                </a>
              </dd>
            </div>
            <div className='sm:mx-0 mx-auto'>
              <dt className='sr-only'>Phone number</dt>
              <dd className='font-semibold text-indigo-300 flex items-center'>
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

        {/* <div className='relative'>
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
            </div> */}
      </div>
    </footer>
  )
}

export default Footer
