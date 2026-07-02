'use client'

import { m } from 'framer-motion'
import { useI18n } from '@/components/providers/I18nProvider'

export function LoadingSkeleton() {
  const { t } = useI18n()

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center">
        <m.div
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <m.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-text-secondary">
          {t.a11y.loadingSection}
        </m.p>
      </div>
    </div>
  )
}
