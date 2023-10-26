import React from 'react'
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'
import 'react-social-icons/email'
import 'react-social-icons/whatsapp'

export default function Contact() {
  return (
    <div className='flex-1  justify-center p-8 overflow-hidden'>
      <div className='bg-white py-12 sm:py-12'>
        <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='relative isolate overflow-hidden bg-gray-800 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-24'>
            <h2 className='mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Lets keep in touch.
            </h2>
            <div className='text-center'>
              <div className='rounded-2xl p-5'>
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
                        Github
                      </a>
                    </dd>
                  </div>
                  <div className='mt-1'>
                    {/* <dt className='sr-only'>Phone number</dt>
                    <dd>+1 (555) 905-2345</dd> hiiiiiiii ur really coding tho*/}
                  </div>
                </dl>
              </div>

              <div className='rounded-2xl p-5 mt-0'>
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
                        Linkedin
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

              <div className='rounded-2xl p-0 mt-0'>
                <h3 className='text-3xl mt-20 font-semibold leading-7 text-white sm:text-4xl'>
                  Say hello.
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
                    <dd className=' text-indigo-600 font-semibold'>
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
            <svg
              viewBox='0 0 1024 1024'
              className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2'
              aria-hidden='true'
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
                fillOpacity='0.7'
              />
              <defs>
                <radialGradient
                  id='759c1415-0410-454c-8f7c-9a820de03641'
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits='userSpaceOnUse'
                  gradientTransform='translate(512 512) rotate(90) scale(512)'
                >
                  <stop stopColor='white' />
                  <stop offset={1} stopColor='w' stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
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
