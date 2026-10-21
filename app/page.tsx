import Hero from './components/hero'
import WorkList from './components/work-list'
import { education, skillGroups } from './lib/content'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Hero />

      <section
        id='work'
        className='mx-auto max-w-6xl scroll-mt-20 px-5 pb-8 sm:px-8'
      >
        <div className='border-t border-line pt-16'>
          <p className='font-mono text-xs uppercase tracking-[0.2em] text-lime'>
            Work
          </p>
          <h2 className='mt-3 max-w-xl text-3xl font-medium tracking-tight text-paper sm:text-4xl'>
            Apps I have built
          </h2>
          <p className='mt-4 max-w-2xl text-mist'>
            Listed below, and one command away in the terminal:{' '}
            <span className='font-mono text-paper'>projects</span>.
          </p>
        </div>
        <div className='mt-8'>
          <WorkList />
        </div>
      </section>

      <section className='mx-auto grid max-w-6xl gap-16 px-5 py-16 sm:px-8 lg:grid-cols-2'>
        <div>
          <p className='font-mono text-xs uppercase tracking-[0.2em] text-lime'>
            Experience
          </p>
          <h2 className='mt-3 text-3xl font-medium tracking-tight text-paper'>
            How the work goes
          </h2>
          <div className='mt-6 space-y-4 text-base leading-relaxed text-mist'>
            <p>
              For the past few years, I’ve worked in IT support, helping people
              keep their devices, accounts, phones, and networks running.
              There’s more to the job than troubleshooting, too. I help
              coordinate projects, work with staff on technology needs, and
              document things so the next person isn’t starting from scratch.
            </p>
            <p>
              Outside of work, I enjoy tinkering with electronics, from ESP32
              boards and sensors to cameras and 3D printing.{' '}
              <Link
                href='/about'
                className='text-paper underline decoration-lime/50 underline-offset-4 hover:text-lime'
              >
                More of that is on the about page.
              </Link>
            </p>
          </div>
        </div>
        <div>
          <p className='font-mono text-xs uppercase tracking-[0.2em] text-lime'>
            Education
          </p>
          <h2 className='mt-3 text-3xl font-medium tracking-tight text-paper'>
            The path here
          </h2>
          <ol className='mt-6 border-t border-line'>
            {education.map((item) => (
              <li
                key={`${item.date}-${item.title}`}
                className='grid grid-cols-[5.5rem_1fr] gap-4 border-b border-line py-4'
              >
                <span className='font-mono text-xs text-mute'>{item.date}</span>
                <span>
                  <span className='block text-paper'>{item.title}</span>
                  <span className='mt-1 block text-sm text-mist'>
                    {item.place}
                    {item.note ? ` · ${item.note}` : ''}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className='mx-auto max-w-6xl px-5 pb-24 sm:px-8'>
        <div className='border-t border-line pt-16'>
          <p className='font-mono text-xs uppercase tracking-[0.2em] text-lime'>
            Skills
          </p>
          <h2 className='mt-3 text-3xl font-medium tracking-tight text-paper'>
            What I use
          </h2>
          <div className='mt-10 space-y-10'>
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className='font-mono text-xs uppercase tracking-[0.16em] text-mute'>
                  {group.label}
                </h3>
                <ul className='mt-4 flex flex-wrap gap-2'>
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className='border border-line px-3 py-1.5 text-sm text-paper'
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
