'use client'
import Image from 'next/image'
import {
  ArrowRightIcon,
  BookOpenIcon,
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from '@heroicons/react/20/solid'

import Link from 'next/link'
import React, { useState } from 'react'

export default function About() {
  const images = ['/about2.jpg'] // Add image paths
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  const timeline = [
    {
      id: 1,
      content: 'Attended',
      target: 'North Shore Community College',
      href: '#',
      date: 'Jan 2020',
      datetime: '2021-01-20',
      icon: BookOpenIcon,
      iconBackground: 'bg-blue-400',
    },
    {
      id: 2,
      content: 'Completed Associates Degree in',
      target: 'Arts/Computer Science',
      href: '#',
      date: 'Jan 2021',
      datetime: '2021-01-20',
      icon: CheckIcon,
      iconBackground: 'bg-green-500',
    },
    {
      id: 3,
      content: 'Attended ',
      target: 'University of Massachusetts Lowell',
      href: '#',
      date: 'Jan 2021',
      datetime: '2021-01-20',
      icon: BookOpenIcon,
      iconBackground: 'bg-blue-400',
    },
    {
      id: 4,
      content: 'Transferred',
      target: '',
      href: '#',
      date: '',
      datetime: '2020-09-28',
      icon: ArrowRightIcon,
      iconBackground: 'bg-gray-500',
    },
    {
      id: 5,
      content: 'Attended',
      target: 'Salem State University',
      href: '#',
      date: 'Jan 2023',
      datetime: '2023-01-30',
      icon: BookOpenIcon,
      iconBackground: 'bg-blue-400',
    },
    {
      id: 6,
      content: 'Completed Bachelors Degree in',
      target: 'Computer Science',
      href: '#',
      date: 'Dec 2023',
      datetime: '2021-01-20',
      icon: CheckIcon,
      iconBackground: 'bg-green-500',
    },
    {
      id: 6,
      content: 'Completed Minor in',
      target: 'Mathematics',
      href: '#',
      date: 'Dec 2023',
      datetime: '2021-01-20',
      icon: CheckIcon,
      iconBackground: 'bg-green-500',
    },
    // {
    //   id: 7,
    //   content: 'Applied to',
    //   target: 'Front End Developer',
    //   href: '#',
    //   date: '2023',
    //   datetime: '2020-09-20',
    //   icon: UserIcon,
    //   iconBackground: 'bg-gray-400',
    // },
  ]

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className='flex-1 justify-center'>
      <div className='flex items-center justify-center h-[128px]'>
        <h2 className='text-4xl font-bold tracking-tight text-gray-900'>
          Nice to meet you.
        </h2>
      </div>
      <div className='relative mx-auto max-w-8xl  text-center'>
        <div className='flex flex-cols-3 justify-center '>
          <div className='mr-3 lg:mr-12'>
            <Image
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              width={360}
              height={360}
              className='rounded-3xl overflow-hidden shadow-xl mx-auto '
            />
            {/* <Image
              src={images[(currentImageIndex + 1) % images.length]}
              alt={`Image ${((currentImageIndex + 1) % images.length) + 1}`}
              width={360}
              height={360}
              className='rounded-3xl overflow-hidden shadow-xl image-preview'
            /> */}
            {/* <div className='slider-navigation'>
              <button onClick={prevImage}>Previous</button>
              <button onClick={nextImage}>Next</button>
            </div> */}
            <div className='navigation-circles mt-2 lg:mt-4'>
              {images.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={currentImageIndex === index ? 'active' : ''}
                ></span>
              ))}
            </div>
            <div className='flex-root mx-auto max-w-4xl mt-6 mb-4 lg:mt-14'>
              <div className='text-center text-indigo-700 text-xl lg:text-3xl font-semibold mb-14'>
                <h1>Recent Milestones</h1>
                <div className='relative'>
                  <div
                    className='absolute inset-4 flex items-center'
                    aria-hidden='true'
                  >
                    <div className='w-full border-t border-gray-300' />
                  </div>
                </div>
              </div>
              <ul role='list' className='text-xs lg:text-lg'>
                {timeline.map((event, eventIdx) => (
                  <li key={event.id}>
                    <div className='relative pb-3 lg:pb-12'>
                      {eventIdx !== timeline.length - 1 ? (
                        <span
                          className='absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200'
                          aria-hidden='true'
                        />
                      ) : null}
                      <div className='relative flex space-x-3'>
                        <div>
                          <span
                            className={classNames(
                              event.iconBackground,
                              'h-9 w-9 rounded-full flex items-center justify-center ring-8 ring-white'
                            )}
                          >
                            <event.icon
                              className='h-5 w-5 text-white'
                              aria-hidden='true'
                            />
                          </span>
                        </div>
                        <div className='flex min-w-0 flex-1 justify-between space-x-4 pt-1.5'>
                          <div>
                            <p className='text-med text-gray-500'>
                              {event.content}{' '}
                              <a
                                href={event.href}
                                className='font-bold text-gray-600'
                              >
                                {event.target}
                              </a>
                            </p>
                          </div>
                          <div className='whitespace-nowrap text-right text- text-gray-500'>
                            <time dateTime={event.datetime}>{event.date}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='col-span-2 mr-0 lg:mr-24'>
            <div className='mx-auto max-w-2xl'>
              <h2 className='text-2xl font-bold text-indigo-700 mb-5'>
                About Me
              </h2>
              <p className='text-left text-xs leading-4 lg:text-lg lg:leading-7 text-gray-600 mb-4'>
                I am on a journey to harness the power of technology to connect
                people, systems, and ideas. My academic journey has equipped me
                with a strong foundation in Computer Science, and my
                concentration in Networking and Cloud Computing has allowed me
                to delve deep into the intricacies of creating efficient and
                scalable network infrastructures.
              </p>
              <p className='text-left text-xs leading-4 lg:text-lg lg:leading-7 text-gray-600 mb-4'>
                I am fascinated by the limitless potential of cloud technology
                and its role in shaping the future of data storage and
                accessibility.
              </p>
              <p className='text-left text-xs leading-4 lg:text-lg lg:leading-7 text-gray-600 mb-4'>
                I have had the privilege of working on projets in the classroom
                utiliizng AI by performing EDA on datasets and revealingvaluable
                insights from data, and the use of algorithms allow for
                intelligent solutions to complex problems.
              </p>
              <p className='text-left text-xs leading-4 lg:text-lg lg:leading-7 text-gray-600 mb-4'>
                I love learning and enjoy to help friends with any projects in
                the realm of computers, from building PCS to building front-end
                applications. Yet my interests and skills are not confined to
                the digital realm.
              </p>
              <p className='text-left text-xs leading-4 lg:text-lg lg:leading-7 text-gray-600 mb-4'>
                Beyond the world of coding and data, I have a deep curiosity for
                electronics and the world of DIY electronics. My adventures in
                this space have led me to explore and create unique projects
                with ESP32, cameras, sensors, etc. I also enjoy 3D printing as a
                hobby. The creative possibilities of 3D printing and DIY
                Electronics leave the rest up to imagination. I also have a
                passion for art and implement that passion anywhere I can, from
                the creativity of designing a new website to painting! I am
                always eager to learn, experiment, and bring new ideas to life.
              </p>
              <p className='text-left text-xs leading-4 lg:text-lg lg:leading-7 text-gray-600 mb-4'>
                In this ever-evolving field, I believe in the importance of
                adaptability and continuous learning. I am excited about the
                future and the role I can play in shaping it. No matter what
                task or project I am taking on, I am always driven by a sense of
                purpose and the belief that technology can truly make the world
                a better place.
              </p>
              <p className='text-left text-xs leading-4 lg:text-lg lg:leading-7 text-gray-600 mb-4'>
                Lets connect and explore the endless possibilities that
                technology offers us.
              </p>

              {/* <div className='relative'>
              <div
              className='absolute inset-4 mt-2 flex items-center'
              aria-hidden='true'
              >
              <div className='w-full border-t border-gray-300' />
              </div>
            </div> */}
              <div>
                <div className='relative'>
                  <div
                    className='absolute inset-4 mt-2 flex items-center'
                    aria-hidden='true'
                  >
                    <div className='w-full border-t border-gray-300' />
                  </div>
                </div>
                <div className='text-center text-sm lg:text-lg font-semibold pt-10'>
                  Want to know more?
                </div>
                <div className='mt-2 lg:mt-6 mb-10 text-sm lg:text-lg items-center space-x-2 lg:space-x-8'>
                  <a
                    href='Resume.pdf'
                    download
                    className='mt-2 text-base text-sm lg:text-lg font-semibold leading-7 underline text-indigo-600  hover:text-orange-400 hover:cursor-pointer'
                  >
                    My resume
                  </a>
                  <Link
                    href='/contact'
                    className='mt-2 text-base text-sm lg:text-lg font-semibold leading-7 underline text-indigo-600 hover:text-orange-400 hover:cursor-pointer'
                  >
                    Contact me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
