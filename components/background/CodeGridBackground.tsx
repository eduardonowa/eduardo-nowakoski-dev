'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const CODE_LINES = [
  'const component = () => {}',
  'export default function Page() {}',
  'useEffect(() => {}, [])',
  'const theme = useTheme()',
  '<Component />',
  'interface Props {}',
  'const styles = {}',
  'return <Layout />',
  'useState(false)',
  'const tokens = designSystem',
]

export function CodeGridBackground() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -120])

  const [lines, setLines] = useState<string[]>([])

  useEffect(() => {
    const repeated = Array.from({ length: 32 }, () =>
      CODE_LINES[Math.floor(Math.random() * CODE_LINES.length)]
    )
    setLines(repeated)
  }, [])

  return (
    <motion.div
      aria-hidden
      style={{ y }}
      className="
        hidden md:block
        pointer-events-none
        absolute inset-0
        z-0
        overflow-hidden
      "
    >
    <div
    className="
        grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
        gap-6
        px-10 py-28
        font-mono
        text-xs sm:text-sm
        select-none
        mask-gradient

        text-text-secondary
        dark:opacity-[0.06]
        opacity-[0.07]
    "
    style={{
        filter: 'blur(0.25px)',
    }}
    >
        {lines.map((line, index) => (
          <span key={index} className="whitespace-nowrap">
            {line}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
