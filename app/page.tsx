import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRightIcon,
  BookOpenIcon,
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from '@heroicons/react/20/solid'

// import Navbar from '../components/nav'
// import Home from '../pages/home'
// import Layout from './components/navLayout'

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
    id: 7,
    content: 'Applied to',
    target: 'Front End Developer',
    href: '#',
    date: '2023',
    datetime: '2020-09-20',
    icon: UserIcon,
    iconBackground: 'bg-gray-400',
  },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function HomePage() {
  return (
    <div className='flex-1 overflow-auto flex flex-col justify-center items-center '>
      {/* <Image src='/me.png' alt='league ' width={128} height={128} className='mb-2 rounded-full overflow-hidden' /> */}
      <h1 className='text-7xl font-bold'>Jacob Bailes</h1>
      <p className='text-med mt-4'>placeholder</p>
      <div className='flow-root'>
        <div className='text-center text-lg font-semibold mt-20 mb-2'>
          {/* <h1>Recent Milestones:</h1> */}
        </div>
        <ul role='list' className=''>
          {timeline.map((event, eventIdx) => (
            <li key={event.id}>
              <div className='relative pb-8'>
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
                        'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
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
                      <p className='text-sm text-gray-500'>
                        {event.content}{' '}
                        <a
                          href={event.href}
                          className='font-medium text-gray-900'
                        >
                          {event.target}
                        </a>
                      </p>
                    </div>
                    <div className='whitespace-nowrap text-right text-sm text-gray-500'>
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
  )
}
