'use client'

import { m } from 'framer-motion'
import { useI18n } from '@/components/providers/I18nProvider'

interface SectionSkeletonProps {
  minHeight?: string
}

export function SectionSkeleton({ minHeight = 'min-h-[320px]' }: Readonly<SectionSkeletonProps>) {
  const { t } = useI18n()

  return (
    <div
      className={`${minHeight} w-full flex items-center justify-center py-section`}
      aria-busy="true"
      aria-label={t.a11y.loadingSection}
    >
      <div className="text-center">
        <m.div
          className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full mx-auto mb-3"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <p className="text-sm text-text-muted">{t.a11y.loadingSection}</p>
      </div>
    </div>
  )
}
