import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  AcademicCapIcon,
  PaperAirplaneIcon,
  FolderOpenIcon,
  CodeBracketSquareIcon,
} from '@heroicons/react/24/outline'
import {
  ArrowRightIcon,
  BookOpenIcon,
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from '@heroicons/react/20/solid'
import './styles.css'
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'
import 'react-social-icons/email'
import 'react-social-icons/whatsapp'
import LineSVG from './components/signature' // Adjust the import path according to your folder structure
import Projects from './projects/page' // Adjust the path according to your project structure
import classNames from 'classnames'
const timeline = [
  {
    id: 1,
    content: 'Attended',
    target: 'North Shore Community College',
    href: '#',
    date: 'Jan 2020',
    datetime: '2021-01-20',
    icon: BookOpenIcon,
    iconBackground: 'bg-indigo-500',
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
    iconBackground: 'bg-indigo-500',
  },
  {
    id: 4,
    content: 'Transferred',
    target: '',
    href: '#',
    date: '',
    datetime: '2020-09-28',
    icon: ArrowRightIcon,
    iconBackground: 'bg-gray-800',
  },
  {
    id: 5,
    content: 'Attended',
    target: 'Salem State University',
    href: '#',
    date: 'Jan 2023',
    datetime: '2023-01-30',
    icon: BookOpenIcon,
    iconBackground: 'bg-indigo-500',
  },
  {
    id: 6,
    content: 'Completed Bachelors Degree in',
    target: 'Computer Science',
    href: '#',
    date: 'Dec 2024',
    datetime: '2021-01-20',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 6,
    content: 'Completed Minor in',
    target: 'Mathematics',
    href: '#',
    date: 'Dec 2024',
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

const features = [
  {
    name: 'Education',
    description:
      'Throughout my journey in education, I have learned a great deal about teamwork and collaboration, especially in the software engineering field. I have a Bachelors degree in Computer Science concentrating in Networking and Cloud Computing with a minor in Mathematics from Salem State University.  ',
    icon: AcademicCapIcon,
  },
  {
    name: 'Experience',
    description:
      'Across various projects, I have gained experience in agile development, organizing weekly sprints, meetings, and prioritzing tasks based on user priority. This has also given me professional experience with creating comprehensive documentation on system requirements, user requirements, use case diagrams, and more to communicate effectively with stakeholders. ',
    icon: PaperAirplaneIcon,
  },
  // {
  //   name: 'Portfolio',
  //   description: (
  //     <>
  //       Head over to my{' '}
  //       <a
  //         href='/projects'
  //         className='mt-2 text-base font-semibold leading-7 text-indigo-300 underline hover:text-orange-400 hover:cursor-pointer transition-transform transform scale-100 hover:scale-105'
  //         color='blue'
  //       >
  //         projects
  //       </a>{' '}
  //       page to explore some of the projects I have tackled. These projects
  //       encompass a wide range, from school assignments involving data analysis,
  //       machine learning, to full-stack web applications and cloud-native
  //       applications. Additionally, you can also check out some of the projects
  //       I have undertaken independently by visiting my portfolio. I am
  //       continuously seeking new projects to take on and new skills to acquire,
  //       so do not hesitate to get in touch!
  //     </>
  //   ),
  //   icon: FolderOpenIcon,
  // },

  {
    name: 'Skills',
    description: (
      <>
        Proficient in programming languages like JavaScript, Python and Java. .
        Familiar with MERN Stack applications and cloud-native apps utilizing
        AWS. Skilled in data analysis and visualization with tools such as
        Pandas, NumPy, and Matplotlib. Familiar with machine learning libraries
        like TensorFlow and Scikit-Learn.
      </>
    ),
    icon: CodeBracketSquareIcon,
  },
]

export default function HomePage() {
  return (
    <div className='flex-1 overflow-auto flex flex-col mt-0 items-center '>
      <div className='mx-auto mt-8 text-center font-bold text-gray-900 '>
        {' '}
        <LineSVG />
      </div>
      <div className='relative w-full mt-4'>
        {' '}
        <div aria-hidden='true' className='absolute inset-0 flex items-center'>
          <div className='sm:w-1/4 w-3/4 mx-auto border-t border-indigo-600' />{' '}
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-white px-2 text-sm text-gray-500'>
            Full Stack Developer
          </span>
        </div>
      </div>
      <div className='flex justify-center sm:space-x-14 space-x-10 mt-6'>
        {/* JavaScript Icon */}
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
          alt='JavaScript'
          className='h-16 w-16'
        />

        {/* Node Icon */}
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
          alt='Node.js'
          className='h-16 w-16'
        />

        {/* React Icon */}
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
          alt='React'
          className='h-16 w-16'
        />

        {/* AWS Icon */}
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
          alt='AWS'
          className='h-16 w-16'
        />
      </div>

      {/* <p className='text-med mt-4'>Learn more about me!</p> */}

      <div className=' w-full py-6  sm:py-12'>
        <div className='px-6 flex flex-col lg:px-8'>
          <div className='sm:w-1/2  mx-auto  lg:text-center'>
            {/* <h2 className='text-center font-semibold text-4xl text-indigo-600'>
              About
            </h2> */}
            <p className='text-center sm:mt-0  mt-2 text-gray-700 text-md sm:text-base md:text-lg'>
              Hello! I&apos;m <strong>Jacob</strong>, a passionate{' '}
              <strong>Software Engineer</strong> with <strong>5</strong> years
              of experience in{' '}
              <strong>web development and software design</strong>.
            </p>
            <p className='text-center sm:mt-0 mt-4 text-gray-700 text-md sm:text-base md:text-lg'>
              I thrive on transforming ideas into reality and bringing
              innovative solutions to challenges.
            </p>

            {/* <p className='mt-8 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
              Straight to it.
            </p> */}
            {/* <p className='mt-6 text-lg leading-8 text-gray-600'>
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p> */}
          </div>

          <div className='mx-auto mt-6 space-x-4  '>
            <SocialIcon
              url='https://www.linkedin.com/in/jbailes01/'
              target='_blank'
              className='h-12 w-12'
            />
            <a
              className='font-semibold text-indigo-600'
              href='https://www.linkedin.com/in/jbailes01/'
              target='_blank'
            ></a>
            <SocialIcon
              url='https://www.github.com/jbailes99/'
              target='_blank'
              className='h-12 w-12'
            />
            <a
              className='font-semibold text-indigo-600'
              href='https://www.github.com/jbailes99/'
              target='_blank'
            ></a>
          </div>

          {/* <div className='relative'>
            <div
            className='absolute inset-6 flex items-center'
            aria-hidden='true'
            >
              <div className='w-full border-t border-gray-600' />
            </div>
          </div> */}

          <div className='  py-12 rounded-md  max-w-full sm:mt-16 lg:mt-18'>
            <dl className='grid sm:w-full mx-auo grid-cols-1 gap-x-24 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16'>
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className='relative bg-gray-800 min-h-[320px]  p-4 rounded-tr-2xl rounded-bl-2xl shadow-xl flex flex-col items-center justify-between'
                >
                  {/* Icon and Title Block */}
                  <div className='w-full flex flex-col items-center'>
                    <div className='rounded-lg bg-indigo-600 h-12 w-12 flex items-center justify-center'>
                      <feature.icon
                        className='h-12 w-12 text-white'
                        aria-hidden='true'
                      />
                    </div>
                    <dt className=' font-semibold mt-2 text-center text-3xl text-gray-100'>
                      {feature.name}
                    </dt>
                  </div>

                  {/* Description Block */}
                  <dd className='mt-4 text-center my-auto mx-2 leading-7 text-gray-100'>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className='relative w-full mt-4'>
            {' '}
            <div
              aria-hidden='true'
              className='absolute inset-0 flex items-center'
            >
              <div className='w-3/4 mx-auto border-t border-gray-800' />{' '}
            </div>
            <div className='relative flex justify-center'>
              <span className='bg-white px-6 sm:text-4xl text-2xl text-gray-800'>
                Projects
              </span>
            </div>
          </div>
          <Projects />
        </div>
        <div className='w-3/4 mx-auto mt-4'>
          <div className='relative w-full mt-4'>
            {' '}
            <div
              aria-hidden='true'
              className='absolute inset-0 flex items-center'
            >
              <div className='w-full mx-auto border-t border-gray-800' />{' '}
            </div>
            <div className='relative flex justify-center'>
              <span className='bg-white px-6 sm:text-4xl text-center text-2xl text-gray-800'>
                Recent Milestones
              </span>
            </div>
          </div>
          <ul role='list' className='text-md mt-12 lg:text-lg'>
            {timeline.map((event, eventIdx) => (
              <li key={event.id}>
                <div className='relative pb-5 lg:pb-12'>
                  {eventIdx !== timeline.length - 1 ? (
                    <span
                      className='absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200'
                      aria-hidden='true'
                    />
                  ) : null}
                  <div className='relative flex space-x-12 leading-6'>
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
                    <div className='flex min-w-3 flex-1 justify-between space-x-4 pt-1.5'>
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
    </div>
  )
}
