'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const codeSnippets = [
  {
    code: `const developer = {
  name: 'Eduardo',
  role: 'Senior Front-End',
  stack: ['Vue', 'Angular', 'AEM']
}`,
    lines: [
      { text: `const developer = {`, type: 'keyword' },
      { text: `  name: 'Eduardo',`, type: 'string' },
      { text: `  role: 'Senior Front-End',`, type: 'string' },
      { text: `  stack: ['Vue', 'Angular', 'AEM']`, type: 'array' },
      { text: `}`, type: 'keyword' },
    ],
  },
  {
    code: `function buildPortfolio() {
  return <Portfolio 
    technologies={techStack}
    experience={years}
  />
}`,
    lines: [
      { text: `function buildPortfolio() {`, type: 'keyword' },
      { text: `  return <Portfolio`, type: 'tag' },
      { text: `    technologies={techStack}`, type: 'prop' },
      { text: `    experience={years}`, type: 'prop' },
      { text: `  />`, type: 'tag' },
      { text: `}`, type: 'keyword' },
    ],
  },
  {
    code: `@Component({
  selector: 'app-feature',
  template: '<div>...</div>'
})
export class FeatureComponent {}`,
    lines: [
      { text: `@Component({`, type: 'decorator' },
      { text: `  selector: 'app-feature',`, type: 'string' },
      { text: `  template: '<div>...</div>'`, type: 'string' },
      { text: `})`, type: 'decorator' },
      { text: `export class FeatureComponent {}`, type: 'keyword' },
    ],
  },
  {
    code: `const { data } = useQuery({
  queryKey: ['projects'],
  queryFn: fetchProjects
})`,
    lines: [
      { text: `const { data } = useQuery({`, type: 'keyword' },
      { text: `  queryKey: ['projects'],`, type: 'array' },
      { text: `  queryFn: fetchProjects`, type: 'function' },
      { text: `})`, type: 'keyword' },
    ],
  },
  {
    code: `export default function Page() {
  return <Layout>
    <Hero />
    <About />
  </Layout>
}`,
    lines: [
      { text: `export default function Page() {`, type: 'keyword' },
      { text: `  return <Layout>`, type: 'tag' },
      { text: `    <Hero />`, type: 'tag' },
      { text: `    <About />`, type: 'tag' },
      { text: `  </Layout>`, type: 'tag' },
      { text: `}`, type: 'keyword' },
    ],
  },
  {
    code: `const theme = {
  colors: {
    primary: '#BD93F9',
    background: '#282A36'
  }
}`,
    lines: [
      { text: `const theme = {`, type: 'keyword' },
      { text: `  colors: {`, type: 'object' },
      { text: `    primary: '#BD93F9',`, type: 'string' },
      { text: `    background: '#282A36'`, type: 'string' },
      { text: `  }`, type: 'object' },
      { text: `}`, type: 'keyword' },
    ],
  },
]

const getColorClass = (type: string) => {
  const colors: Record<string, string> = {
    keyword: 'text-[#ff79c6]', // Dracula Pink
    string: 'text-[#f1fa8c]', // Dracula Yellow
    number: 'text-[#bd93f9]', // Dracula Purple
    function: 'text-[#50fa7b]', // Dracula Green
    tag: 'text-[#8be9fd]', // Dracula Cyan
    prop: 'text-[#ffb86c]', // Dracula Orange
    decorator: 'text-[#bd93f9]', // Dracula Purple
    array: 'text-[#f1fa8c]', // Dracula Yellow
    object: 'text-[#50fa7b]', // Dracula Green
    comment: 'text-[#6272a4]', // Dracula Comment
  }
  return colors[type] || 'text-[#f8f8f2]' // Dracula Foreground
}

export function CodeSnippets() {
  const [snippets, setSnippets] = useState<Array<{ id: number; lines: any[]; x: number; y: number }>>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Delay inicial para não bloquear o carregamento
    const initialDelay = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(initialDelay)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const generateSnippets = () => {
      const newSnippets = codeSnippets.map((snippet, index) => ({
        id: index,
        lines: snippet.lines,
        x: Math.random() * 80 + 10, // 10% to 90%
        y: Math.random() * 80 + 10,
      }))
      setSnippets(newSnippets)
    }

    generateSnippets()
    const interval = setInterval(() => {
      generateSnippets()
    }, 15000)

    return () => clearInterval(interval)
  }, [isVisible])

  const shouldRender = isVisible && snippets.length > 0
  if (!shouldRender) {
    return null
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0, minHeight: '100vh' }}>
      {snippets.map((snippet) => {
        // Calcula posição inicial baseada na altura do documento, não da viewport
        const documentHeight = globalThis.window === undefined ? 2000 : document.documentElement.scrollHeight
        const startY = documentHeight + 100
        const endY = -300
        const randomX = Math.random() * 40 - 20
        
        return (
          <motion.div
            key={snippet.id}
            initial={{ opacity: 0, translateY: startY, translateX: snippet.x }}
            animate={{
              opacity: [0, 0.2, 0.2, 0],
              translateY: [startY, endY],
              translateX: [snippet.x, snippet.x + randomX],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 8,
              repeatDelay: Math.random() * 3,
            }}
            className="absolute font-mono text-[11px] md:text-sm leading-tight"
            style={{
              left: `${snippet.x}%`,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
              willChange: 'transform, opacity',
            }}
          >
            {snippet.lines.map((line, lineIndex) => (
              <div key={`${snippet.id}-line-${lineIndex}`} className={getColorClass(line.type)} style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                {line.text}
              </div>
            ))}
          </motion.div>
        )
      })}
    </div>
  )
}
