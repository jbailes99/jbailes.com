import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Education',
    description:
      'I have an Associates degree and Bachelors degree in Computer Science concentrating in Networking and Cloud Computing. I also have a minor in Mathematics. I plan to continue onwards to a Masters degree in Computer Science concentrating in Data Science and Machine Learning. ',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Experience',
    description:
      'Throughout my journey in education, I have learned a great deal about teamwork and working in a team setting. I have hands-on experience conducting exploratory data analysis using Python and R with in-depth case studies involving real-world datasets. This experience has equipped me with the skills to proficiently analyze data and leverage AI algorithms and methodologies to generate precise predictions and insights.',
    icon: LockClosedIcon,
  },
  {
    name: 'Portfolio',
    description: (
      <>
        Head over to my{' '}
        <a
          href='/projects'
          className='mt-2 text-base font-semibold leading-7 text-indigo-600 underline hover:text-orange-400 hover:cursor-pointer transition-transform transform scale-100 hover:scale-105'
          color='blue'
        >
          projects
        </a>{' '}
        page to explore some of the projects I have tackled. These projects
        encompass a wide range, from school assignments involving data analysis,
        machine learning, to web development utilizing cloud services.
        Additionally, you can also check out some of the projects I've
        undertaken independently by visiting my portfolio . I'm continuously
        seeking new projects to take on and new skills to acquire, so don't
        hesitate to get in touch!
      </>
    ),
    icon: ArrowPathIcon,
  },

  {
    name: 'Skills',
    description: (
      <>
        Proficient in programming languages like Python, JavaScript, and Java.
        Skilled in data analysis and visualization with tools such as Pandas,
        NumPy, and Matplotlib. Skilled with front-end web development using
        HTML, CSS, and popular frameworks like React. Knowledge of cloud
        computing platforms, including AWS and Azure. Familiar with machine
        learning libraries like TensorFlow and Scikit-Learn.
      </>
    ),
    icon: FingerPrintIcon,
  },
]

export default function HomePage() {
  return (
    <div className='flex-1 overflow-auto flex flex-col mt-0 items-center '>
      <h1 className='mt-12 text-8xl font-bold text-gray-900 transition-transform transform scale-100 hover:scale-105'>
        Jacob Bailes
      </h1>
      {/* <p className='text-med mt-4'>Learn more about me!</p> */}

      <div className='bg-white py-24 sm:py-12'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <h2 className='text-base font-semibold leading-7 text-indigo-600'>
              Let's get to know each other.
            </h2>

            <div className='relative'>
              <div
                className='absolute inset-2 flex items-center'
                aria-hidden='true'
              >
                <div className='w-full border-t border-gray-700' />
              </div>
            </div>

            <p className='mt-2 text-3xl font-bold mt-10 tracking-tight text-gray-900 sm:text-4xl'>
              The Basics
            </p>
            {/* <p className='mt-6 text-lg leading-8 text-gray-600'>
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p> */}
          </div>

          {/* <div className='relative'>
            <div
              className='absolute inset-6 flex items-center'
              aria-hidden='true'
            >
              <div className='w-full border-t border-gray-600' />
            </div>
          </div> */}

          <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-18 lg:max-w-5xl'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className='relative pl-16 flex flex-col items-center'
                >
                  <div className='flex items-center mb-2'>
                    <div className='rounded-lg bg-indigo-600 h-8 w-8 flex items-center justify-center'>
                      <feature.icon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </div>
                    <dt className='text-base font-semibold ml-2 leading-7 text-gray-900'>
                      {feature.name}
                    </dt>
                  </div>
                  <dd className='mt-2 text-center leading-7 text-gray-600'>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
