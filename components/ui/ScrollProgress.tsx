'use client'

import { m } from 'framer-motion'
import { useI18n } from '@/components/providers/I18nProvider'
import { useScroll } from '@/components/providers/ScrollProvider'

export function ScrollProgress() {
  const { scrollProgress } = useScroll()
  const { t } = useI18n()

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
