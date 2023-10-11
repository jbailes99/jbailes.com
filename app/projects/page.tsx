export default function Projects() {
  const people = [
    {
      name: (
        <a
          href='https://www.naashka.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500'
        >
          www.naashka.com
        </a>
      ),
      goal: 'Portfolio website',
      // imageUrl:
      // '',
      bio: ' I created a unique and nostalgic portfolio website that pays homage to the classic Windows 95 user interface. Inspired by the retro design elements of the 90s, the website is built using React95, a fantastic React UI library that mimics the look and feel of the iconic Windows 95 operating system.',
    },
    {
      name: (
        <a
          href='https://www.naashka.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500'
        >
          www.naashka.com
        </a>
      ),
      goal: 'Portfolio website',
      // imageUrl:
      // '',
      bio: ' I created a unique and nostalgic portfolio website that pays homage to the classic Windows 95 user interface. Inspired by the retro design elements of the 90s, the website is built using React95, a fantastic React UI library that mimics the look and feel of the iconic Windows 95 operating system.',
    },
    // More people...
  ]

  return (
    <div className='flex-1 overflow-auto flex-col justify-center items-center h-full p-8'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='text-4xl font-bold tracking-tight text-gray-900'>
            Projects
          </h2>
          <p className=' text-lg leading-8 text-gray-600'>
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
                <p className='mt-6 text-base text-center leading-7 text-gray-800'>
                  {project.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
