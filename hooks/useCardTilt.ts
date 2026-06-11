'use client'

import { useRef, useEffect, useState, type MouseEvent } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function useCardTilt() {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const [transform, setTransform] = useState('perspective(800px) rotateX(0deg) rotateY(0deg)')

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (reducedMotion || isTouch) {
      setTransform('none')
    }
  }, [reducedMotion])

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -6
    const rotateY = ((x - centerX) / centerX) * 6

    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`)
  }

  const onMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg)')
  }

  return { ref, transform, onMouseMove, onMouseLeave, reducedMotion }
}
