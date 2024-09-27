'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import cn from 'classnames'
import { Fragment } from 'react'
import LineSVG from './signature' // Adjust the import path according to your folder structure

const navigationItems = [
  {
    key: 'home',
    name: 'Home',
    href: '/',
  },
  {
    name: 'My Resume',
    href: '/Resume.pdf', // Update this to the path of your PDF
    target: '_blank', // Open in a new tab
    download: true, // This attribute suggests that the link is for downloading
  },
]

export default function Navbar() {
  const pathname = usePathname()
  const currentPage = React.useMemo(
    () =>
      navigationItems.find((item) => item.href.startsWith(pathname))?.key ??
      'home',
    [pathname]
  )

  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <LineSVG />
                </div>
              </div>
              <div className='flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='sm:ml-10 sm:block'>
                  <div className='flex space-x-1 sm:space-x-10'>
                    {navigationItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          item.key === currentPage
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={
                          item.key === currentPage ? 'page' : undefined
                        }
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigationItems.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={cn(
                    item.key === currentPage // Corrected this line
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.key === currentPage ? 'page' : undefined}
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
}
