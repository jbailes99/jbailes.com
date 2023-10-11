'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import cn from 'classnames'
import { Fragment } from 'react'

const navigation = [
  { name: 'Home', href: '/home', current: true },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

export default function Navbar() {
  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <Image
                    src='/me.png'
                    alt='me'
                    width={48}
                    height={48}
                    className='mb-0 rounded-full shadow-lg overflow-hidden'
                  />
                </div>
              </div>
              <div className='flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='hidden sm:ml-10 sm:block'>
                  <div className='flex space-x-6'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={cn(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={cn(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
  return (
    <nav className='bg-blue-500 p-1 flex-shrink-0'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='h-4'>
          <div className='w-10 h-11 flex items-center justify-center rounded-full bg-blue-500'>
            <div className='text-white text-2xl font-bold'>JB</div>
          </div>
        </div>
      </div>
      <ul className='flex space-x-8 justify-end pr-12 text-xl '>
        <li>
          <Link legacyBehavior href='/'>
            <a className='text-white hover:text-gray-200'>Home</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href='/about'>
            <a className='text-white hover:text-gray-200'>About</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href='/contact'>
            <a className='text-white hover:text-gray-200'>Contact</a>
          </Link>
        </li>

        <li>
          <Link legacyBehavior href='/blog'>
            <a className='text-white hover:text-gray-200'>Projects</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
