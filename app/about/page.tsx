import type { Metadata } from 'next'
import Link from 'next/link'
import { education, profile } from '../lib/content'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Jacob Bailes — IT specialist for school and office systems, and the apps built around them.',
}

export default function AboutPage() {
  return (
    <article className='mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20'>
      <p className='font-mono text-sm text-lime'>~/jacob/about</p>
      <div className='mt-4 grid gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center lg:gap-32'>
        <div>
          <h1 className='max-w-3xl text-4xl font-medium tracking-tight text-paper sm:text-6xl'>
            Nice to meet you.
          </h1>
          <div className='mt-12 max-w-2xl space-y-5 text-lg leading-relaxed text-mist'>
            <p>
              I&apos;m an IT specialist with a B.S. in Computer Science from
              Salem State University and a minor in mathematics. I work in
              educational IT, supporting 1500 staff/students across four
              schools, where no two days are quite the same. I enjoy the
              challenges that come with working in such a fast-paced
              environment. Problem solving has always been what draws me to
              technology. I enjoy diving into an issue, understanding what's
              happening beneath the surface, and working through it until I have
              a solution. That interest is what led me to study Computer
              Sicence, and it's something I carry into everything I do in my
              everyday life. There's something truly satisfying about
              methodically breaking down issues and findign the root cause, and
              finally fixing it. It's that same feeling when you build an app,
              fix a bug, or a hardware issue. I'm always chasing that same
              feeling of accomplishment and learning something.
            </p>
            <p>
              Aside from work, I enjoy restoring and repairing old consoles,
              building computers, or tinkering with Arduino and ESP32 projects,
              and experimenting with cameras, sensors, home automation, and 3D
              printing.
            </p>
            <p>Most of what I do comes down to "figure it out, and fix it".</p>
            <p>
              If you have a project in mind or need a hand with something,{' '}
              <Link
                href='/contact'
                className='text-paper underline decoration-lime/50 underline-offset-4 hover:text-lime'
              >
                say hello
              </Link>
              .
            </p>
            <p className='pt-2 font-mono text-sm'>
              <a
                href={profile.resume}
                target='_blank'
                rel='noopener noreferrer'
                className='text-lime hover:underline'
              >
                Resume
              </a>
            </p>
          </div>
        </div>
        <div>
          <p className='font-mono text-xs uppercase tracking-[0.2em] text-lime'>
            Education
          </p>
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
      </div>
    </article>
  )
}
