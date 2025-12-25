import { useEffect, useRef, useState } from 'react'

interface ParallaxOptions {
  speed?: number
  offset?: number
}

export function useParallax({ speed = 0.5, offset = 0 }: ParallaxOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  const [translateY, setTranslateY] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top + window.scrollY
      const scrollPosition = window.scrollY + window.innerHeight
      const elementCenter = elementTop + rect.height / 2
      const distance = scrollPosition - elementCenter
      const parallaxValue = distance * speed + offset

      setTranslateY(parallaxValue)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, offset])

  return { ref, translateY }
}


