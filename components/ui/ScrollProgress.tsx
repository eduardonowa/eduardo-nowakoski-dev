'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = winHeight > 0 ? (scrollPx / winHeight) * 100 : 0
      setScrollProgress(scrolled)
    }

    // Throttle scroll events
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollProgress()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateScrollProgress()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [mounted])

  if (!mounted) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary z-[100] origin-left"
      style={{
        scaleX: scrollProgress / 100,
        transformOrigin: 'left',
        willChange: 'transform',
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress / 100 }}
      transition={{ duration: 0.1, ease: 'linear' }}
    />
  )
}

