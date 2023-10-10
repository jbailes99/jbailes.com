export default function Projects() {
  const people = [
    {
      name: (
        <a href='https://www.naashka.com' target='_blank' rel='noopener noreferrer' className='text-blue-500'>
          www.naashka.com
        </a>
      ),
      role: 'Portfolio website',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      bio: ' I created a unique and nostalgic portfolio website that pays homage to the classic Windows 95 user interface. Inspired by the retro design elements of the 90s, the website is built using React95, a fantastic React UI library that mimics the look and feel of the iconic Windows 95 operating system',
    },
    // More people...
  ]

  return (
    <div className='flex-1 overflow-auto flex flex-col justify-center items-center '>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Projects</h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>Take a look at some of my projects.</p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none'
        >
          {people.map(person => (
            <li key={person.name} className='flex flex-col gap-6 xl:flex-row'>
              <img className='aspect-[4/5] w-52 flex-none rounded-2xl object-cover' src={person.imageUrl} alt='' />
              <div className='flex-auto'>
                <h3 className='text-lg font-semibold leading-8 tracking-tight text-gray-900'>{person.name}</h3>
                <p className='text-base leading-7 text-gray-600'>{person.role}</p>
                <p className='mt-6 text-base leading-7 text-gray-600'>{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
