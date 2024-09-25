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

const features = [
  {
    name: 'Education',
    description:
      'Throughout my journey in education, I have learned a great deal about teamwork and collaboration, especially in the software engineering field. I have a Bachelors degree in Computer Science concentrating in Networking and Cloud Computing with a minor in Mathematics from Salem State University. I have been nominated for different awards throughout my schooling and have been the recipient of the Math Achievement Award. I enjoy learning, teaching, and listening - all aspects of education.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Experience',
    description:
      'Through various team projects, I have gained experience in agile development, organizing weekly sprints, meetings, and prioritzing tasks based on user priority. This has also given me great experience with creating comprehensive documentation on system requirements, user requirements, use case diagrams, and more to communicate effectively with stakeholders.I have also gained experience with machine learning and deep learning techniques, including regression, classification, clustering, and neural networks. I have experience with full-stack applications along with SQL/NoSQL databases, along with cloud-native applications.',
    icon: PaperAirplaneIcon,
  },
  {
    name: 'Portfolio',
    description: (
      <>
        Head over to my{' '}
        <a
          href='/projects'
          className='mt-2 text-base font-semibold leading-7 text-indigo-300 underline hover:text-orange-400 hover:cursor-pointer transition-transform transform scale-100 hover:scale-105'
          color='blue'
        >
          projects
        </a>{' '}
        page to explore some of the projects I have tackled. These projects
        encompass a wide range, from school assignments involving data analysis,
        machine learning, to full-stack web applications and cloud-native
        applications. Additionally, you can also check out some of the projects
        I have undertaken independently by visiting my portfolio. I am
        continuously seeking new projects to take on and new skills to acquire,
        so do not hesitate to get in touch!
      </>
    ),
    icon: FolderOpenIcon,
  },

  {
    name: 'Skills',
    description: (
      <>
        Proficient in programming languages like Python, JavaScript, and Java.
        Skilled in data analysis and visualization with tools such as Pandas,
        NumPy, and Matplotlib. Skilled with full-stack knowledge utilizing MERN.
        Knowledge of cloud computing platforms like AWS and the many services it
        has to offer. Familiar with machine learning libraries like TensorFlow
        and Scikit-Learn.
      </>
    ),
    icon: CodeBracketSquareIcon,
  },
]

export default function HomePage() {
  return (
    <div className='flex-1 overflow-auto flex flex-col mt-0 items-center '>
      <h1 className='mt-12 sm:text-8xl text-6xl text-center font-bold text-gray-900 transition-transform transform scale-100 hover:scale-105'>
        Jacob Bailes
      </h1>
      {/* <p className='text-med mt-4'>Learn more about me!</p> */}

      <div className=' w-full py-6  sm:py-12'>
        <div className='px-6 flex flex-col lg:px-8'>
          <div className='w-1/2 mx-auto  lg:text-center'>
            <h2 className='text-center font-semibold leading-7 text-indigo-600'>
              Lets get to know each other.
            </h2>

            <div className='relative'>
              <div
                className='absolute inset-2 flex items-center'
                aria-hidden='true'
              >
                <div className='w-full border-t border-gray-700' />
              </div>
            </div>

            <p className='mt-8 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
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

          <div className='mt-16 max-w-full sm:mt-12 lg:mt-18'>
            <dl className='grid sm:w-3/4 mx-auto grid-cols-1 gap-x-24 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className='relative bg-gray-700 min-h-[320px]  p-4 rounded-xl shadow-xl flex flex-col items-center justify-between'
                >
                  {/* Icon and Title Block */}
                  <div className='w-full flex flex-col items-center'>
                    <div className='rounded-lg bg-indigo-600 h-8 w-8 flex items-center justify-center'>
                      <feature.icon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </div>
                    <dt className='text-base font-semibold mt-2 text-center leading-7 text-gray-100'>
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
        </div>
      </div>
    </div>
  )
}
