'use client'

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react'
import { bioLines, education, profile, projects, skillGroups } from '../lib/content'
import { DebugGame, SnakeGame, type GameLine } from './terminal-games'

export type TerminalHandle = {
  run: (command: string) => void
}

type Tone = 'plain' | 'dim' | 'accent' | 'warn'

type Block =
  | { id: number; type: 'cmd'; text: string }
  | { id: number; type: 'text'; text: string; tone: Tone }
  | { id: number; type: 'link'; label: string; href: string }
  | { id: number; type: 'neofetch' }
  | { id: number; type: 'gap' }

type Out =
  | { kind: 'text'; text: string; tone?: Tone }
  | { kind: 'link'; label: string; href: string }
  | { kind: 'neofetch' }
  | { kind: 'gap' }

type Mode = 'shell' | 'snake' | 'debug'

const COMMANDS = [
  'help',
  'whoami',
  'neofetch',
  'skills',
  'projects',
  'open',
  'ls',
  'cat',
  'education',
  'contact',
  'resume',
  'play',
  'clear',
  'echo',
  'date',
  'pwd',
]

const BOOT: Out[] = [
  { kind: 'text', text: 'jbailes kernel 5.0.0', tone: 'dim' },
  { kind: 'text', text: 'mounting /home/jacob ............ ok', tone: 'dim' },
  { kind: 'text', text: 'loading accounts and devices .... ok', tone: 'dim' },
  { kind: 'gap' },
  { kind: 'neofetch' },
  { kind: 'gap' },
  { kind: 'text', text: 'shell is live. try help, projects, or play.', tone: 'dim' },
]

function columnate(rows: [string, string][]): string[] {
  const width = rows.reduce((max, [label]) => Math.max(max, label.length), 0)
  return rows.map(([label, value]) => `${label.padEnd(width)}    ${value}`)
}

function respond(command: string, arg: string): Out[] {
  switch (command) {
    case 'help':
    case 'man':
    case '?':
      return [
        ...columnate([
          ['help', 'show this'],
          ['whoami', 'short bio'],
          ['neofetch', 'machine readout'],
          ['skills', 'tools I use'],
          ['projects', 'apps I have built'],
          ['open <name>', 'read one project'],
          ['ls', 'list project files'],
          ['education', 'school, newest first'],
          ['contact', 'email, phone, links'],
          ['resume', 'open the pdf'],
          ['play', 'debug tests, or snake'],
          ['clear', 'wipe the scrollback'],
        ]).map((text) => ({ kind: 'text' as const, text, tone: 'plain' as const })),
        { kind: 'gap' },
        { kind: 'text', text: 'tab completes. up/down walks history. ctrl+l clears.', tone: 'dim' },
      ]
    case 'whoami':
    case 'about':
      return [
        { kind: 'text', text: `Jacob Bailes — ${profile.role.toLowerCase()}.`, tone: 'accent' },
        { kind: 'gap' },
        { kind: 'text', text: bioLines[0] },
        { kind: 'gap' },
        { kind: 'text', text: bioLines[1] },
        { kind: 'gap' },
        { kind: 'text', text: bioLines[2], tone: 'dim' },
        { kind: 'gap' },
        { kind: 'text', text: bioLines[3], tone: 'dim' },
      ]
    case 'neofetch':
      return [{ kind: 'neofetch' }]
    case 'skills':
      return skillGroups.flatMap((group) => [
        {
          kind: 'text' as const,
          text: group.label.toLowerCase(),
          tone: 'accent' as const,
        },
        {
          kind: 'text' as const,
          text: group.items.join('   '),
          tone: 'plain' as const,
        },
        { kind: 'gap' as const },
      ])
    case 'projects':
      return [
        ...columnate(
          projects.map((project) => [project.slug, `${project.name} — ${project.kind}`])
        ).map((text) => ({ kind: 'text' as const, text })),
        { kind: 'gap' },
        { kind: 'text', text: 'open <slug> to read one. try open fitxpress.', tone: 'dim' },
      ]
    case 'ls':
      return [{ kind: 'text', text: projects.map((project) => project.slug).join('   ') }]
    case 'open':
    case 'cat': {
      if (!arg) {
        return [{ kind: 'text', text: 'usage: open <slug>', tone: 'warn' }]
      }
      const index = Number(arg)
      const project =
        projects.find(
          (item) => item.slug === arg || item.name.toLowerCase() === arg
        ) ||
        (Number.isInteger(index) && index >= 1 && index <= projects.length
          ? projects[index - 1]
          : undefined)
      if (!project) {
        return [
          { kind: 'text', text: `no such project: ${arg}`, tone: 'warn' },
          { kind: 'text', text: 'projects lists the slugs.', tone: 'dim' },
        ]
      }
      return [
        { kind: 'text', text: project.name, tone: 'accent' },
        { kind: 'text', text: project.kind, tone: 'dim' },
        { kind: 'gap' },
        { kind: 'text', text: project.summary },
        { kind: 'gap' },
        { kind: 'text', text: project.tags.join('   '), tone: 'dim' },
        { kind: 'link', label: project.url, href: project.url },
      ]
    }
    case 'education':
    case 'edu':
      return education.map((item) => ({
        kind: 'text' as const,
        text: `${item.date.padEnd(10)}  ${item.title} — ${item.place}${item.note ? ` (${item.note})` : ''}`,
      }))
    case 'contact':
      return [
        { kind: 'link', label: profile.email, href: `mailto:${profile.email}` },
        { kind: 'link', label: profile.phone, href: profile.phoneHref },
        { kind: 'link', label: profile.githubLabel, href: profile.github },
        { kind: 'link', label: profile.linkedinLabel, href: profile.linkedin },
      ]
    case 'resume':
    case 'cv':
      return [
        { kind: 'text', text: 'opening resume.pdf', tone: 'dim' },
        { kind: 'link', label: 'Resume.pdf', href: profile.resume },
      ]
    case 'play':
      return [
        { kind: 'text', text: 'two ways to spend a minute:', tone: 'plain' },
        { kind: 'gap' },
        { kind: 'text', text: 'play debug     patch four failing tests' },
        { kind: 'text', text: 'play snake     eat the semicolons' },
      ]
    case 'echo':
      return [{ kind: 'text', text: arg }]
    case 'date':
      return [{ kind: 'text', text: new Date().toString(), tone: 'dim' }]
    case 'pwd':
      return [{ kind: 'text', text: '/home/jacob' }]
    case 'sudo':
      if (arg.includes('sandwich')) {
        return [{ kind: 'text', text: 'make it yourself. I will do the software.', tone: 'warn' }]
      }
      if (arg.includes('hire')) {
        return [
          { kind: 'text', text: 'I cannot sudo that from here.', tone: 'warn' },
          { kind: 'link', label: profile.email, href: `mailto:${profile.email}` },
        ]
      }
      return [
        {
          kind: 'text',
          text: 'jacob is not in the sudoers file. this incident will be reported.',
          tone: 'warn',
        },
      ]
    case 'rm':
      return [{ kind: 'text', text: 'this portfolio is immutable. nice try.', tone: 'warn' }]
    case 'vim':
    case 'nvim':
      return [{ kind: 'text', text: ':wq — it already shipped.', tone: 'dim' }]
    case 'emacs':
      return [{ kind: 'text', text: 'respected. the site still shipped in this shell.', tone: 'dim' }]
    case 'exit':
    case 'quit':
      return [{ kind: 'text', text: 'there is no logout. scroll, or type play.', tone: 'dim' }]
    case 'hello':
    case 'hi':
    case 'hey':
      return [{ kind: 'text', text: 'hey. type help if you want the tour.', tone: 'accent' }]
    default:
      return [
        { kind: 'text', text: `${command}: command not found`, tone: 'warn' },
        { kind: 'text', text: 'type help', tone: 'dim' },
      ]
  }
}

function NeofetchCard() {
  const rows: [string, string][] = [
    ['user', 'jacob'],
    ['host', 'jbailes.com'],
    ['role', profile.role.toLowerCase()],
    ['degree', 'b.s. computer science'],
    ['minor', 'mathematics'],
    ['uptime', '5 years'],
    ['systems', 'ad · jamf · aws'],
    ['status', 'available'],
  ]
  return (
    <div className='grid items-center gap-5 py-1 sm:grid-cols-[9.5rem_1fr]'>
      <div className='flex h-28 w-full flex-col justify-between border border-line bg-ink p-3 sm:h-32 sm:w-36'>
        <span className='font-mono text-[10px] uppercase tracking-[0.16em] text-mute'>~/jacob</span>
        <span className='font-mono text-4xl tracking-tight text-paper'>
          jb<span className='cursor-blink text-lime'>_</span>
        </span>
        <span className='font-mono text-[10px] text-lime'>● running</span>
      </div>
      <div className='min-w-0 font-mono text-[13px] leading-6 sm:text-sm'>
        <p className='text-lime'>contact@jbailes.com</p>
        <p className='text-line'>---------------------------</p>
        {rows.map(([label, value]) => (
          <p key={label} className='whitespace-pre text-mist'>
            <span className='text-paper'>{label.padEnd(8)}</span>
            {value}
          </p>
        ))}
      </div>
    </div>
  )
}

const Terminal = forwardRef<TerminalHandle>(function Terminal(_props, ref) {
  const [lines, setLines] = useState<Block[]>([])
  const [value, setValue] = useState('')
  const [mode, setMode] = useState<Mode>('shell')
  const [focused, setFocused] = useState(false)
  const [ready, setReady] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const idRef = useRef(1)
  const history = useRef<string[]>([])
  const histPos = useRef(-1)
  const draft = useRef('')
  const bootCancelled = useRef(false)
  const modeRef = useRef<Mode>('shell')
  modeRef.current = mode

  const nextId = () => {
    idRef.current += 1
    return idRef.current
  }

  const toBlocks = useCallback((items: Out[]): Block[] => {
    return items.map((item) => {
      const id = nextId()
      if (item.kind === 'text') return { id, type: 'text', text: item.text, tone: item.tone ?? 'plain' }
      if (item.kind === 'link') return { id, type: 'link', label: item.label, href: item.href }
      if (item.kind === 'neofetch') return { id, type: 'neofetch' }
      return { id, type: 'gap' }
    })
  }, [])

  useEffect(() => {
    bootCancelled.current = false
    setLines([])
    setReady(false)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timers: number[] = []
    if (reduce) {
      setLines(toBlocks(BOOT))
      setReady(true)
      return () => {
        bootCancelled.current = true
      }
    }
    BOOT.forEach((item, index) => {
      const timer = window.setTimeout(() => {
        if (bootCancelled.current) return
        setLines((prev) => [...prev, ...toBlocks([item])])
        if (index === BOOT.length - 1) setReady(true)
      }, 160 * (index + 1))
      timers.push(timer)
    })
    return () => {
      bootCancelled.current = true
      timers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [toBlocks])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.scrollTop = mode === 'shell' ? el.scrollHeight : 0
  }, [lines, mode])

  const run = useCallback(
    (raw: string) => {
      if (modeRef.current !== 'shell') return
      bootCancelled.current = true
      setReady(true)
      const trimmed = raw.trim()
      histPos.current = -1
      draft.current = ''
      setValue('')

      if (!trimmed) {
        setLines((prev) => [...prev, { id: nextId(), type: 'cmd', text: '' }])
        return
      }

      if (history.current[history.current.length - 1] !== trimmed) {
        history.current.push(trimmed)
      }

      const [head, ...rest] = trimmed.split(/\s+/)
      let command = head.toLowerCase()
      const arg = rest.join(' ').toLowerCase()
      if (command === 'game') command = 'play'
      if (command === 'play' && (arg === 'test' || arg === 'tests')) {
        setLines((prev) => [...prev, { id: nextId(), type: 'cmd', text: trimmed }])
        setMode('debug')
        return
      }
      if (command === 'play' && arg === 'snake') {
        setLines((prev) => [...prev, { id: nextId(), type: 'cmd', text: trimmed }])
        setMode('snake')
        return
      }
      if (command === 'play' && arg === 'debug') {
        setLines((prev) => [...prev, { id: nextId(), type: 'cmd', text: trimmed }])
        setMode('debug')
        return
      }
      if (command === 'clear') {
        setLines([])
        return
      }
      if (command === 'resume' || command === 'cv') {
        window.open(profile.resume, '_blank', 'noopener,noreferrer')
      }

      const echo: Block = { id: nextId(), type: 'cmd', text: trimmed }
      setLines((prev) => [...prev, echo, ...toBlocks(respond(command, arg))])
    },
    [toBlocks]
  )

  useImperativeHandle(ref, () => ({ run }), [run])

  function finishGame(result: GameLine[]) {
    setMode('shell')
    setLines((prev) => [
      ...prev,
      ...result.map((line) => ({
        id: nextId(),
        type: 'text' as const,
        text: line.text,
        tone: line.tone ?? 'plain',
      })),
    ])
    window.setTimeout(() => inputRef.current?.focus(), 0)
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'l' && event.ctrlKey) {
      event.preventDefault()
      bootCancelled.current = true
      setLines([])
      return
    }
    if (event.key === 'c' && event.ctrlKey) {
      event.preventDefault()
      setLines((prev) => [...prev, { id: nextId(), type: 'cmd', text: value ? `${value}^C` : '^C' }])
      setValue('')
      histPos.current = -1
      return
    }
    if (event.key === 'Tab') {
      event.preventDefault()
      const parts = value.trim().split(/\s+/)
      const head = (parts[0] ?? '').toLowerCase()
      if (parts.length > 1 && (head === 'open' || head === 'cat' || head === 'play')) {
        const options = head === 'play' ? ['debug', 'snake'] : projects.map((project) => project.slug)
        const partial = parts.slice(1).join(' ').toLowerCase()
        const hits = options.filter((option) => option.startsWith(partial))
        if (hits.length === 1) setValue(`${head} ${hits[0]}`)
        else if (hits.length > 1) {
          setLines((prev) => [
            ...prev,
            { id: nextId(), type: 'text', text: hits.join('   '), tone: 'dim' },
          ])
        }
        return
      }
      const partial = value.trim().toLowerCase()
      if (!partial || value !== value.trim()) return
      const hits = COMMANDS.filter((command) => command.startsWith(partial))
      if (hits.length === 1) setValue(hits[0])
      else if (hits.length > 1) {
        setLines((prev) => [
          ...prev,
          { id: nextId(), type: 'text', text: hits.join('   '), tone: 'dim' },
        ])
      }
      return
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (history.current.length === 0) return
      if (histPos.current === -1) draft.current = value
      const next =
        histPos.current === -1 ? history.current.length - 1 : Math.max(0, histPos.current - 1)
      histPos.current = next
      setValue(history.current[next])
      return
    }
    if (event.key === 'ArrowDown') {
      if (histPos.current === -1) return
      event.preventDefault()
      if (histPos.current >= history.current.length - 1) {
        histPos.current = -1
        setValue(draft.current)
      } else {
        histPos.current += 1
        setValue(history.current[histPos.current])
      }
    }
  }

  return (
    <div
      className={`flex h-[32rem] flex-col overflow-hidden rounded-md border bg-panel shadow-term sm:h-[36rem] ${
        focused && mode === 'shell' ? 'border-lime/40' : 'border-line'
      }`}
      onMouseDown={(event) => {
        if (mode !== 'shell') return
        const target = event.target as HTMLElement
        if (target.closest('a, button, input')) return
        event.preventDefault()
        inputRef.current?.focus()
      }}
    >
      <div className='flex shrink-0 items-center justify-between border-b border-line bg-panel-2 px-4 py-2.5'>
        <span className='flex items-center gap-2'>
          <span className='h-2.5 w-2.5 rounded-full bg-[#ff5f57]' />
          <span className='h-2.5 w-2.5 rounded-full bg-[#febc2e]' />
          <span className='term-dot h-2.5 w-2.5 rounded-full bg-lime' />
        </span>
        <span className='font-mono text-[11px] text-mute sm:text-xs'>jbailes.com: ~</span>
        <span className='font-mono text-[11px] text-mute'>zsh</span>
      </div>

      <div ref={scrollRef} role='log' aria-live='polite' className='min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5'>
        {mode === 'shell' && (
          <div className='space-y-1 font-mono text-[13px] leading-relaxed sm:text-sm'>
            {lines.map((line) => {
              if (line.type === 'gap') return <div key={line.id} className='h-2' />
              if (line.type === 'cmd') {
                return (
                  <p key={line.id} className='whitespace-pre-wrap break-words text-paper'>
                    <span className='text-lime'>❯ </span>
                    {line.text}
                  </p>
                )
              }
              if (line.type === 'link') {
                const external = line.href.startsWith('http') || line.href.endsWith('.pdf')
                return (
                  <p key={line.id}>
                    <a
                      href={line.href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className='break-all text-lime underline decoration-lime/40 underline-offset-2 hover:decoration-lime'
                    >
                      {line.label}
                    </a>
                  </p>
                )
              }
              if (line.type === 'neofetch') return <NeofetchCard key={line.id} />
              const tone =
                line.tone === 'dim'
                  ? 'text-mute'
                  : line.tone === 'accent'
                    ? 'text-lime'
                    : line.tone === 'warn'
                      ? 'term-warn'
                      : 'text-mist'
              return (
                <p key={line.id} className={`whitespace-pre-wrap break-words ${tone}`}>
                  {line.text}
                </p>
              )
            })}
            <form
              className='flex items-center gap-2 pt-3'
              onSubmit={(event) => {
                event.preventDefault()
                run(value)
              }}
            >
              <span className='text-lime' aria-hidden>
                ❯
              </span>
              <input
                ref={inputRef}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={onKeyDown}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                spellCheck={false}
                autoCapitalize='off'
                autoCorrect='off'
                autoComplete='off'
                aria-label='Terminal command'
                placeholder={ready ? 'help' : ''}
                className='min-w-0 flex-1 bg-transparent font-mono text-base text-paper caret-lime outline-none placeholder:text-mute/60 sm:text-sm'
              />
            </form>
          </div>
        )}
        {mode === 'snake' && <SnakeGame onExit={finishGame} />}
        {mode === 'debug' && <DebugGame onExit={finishGame} />}
      </div>
    </div>
  )
})

export default Terminal
