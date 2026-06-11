'use client'

import { useEffect, useState } from 'react'
import { m } from 'framer-motion'
import { useI18n } from '@/components/providers/I18nProvider'

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const { t } = useI18n()

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = winHeight > 0 ? (scrollPx / winHeight) * 100 : 0
      setScrollProgress(scrolled)
    }

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
  }, [])

  return (
    <m.div
      role="progressbar"
      aria-label={t.a11y.scrollProgress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(scrollProgress)}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-[100] origin-left"
      data-testid="scroll-progress-bar"
      style={{
        scaleX: scrollProgress / 100,
        transformOrigin: 'left',
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress / 100 }}
      transition={{ duration: 0.1, ease: 'linear' }}
    />
  )
}
