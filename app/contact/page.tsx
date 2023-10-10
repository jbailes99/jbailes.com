import React from 'react'
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'
import 'react-social-icons/email'
import 'react-social-icons/whatsapp'

export default function Contact() {
  return (
    <div className='bg-white py-24 sm:py-32 flex-1'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none'>
          <div className='justify-center items-center'>
            <div className='flex justify-center items-center'>
              <h2 className='text-5xl font-bold tracking-tight text-gray-900'>
                Get in touch
              </h2>
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
              <div className='rounded-2xl bg-white p-10 mt-20'>
                <h3 className='text-3xl font-semibold leading-7 text-gray-900'>
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
          {/* <div className='grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3'>
            <div>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900'>Locations</h2>
              <p className='mt-4 leading-7 text-gray-600'>
                Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum commodo.
              </p>
            </div>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8'>
              <div className='rounded-2xl bg-gray-50 p-10'>
                <h3 className='text-base font-semibold leading-7 text-gray-900'>Los Angeles</h3>
                <address className='mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600'>
                  <p>4556 Brendan Ferry</p>
                  <p>Los Angeles, CA 90210</p>
                </address>
              </div>
              <div className='rounded-2xl bg-gray-50 p-10'>
                <h3 className='text-base font-semibold leading-7 text-gray-900'>New York</h3>
                <address className='mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600'>
                  <p>886 Walter Street</p>
                  <p>New York, NY 12345</p>
                </address>
              </div>
              <div className='rounded-2xl bg-gray-50 p-10'>
                <h3 className='text-base font-semibold leading-7 text-gray-900'>Toronto</h3>
                <address className='mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600'>
                  <p>7363 Cynthia Pass</p>
                  <p>Toronto, ON N3Y 4H8</p>
                </address>
              </div>
              <div className='rounded-2xl bg-gray-50 p-10'>
                <h3 className='text-base font-semibold leading-7 text-gray-900'>Chicago</h3>
                <address className='mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600'>
                  <p>726 Mavis Island</p>
                  <p>Chicago, IL 60601</p>
                </address>
              </div> */}
        </div>
      </div>
    </div>
  )
}
