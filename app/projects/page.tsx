export default function Projects() {
  const people = [
    {
      name: (
        <a
          href='https://www.naashka.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:text-orange-400 '
        >
          naashka.com
        </a>
      ),
      goal: 'Portfolio Website',
      status: 'Completed',
      // imageUrl:
      // '',
      bio: ' I created a unique and nostalgic portfolio website that pays homage to the classic Windows 95 user interface. Inspired by the retro design elements of the 90s, the website is built using React95, a fantastic React UI library that mimics the look and feel of the iconic Windows 95 operating system.',
    },
    {
      name: (
        <a
          href='https://fitxpress.app'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:text-orange-400  '
        >
          fitxpress.app
        </a>
      ),
      goal: 'Full-Stack Web Application',
      status: 'In Development',
      // imageUrl:
      // '',
      bio: 'I created a web application that allows users to track their body metrics and visualize their progress. The application is built using React and utilizes AWS DynamoDB database to store user data. The application is hosted on AWS and utilizes AWS Lambda functions to handle API requests. The application also utilizes AWS Cognito to handle user authentication and authorization. The application is currently in development and will be available soon.',
    },
    {
      name: (
        <a
          href='https://main.d356nzcx62zjtr.amplifyapp.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:text-orange-400  '
        >
          MBTAXpress
        </a>
      ),
      goal: 'Full-Stack Web Application',
      status: 'On-going maintenance and updates',
      // imageUrl:
      // '',
      bio: 'I created a web application that allows users to experience live-tracking of all MBTA public vehicles. The application utilizes the robust MBTA API allowing users access to information about service alerts and stations and stops. Users can see detailed information about stations and post on specific stations with feedback. The application is currently in development and will be available soon.',
    },
    {
      name: (
        <a
          href='https://github.com/jbailes99?tab=repositories'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:text-orange-400  '
        >
          GitHub
        </a>
      ),
      goal: 'Small Projects',
      // imageUrl:
      // '',
      bio: 'Some of my first creations including small games, fun projects, and more!',
    },
    // More people...
  ]

  return (
    <div className='flex-1 overflow-auto flex-col justify-center items-center h-full p-8'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='text-4xl text-center font-bold tracking-tight text-gray-900'>
            Projects
          </h2>
          <p className=' text-lg text-center leading-8 text-gray-600'>
            Take a look at some of my projects.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none'
        >
          {people.map((project, index) => (
            <li
              key={index}
              className='bg-gray-300 rounded-3xl flex flex-col gap-6 xl:flex-row shadow-xl'
            >
              {/* <img
                className='aspect-[4/5] w-52 flex-none rounded-2xl object-cover'
                src={person.imageUrl}
                alt=''
              /> */}
              <div className='flex-auto p-4'>
                <h3 className='text-xl font-semibold text-center leading-8 tracking-tight text-gray-900'>
                  {project.name}
                </h3>
                <p className='text-base text-center leading-7 text-gray-800'>
                  {project.goal}
                </p>
                <p
                  className={`text-md text-center font-bold leading-7 ${
                    project.status === 'Completed'
                      ? 'text-green-600'
                      : project.status === 'In Progress'
                      ? 'text-yellow-500'
                      : 'text-gray-800'
                  }`}
                >
                  {project.status}
                </p>
                <p className='mt-6 text-base text-center leading-7 text-gray-800'>
                  {project.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className='relative'>
          <div
            className='absolute inset-4 mt-10 flex items-center'
            aria-hidden='true'
          >
            <div className='w-full border-t border-gray-300' />
          </div>
        </div>
        <div className='mt-32 text-base text-center '>
          <p className='font-semibold text-2xl'>
            More projects will be here soon.
          </p>
        </div>
      </div>
    </div>
  )
}
