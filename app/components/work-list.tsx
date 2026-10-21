import { projects } from '../lib/content'

export default function WorkList() {
  return (
    <ul className='border-t border-line'>
      {projects.map((project, index) => (
        <li
          key={project.slug}
          className={`tone-${project.tone} border-b border-line`}
        >
          <div className='group grid gap-3 py-8 sm:grid-cols-[4.5rem_1fr] sm:gap-6 sm:py-10'>
            <div className='flex items-center gap-3 sm:items-start sm:pt-2'>
              <span className='work-bar h-2.5 w-2.5 shrink-0 rounded-full sm:mt-1.5' />
              <span className='work-index font-mono text-sm'>
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <div className='min-w-0'>
              <div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1'>
                <a
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='work-title text-2xl font-medium tracking-tight text-paper sm:text-3xl'
                >
                  {project.name}
                </a>
                <span className='work-kind font-mono text-xs'>
                  {project.kind}
                </span>
              </div>
              <p className='mt-3 max-w-2xl text-base leading-relaxed text-mist'>
                {project.summary}
              </p>
              <ul className='mt-4 flex flex-wrap gap-2'>
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className='work-chip rounded-full px-2.5 py-1 font-mono text-[11px]'
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
