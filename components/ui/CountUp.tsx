'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface CountUpProps {
  value: number
  suffix?: string
  duration?: number
}

export function CountUp({ value, suffix = '', duration = 1500 }: Readonly<CountUpProps>) {
  const reducedMotion = useReducedMotion()
  const [display, setDisplay] = useState(reducedMotion ? value : 0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    if (reducedMotion) {
      setDisplay(value)
      return
    }

    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setDisplay(Math.round(progress * value))
      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [inView, value, duration, reducedMotion])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
