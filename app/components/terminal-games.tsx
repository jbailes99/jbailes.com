'use client'

import { useEffect, useRef, useState } from 'react'

export type GameLine = { text: string; tone?: 'plain' | 'dim' | 'accent' | 'warn' }

const COLS = 18
const ROWS = 11

type Point = { x: number; y: number }

export function SnakeGame({ onExit }: { onExit: (lines: GameLine[]) => void }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const left = useRef(false)
  const onExitRef = useRef(onExit)
  onExitRef.current = onExit
  const state = useRef({
    snake: [
      { x: 5, y: 5 },
      { x: 4, y: 5 },
      { x: 3, y: 5 },
    ] as Point[],
    dir: { x: 1, y: 0 },
    next: { x: 1, y: 0 },
    food: { x: 12, y: 5 },
    score: 0,
    delay: 170,
    over: false,
    won: false,
    started: false,
  })
  const [, setTick] = useState(0)

  function leave() {
    if (left.current) return
    left.current = true
    const s = state.current
    onExitRef.current([
      {
        text: s.won
          ? `cleared the board. ${s.score} semicolons.`
          : `segfault. ${s.score} semicolon${s.score === 1 ? '' : 's'} eaten.`,
        tone: s.won ? 'accent' : 'plain',
      },
      { text: 'the build survived. this time.', tone: 'dim' },
    ])
  }

  const leaveRef = useRef(leave)
  leaveRef.current = leave

  function setDir(x: number, y: number) {
    const s = state.current
    if (s.over) return
    if (!s.started) {
      s.started = true
      s.dir = { x, y }
      s.next = { x, y }
      setTick((n) => n + 1)
      return
    }
    if (s.next.x + x === 0 && s.next.y + y === 0) return
    s.next = { x, y }
  }

  useEffect(() => {
    rootRef.current?.focus()
    let timer = 0
    const step = () => {
      const s = state.current
      if (!s.started || s.over) return
      s.dir = s.next
      const head = { x: s.snake[0].x + s.dir.x, y: s.snake[0].y + s.dir.y }
      if (head.x < 0 || head.y < 0 || head.x >= COLS || head.y >= ROWS) {
        s.over = true
        setTick((n) => n + 1)
        return
      }
      const eating = head.x === s.food.x && head.y === s.food.y
      const hitSelf = s.snake.some((part, index) => {
        if (!eating && index === s.snake.length - 1) return false
        return part.x === head.x && part.y === head.y
      })
      if (hitSelf) {
        s.over = true
        setTick((n) => n + 1)
        return
      }
      s.snake = [head, ...s.snake]
      if (eating) {
        s.score += 1
        s.delay = Math.max(68, s.delay - 7)
        const open: Point[] = []
        for (let y = 0; y < ROWS; y++) {
          for (let x = 0; x < COLS; x++) {
            if (!s.snake.some((part) => part.x === x && part.y === y)) {
              open.push({ x, y })
            }
          }
        }
        if (open.length === 0) {
          s.over = true
          s.won = true
        } else {
          s.food = open[Math.floor(Math.random() * open.length)]
        }
      } else {
        s.snake.pop()
      }
      setTick((n) => n + 1)
    }
    const loop = () => {
      step()
      timer = window.setTimeout(loop, state.current.delay)
    }
    timer = window.setTimeout(loop, state.current.delay)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase()
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'w', 'a', 's', 'd', 'q'].includes(key)) {
        event.preventDefault()
      }
      if (key === 'q' || (state.current.over && key === 'enter')) {
        leaveRef.current()
        return
      }
      if (key === 'arrowup' || key === 'w') setDir(0, -1)
      if (key === 'arrowdown' || key === 's') setDir(0, 1)
      if (key === 'arrowleft' || key === 'a') setDir(-1, 0)
      if (key === 'arrowright' || key === 'd') setDir(1, 0)
    }
    window.addEventListener('keydown', onKey, { passive: false })
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const s = state.current
  const cells: { key: string; char: string; className: string }[] = []
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const index = s.snake.findIndex((part) => part.x === x && part.y === y)
      let char = ''
      let className = 'text-line'
      if (index === 0) {
        char = '@'
        className = s.over && !s.won ? 'term-bad' : 'text-lime'
      } else if (index > 0) {
        char = 'o'
        className = 'text-paper/80'
      } else if (s.food.x === x && s.food.y === y) {
        char = ';'
        className = 'text-lime'
      } else {
        char = '·'
      }
      cells.push({ key: `${x}-${y}`, char, className })
    }
  }

  return (
    <div
      ref={rootRef}
      tabIndex={0}
      className='outline-none'
      aria-label='Snake game. Eat semicolons. Arrow keys or WASD to move.'
    >
      <p className='font-mono text-xs text-mute'>
        snake — eat the semicolons · {s.started ? 'arrows or wasd · q quits' : 'press an arrow to start'}
      </p>
      <p className='mt-1 font-mono text-sm text-paper'>
        score <span className='text-lime'>{s.score}</span>
      </p>
      <div className='relative mt-4 w-fit border border-line bg-ink p-2'>
        <div className={`snake-grid ${s.over ? 'opacity-40' : ''}`}>
          {cells.map((cell) => (
            <span
              key={cell.key}
              className={`flex items-center justify-center font-mono text-[11px] leading-none sm:text-sm ${cell.className}`}
            >
              {cell.char}
            </span>
          ))}
        </div>
        {s.over && (
          <div className='absolute inset-0 flex flex-col items-center justify-center gap-1 bg-ink/80 text-center'>
            <p className='font-mono text-sm text-lime'>{s.won ? 'board cleared' : 'segfault'}</p>
            <p className='font-mono text-xs text-mist'>
              {s.score} semicolon{s.score === 1 ? '' : 's'}
            </p>
            <button
              type='button'
              onClick={leave}
              className='mt-2 border border-lime px-3 py-1 font-mono text-xs text-lime hover:bg-lime hover:text-ink'
            >
              return to shell
            </button>
          </div>
        )}
      </div>
      <div className='mt-4 grid w-fit grid-cols-3 gap-1'>
        <span />
        <Pad label='Up' onPress={() => setDir(0, -1)}>
          ↑
        </Pad>
        <span />
        <Pad label='Left' onPress={() => setDir(-1, 0)}>
          ←
        </Pad>
        <Pad label='Down' onPress={() => setDir(0, 1)}>
          ↓
        </Pad>
        <Pad label='Right' onPress={() => setDir(1, 0)}>
          →
        </Pad>
      </div>
    </div>
  )
}

function Pad({
  children,
  label,
  onPress,
}: {
  children: string
  label: string
  onPress: () => void
}) {
  return (
    <button
      type='button'
      aria-label={label}
      onClick={onPress}
      className='h-10 w-10 border border-line font-mono text-mist hover:border-lime hover:text-lime'
    >
      {children}
    </button>
  )
}

type Puzzle = {
  file: string
  code: string[]
  prompt: string
  choices: string[]
  answer: number
  explain: string
}

const PUZZLES: Puzzle[] = [
  {
    file: 'sum.js',
    code: ['function sum(a, b) {', '  return a - b', '}'],
    prompt: 'sum(2, 2) should be 4. which line ships?',
    choices: ['return a - b', 'return a + b', 'return a * b'],
    answer: 1,
    explain: 'subtraction is a bold product decision. the test disagrees.',
  },
  {
    file: 'last.js',
    code: ['function last(items) {', '  return items[items.length]', '}'],
    prompt: 'the last item is missing. what returns it?',
    choices: ['items[items.length]', 'items[items.length - 1]', 'items[-1]'],
    answer: 1,
    explain: 'items[-1] is a python habit. javascript reads that as undefined.',
  },
  {
    file: 'gate.js',
    code: ['if (loggedIn = true) {', '  renderApp()', '}'],
    prompt: 'everyone gets in. which condition is honest?',
    choices: ['if (loggedIn = true)', 'if (loggedIn === true)', 'if (loggedIn == "yes")'],
    answer: 1,
    explain: 'one equals sign assigns. the gate was always open.',
  },
  {
    file: 'total.js',
    code: ['prices.reduce((sum, n) => {', '  sum + n', '}, 0)'],
    prompt: 'total comes back undefined. what was dropped?',
    choices: ['sum + n', 'return sum + n', 'return n'],
    answer: 1,
    explain: 'a brace block does not return the last line. you have to say so.',
  },
  {
    file: 'user.js',
    code: ['const res = await fetch("/api/me")', 'return res.name'],
    prompt: 'res.name is undefined. where is the body?',
    choices: ['return res.name', 'return (await res.json()).name', 'return await res.name()'],
    answer: 1,
    explain: 'fetch hands you a response. json() is the call that opens it.',
  },
  {
    file: 'loop.js',
    code: ['for (let i = 0; i <= items.length; i++) {', '  log(items[i].id)', '}'],
    prompt: 'the last pass throws. which bound stays in range?',
    choices: ['i <= items.length', 'i < items.length', 'i < items.length + 1'],
    answer: 1,
    explain: 'the last real index is length - 1. that loop walked off the array.',
  },
]

function scrambleChoices(puzzle: Puzzle): Puzzle {
  const paired = shuffle(puzzle.choices.map((choice, index) => ({ choice, index })))
  return {
    ...puzzle,
    choices: paired.map((item) => item.choice),
    answer: paired.findIndex((item) => item.index === puzzle.answer),
  }
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = copy[i]
    copy[i] = copy[j]
    copy[j] = tmp
  }
  return copy
}

export function DebugGame({ onExit }: { onExit: (lines: GameLine[]) => void }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [puzzles] = useState(() => shuffle(PUZZLES).slice(0, 4).map(scrambleChoices))
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [correct, setCorrect] = useState(0)
  const [done, setDone] = useState(false)

  const puzzle = puzzles[index]

  useEffect(() => {
    rootRef.current?.focus()
  }, [index, done])

  function choose(choice: number) {
    if (picked !== null || done) return
    setPicked(choice)
    if (choice === puzzle.answer) setCorrect((count) => count + 1)
  }

  function next() {
    if (picked === null) return
    if (index + 1 >= puzzles.length) {
      setDone(true)
      return
    }
    setIndex((value) => value + 1)
    setPicked(null)
  }

  function finish() {
    const total = puzzles.length
    onExit([
      {
        text: `${correct}/${total} tests passing`,
        tone: correct === total ? 'accent' : 'plain',
      },
      {
        text:
          correct === total
            ? 'all green. the review would be boring, in a good way.'
            : 'a few are still red. play debug runs it again.',
        tone: 'dim',
      },
    ])
  }

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (done) {
        if (event.key === 'Enter') {
          event.preventDefault()
          finish()
        }
        return
      }
      if (event.key === '1' || event.key === '2' || event.key === '3') {
        event.preventDefault()
        choose(Number(event.key) - 1)
      }
      if (event.key === 'Enter') {
        event.preventDefault()
        next()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (done) {
    return (
      <div ref={rootRef} tabIndex={0} className='outline-none'>
        <p className='font-mono text-xs uppercase tracking-[0.18em] text-lime'>suite finished</p>
        <p className='mt-3 font-mono text-2xl text-paper'>
          {correct}/{puzzles.length}
        </p>
        <p className='mt-2 max-w-sm font-mono text-sm text-mist'>
          {correct === puzzles.length
            ? 'Every test went green. Ship it, or at least brag quietly.'
            : 'Not a clean build. The failing lines are still in the file.'}
        </p>
        <button
          type='button'
          onClick={finish}
          className='mt-5 border border-lime px-3 py-1 font-mono text-xs text-lime hover:bg-lime hover:text-ink'
        >
          return to shell
        </button>
      </div>
    )
  }

  return (
    <div ref={rootRef} tabIndex={0} className='outline-none'>
      <p className='font-mono text-xs text-mute'>
        debug — test {index + 1}/{puzzles.length} — keys 1, 2, 3 — enter continues
      </p>
      <p className='mt-3 font-mono text-xs text-lime'>{puzzle.file}</p>
      <pre className='mt-2 overflow-x-auto border border-line bg-ink px-3 py-3 font-mono text-[13px] leading-relaxed text-paper'>
        {puzzle.code.join('\n')}
      </pre>
      <p className='mt-3 font-mono text-sm text-mist'>{puzzle.prompt}</p>
      <div className='mt-3 space-y-2'>
        {puzzle.choices.map((choice, choiceIndex) => {
          const isAnswer = choiceIndex === puzzle.answer
          const isPicked = choiceIndex === picked
          let tone = 'border-line text-mist hover:border-lime hover:text-paper'
          if (picked !== null && isAnswer) tone = 'border-lime text-lime'
          else if (picked !== null && isPicked) tone = 'border term-bad'
          else if (picked !== null) tone = 'border-line text-mute'
          return (
            <button
              key={choice}
              type='button'
              disabled={picked !== null}
              onClick={() => choose(choiceIndex)}
              className={`block w-full border px-3 py-2 text-left font-mono text-sm ${tone}`}
            >
              <span className='mr-3 text-mute'>{choiceIndex + 1}</span>
              {choice}
            </button>
          )
        })}
      </div>
      {picked !== null && (
        <div className='mt-4'>
          <p className='font-mono text-sm text-mist'>{puzzle.explain}</p>
          <button
            type='button'
            onClick={next}
            className='mt-3 border border-lime px-3 py-1 font-mono text-xs text-lime hover:bg-lime hover:text-ink'
          >
            {index + 1 === puzzles.length ? 'see results' : 'next test'}
          </button>
        </div>
      )}
    </div>
  )
}
