'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  splitBy?: 'word' | 'char'
}

export function TextReveal({ children, className = '', delay = 0, splitBy = 'word' }: TextRevealProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const words = splitBy === 'word' ? children.split(' ') : children.split('')

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, translateY: 20 }}
          animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 20 }}
          transition={{
            duration: 0.3,
            delay: delay + index * 0.05,
            ease: 'easeOut',
          }}
          style={{ willChange: inView ? 'transform, opacity' : 'auto' }}
          className="inline-block"
        >
          {word}
          {splitBy === 'word' && index < words.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </span>
  )
}

