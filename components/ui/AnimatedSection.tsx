'use client'

import { forwardRef, type ReactNode } from 'react'
import { m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
}

const MotionDiv = m.div

export const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(function AnimatedSection(
  { children, className = '', delay = 0, threshold = 0.1 },
  forwardedRef
) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  })

  const setRef = (node: HTMLDivElement | null) => {
    ref(node)
    if (typeof forwardedRef === 'function') {
      forwardedRef(node)
    } else if (forwardedRef) {
      forwardedRef.current = node
    }
  }

  return (
    <MotionDiv
      ref={setRef}
      initial={{ opacity: 0, translateY: 30 }}
      animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 30 }}
      transition={{ duration: 0.6, delay }}
      style={{ willChange: inView ? 'transform, opacity' : 'auto' }}
      className={className}
    >
      {children}
    </MotionDiv>
  )
})
