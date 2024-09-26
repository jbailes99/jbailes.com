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
          fitxpress.app
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
        'TailWind CSS',
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
          bestdraven.world
        </a>
      ),
      goal: 'Web Application',
      bio: 'A website for a professional League of Legends player to track his games and statistics on a single character. Includes a backend that utilizes RiotAPI.',
      tags: ['React', 'Express', 'AWS', 'TypeScript', 'TailWind CSS'],
    },
    // More projects...
  ]

  return (
    <div className='flex-1 overflow-auto flex-col justify-center items-center h-full p-8'>
      <div className=' max-w-full px-6 lg:px-8'>
        <ul
          role='list'
          className='mx-auto mt-6 sm:w-10/12 grid  grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-4 lg:max-w-4xl lg:gap-x-12 xl:max-w-none'
        >
          {people.map((project, index) => (
            <li
              key={index}
              className='bg-gray-800 rounded-tr-2xl w-full rounded-bl-2xl flex flex-col gap-6 xl:flex-row shadow-xl p-6'
            >
              <div className='flex-auto'>
                <h3 className='text-xl font-semibold text-center leading-8 tracking-tight text-gray-900'>
                  {project.name}
                </h3>
                <p className='text-xl font-bold text-center leading-7 text-gray-200'>
                  {project.goal}
                </p>

                <p className='mt-6 text-sm text-start w-3/4 mx-auto text-gray-200'>
                  {project.bio}
                </p>
                {project.tags &&
                  Array.isArray(project.tags) &&
                  project.tags.length > 0 && (
                    <div className='flex flex-wrap justify-center mt-4 max-w-full'>
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className='mx-1 my-1 inline-block rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white shadow-md'
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
