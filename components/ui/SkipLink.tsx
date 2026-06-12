'use client'

import { useI18n } from '@/components/providers/I18nProvider'

export function SkipLink() {
  const { t } = useI18n()

  return (
    <a href="#main-content" className="skip-link" aria-label={t.a11y.skipToContent}>
      {t.a11y.skipToContent}
    </a>
  )
}
