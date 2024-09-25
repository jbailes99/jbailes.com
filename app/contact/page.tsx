import React from 'react'
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'
import 'react-social-icons/email'
import 'react-social-icons/whatsapp'

export default function Contact() {
  return (
    <div className='flex-1  justify-center p-8 overflow-auto'>
      <div className='relative h-full isolate overflow-hidden bg-gray-800 px-8 py-24 shadow-lg rounded-2xl '>
        <div>
          <h2 className='mx-auto text-gray-200 max-w-2xl text-center text-3xl font-bold tracking-tight  sm:text-5xl'>
            Lets keep in touch.
          </h2>
          <div className='grid grid-cols-2 gap-0 w-96 mx-auto mt-12'>
            <div className='rounded-2xl'>
              <dl className='text-lg leading-6 text-gray-600'>
                <dt className='sr-only'>Email</dt>
                <dd className='bg-gray-200 p-1 w-3/4 text-center rounded mx-auto'>
                  <SocialIcon
                    url='www.github.com'
                    href='https://github.com/jbailes99'
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
                <div className='mt-1'>
                  {/* <dt className='sr-only'>Phone number</dt>
                    <dd>+1 (555) 905-2345</dd> hiiiiiiii ur really coding tho*/}
                </div>
              </dl>
            </div>

            <div className='rounded-2xl  '>
              <h3 className='text-base font-semibold leading-7 text-gray-900'></h3>
              <dl className=' text-lg leading-6 text-gray-600'>
                <dt className='sr-only'>Email</dt>
                <dd className='bg-gray-200 p-1 w-3/4 text-center rounded mx-auto'>
                  <SocialIcon
                    url='www.linkedin.com'
                    href='https://www.linkedin.com/in/jbailes01/'
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
                    Linkedin
                  </a>
                </dd>
                <div className='mt-1'>
                  {/* <dt className='sr-only'>Phone number</dt>
                    <dd>+1 (555) 905-4567</dd> */}
                </div>
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
          {' '}
          <h2 className='mx-auto text-gray-200 max-w-2xl text-center text-3xl font-bold tracking-tight  sm:text-5xl'>
            Say hello.
          </h2>
          <dl className='mt-12 space-y-12  text-2xl leading-6 text-gray-900'>
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
      </div>
    </div>
  )
  return (
    <div className='flex-1  justify-center p-8'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <div className='flex justify-center items-center'>
              <h2 className='text-4xl mt-32 font-bold tracking-tight text-gray-900'>
                Get in touch
              </h2>
              {/* <p className=' text-lg leading-8 text-gray-600'>check me out</p> */}
              {/* <p className='mt-4 leading-7 text-gray-600'>
                Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
              </p> */}
            </div>

            <div className='text-center'>
              <div className='rounded-2xl bg-white p-5'>
                <h3 className='text-base font-semibold leading-7 text-gray-900'></h3>
                <dl className='mt-3 space-y-1 text-lg leading-6 text-gray-600'>
                  <div>
                    <dt className='sr-only'>Email</dt>
                    <dd>
                      <SocialIcon
                        url='www.github.com'
                        href='https://github.com/jbailes99'
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
                        jbailes99
                      </a>
                    </dd>
                  </div>
                  <div className='mt-1'>
                    {/* <dt className='sr-only'>Phone number</dt>
                    <dd>+1 (555) 905-2345</dd> hiiiiiiii ur really coding tho*/}
                  </div>
                </dl>
              </div>

              <div className='rounded-2xl bg-white p-5 mt-0'>
                <h3 className='text-base font-semibold leading-7 text-gray-900'></h3>
                <dl className='mt-3 space-y-1 text-lg leading-6 text-gray-600'>
                  <div>
                    <dt className='sr-only'>Email</dt>
                    <dd>
                      <SocialIcon
                        url='www.linkedin.com'
                        href='https://www.linkedin.com/in/jbailes01/'
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
                        jbailes01
                      </a>
                    </dd>
                  </div>
                  <div className='mt-1'>
                    {/* <dt className='sr-only'>Phone number</dt>
                    <dd>+1 (555) 905-4567</dd> */}
                  </div>
                </dl>
              </div>

              <div className='relative'>
                <div
                  className='absolute inset-4 mt-12 flex items-center'
                  aria-hidden='true'
                >
                  <div className='w-full border-t border-gray-300' />
                </div>
              </div>

              <div className='rounded-2xl bg-white p-0 mt-0'>
                <h3 className='text-3xl mt-44 font-semibold leading-7 text-gray-900'>
                  Say hello
                </h3>
                <dl className='mt-6 space-y-8 text-xl leading-6 text-gray-900'>
                  <div>
                    <dt className='sr-only'></dt>
                    <dd>
                      <SocialIcon
                        url='www.email.com'
                        href='https://github.com/jbailes99'
                        target='_blank'
                        style={{
                          width: '30px',
                          height: '30px',
                          marginRight: '10px',
                        }}
                      />
                      <a
                        className='font-semibold text-indigo-600'
                        href='mailto:contact@jbailes.com'
                      >
                        contact@jbailes.com
                      </a>
                    </dd>
                  </div>
                  <div className='mt-1'>
                    <dt className='sr-only'>Phone number</dt>
                    <dd className=''>
                      <SocialIcon
                        url='www.whatsapp.com'
                        href='https://github.com/jbailes99'
                        target='_blank'
                        style={{
                          width: '30px',
                          height: '30px',
                          marginRight: '10px',
                        }}
                      />{' '}
                      +1 (781) 513-1582
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
