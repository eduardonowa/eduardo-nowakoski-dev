'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

interface ScrollContextValue {
  scrollY: number
  scrollProgress: number
}

const ScrollContext = createContext<ScrollContextValue>({
  scrollY: 0,
  scrollProgress: 0,
})

export function ScrollProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const update = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      setScrollY(scrollPx)
      setScrollProgress(winHeight > 0 ? (scrollPx / winHeight) * 100 : 0)
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    update()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ScrollContext.Provider value={{ scrollY, scrollProgress }}>{children}</ScrollContext.Provider>
  )
}

export function useScroll() {
  return useContext(ScrollContext)
}
