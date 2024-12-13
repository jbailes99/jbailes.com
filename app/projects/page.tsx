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
      goal: 'Frontend Portfolio ',
      bio: ' I created a unique and nostalgic portfolio website that pays homage to the classic Windows 95 user interface. Inspired by the retro design elements of the 90s.',
      tags: ['React95 lib', 'React', 'JavaScript'],
    },
    {
      name: (
        <a
          href='https://fitxpress.app'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:text-orange-400'
        >
          FitXpress
        </a>
      ),
      goal: 'Full-Stack Web Application',
      bio: 'A full-stack cloud native web-app that allows users to track their body metrics, log and track exercises, and create weekly plans for exercising',
      tags: [
        'React',
        'AWS',
        'DynamoDB',
        'AWS Lambda',
        'AWS Cognito',
        'TypeScript',
        'JavaScript',
        'Tailwind CSS',
      ],
    },
    {
      name: (
        <a
          href='https://main.d356nzcx62zjtr.amplifyapp.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:text-orange-400'
        >
          MBTAXpress
        </a>
      ),
      goal: 'Full-Stack Web Application',
      bio: 'A web application that gives users a better experience for commuting. This web-app utilizes the MBTA API and provides live-tracking for all service vehicles, status updates, and the ability to check our stations, see reviews, and leave a review.',
      tags: [
        'React',
        'MongoDB',
        'Node',
        'Express',
        'AWS',
        'JavaScript',
        'Bootstrap',
      ],
    },
    {
      name: (
        <a
          href='https://bestdraven.world'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:text-orange-400'
        >
          LoL Showcase
        </a>
      ),
      goal: 'Web Application',
      bio: 'A website for a professional League of Legends player to track his games and statistics on a single character. Includes a backend that utilizes RiotAPI.',
      tags: ['React', 'Express', 'AWS', 'TypeScript', 'Tailwind CSS'],
    },
    {
      name: (
        <a
          href='https://me.jbailes.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:text-orange-400'
        >
          me.jbailes.com
        </a>
      ),
      goal: 'Frontend Portfolio',
      bio: 'A portfolio site for IT Director.',
      tags: ['React', 'JavaScript', 'Tailwind CSS'],
    },
  ]

  return (
    <div className='flex-1 overflow-auto flex-col justify-center items-center h-full p-8'>
      <div className='max-w-full'>
        <ul
          role='list'
          className='sm:grid space-y-4 sm:space-y-0 sm:mt-0 w-full mx-auto grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'
        >
          {people.map((project, index) => (
            <li
              key={index}
              className={`bg-white hover:wiggle shadow-md   border-gray-400 rounded-xl flex flex-col gap- p-6 h-full ${
                people.length % 2 !== 0 && index === people.length - 1
                  ? 'sm:col-span-2 sm:mx-auto sm:w-1/2' // Ensures the last project spans full width
                  : ''
              }`}
            >
              <div className='flex flex-col h-full'>
                <h3 className='text-xl font-semibold text-center leading-8 tracking-tight text-gray-700'>
                  {project.name}
                </h3>
                <p className='text-xl font-bold text-center leading-7 text-gray-700'>
                  {project.goal}
                </p>

                <div className='flex-grow overflow-auto'>
                  <p className='mt-6 w-3/4 mx-auto text-start sm:text-md 3xl:text-lg 4xl:text-xl text-gray-700'>
                    {project.bio}
                  </p>
                </div>
                {project.tags &&
                  Array.isArray(project.tags) &&
                  project.tags.length > 0 && (
                    <div className='flex flex-wrap justify-center mt-4'>
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className='mx-1 my-1 inline-block rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-sm '
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
