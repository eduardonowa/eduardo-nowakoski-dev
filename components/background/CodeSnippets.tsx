'use client'

import { useEffect, useState, useRef, useMemo } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const codeSnippets = [
  {
    lines: [
      { text: `const developer = {`, type: 'keyword' },
      { text: `  name: 'Eduardo',`, type: 'string' },
      { text: `  role: 'Senior Front-End',`, type: 'string' },
      { text: `  stack: ['React', 'Next.js', 'Vue']`, type: 'array' },
      { text: `}`, type: 'keyword' },
    ],
  },
  {
    lines: [
      { text: `export default function Page() {`, type: 'keyword' },
      { text: `  return <Portfolio />`, type: 'tag' },
      { text: `}`, type: 'keyword' },
    ],
  },
]

const getColorClass = (type: string) => {
  const colors: Record<string, string> = {
    keyword: 'text-syntax-keyword',
    string: 'text-syntax-string',
    tag: 'text-syntax-tag',
    array: 'text-syntax-string',
  }
  return colors[type] || 'text-syntax'
}

type SnippetItem = {
  id: number
  lines: (typeof codeSnippets)[0]['lines']
  x: number
  randomX: number
  duration: number
  delay: number
}

function generateSnippets(count: number): SnippetItem[] {
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    lines: codeSnippets[index % codeSnippets.length].lines,
    x: 10 + Math.random() * 80,
    randomX: Math.random() * 40 - 20,
    duration: 20 + Math.random() * 10,
    delay: Math.random() * 8,
  }))
}

export function CodeSnippets() {
  const reducedMotion = useReducedMotion()
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const snippetsRef = useRef<SnippetItem[]>([])

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 768px)')
    const updateMobile = () => setIsMobile(mobileQuery.matches)
    updateMobile()
    mobileQuery.addEventListener('change', updateMobile)

    const onVisibility = () => setIsHidden(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)

    const delay = setTimeout(() => setIsVisible(true), 500)

    return () => {
      clearTimeout(delay)
      mobileQuery.removeEventListener('change', updateMobile)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  const snippetCount = isMobile ? 0 : 2

  const snippets = useMemo(() => {
    if (snippetCount === 0) return []
    if (snippetsRef.current.length === snippetCount) return snippetsRef.current
    const next = generateSnippets(snippetCount)
    snippetsRef.current = next
    return next
  }, [snippetCount])

  if (reducedMotion || !isVisible || snippetCount === 0 || isHidden) {
    return null
  }

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden hidden md:block"
      style={{ zIndex: 0, height: '100vh' }}
    >
      {snippets.map((snippet) => (
        <div
          key={`snippet-${snippet.id}`}
          className="absolute font-mono text-sm leading-tight animate-code-float opacity-20"
          style={{
            left: `${snippet.x}%`,
            animationDuration: `${snippet.duration}s`,
            animationDelay: `${snippet.delay}s`,
            ['--float-x' as string]: `${snippet.randomX}px`,
          }}
        >
          {snippet.lines.map((line, lineIndex) => (
            <div key={`${snippet.id}-line-${lineIndex}`} className={getColorClass(line.type)}>
              {line.text}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
