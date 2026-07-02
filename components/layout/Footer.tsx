'use client'

import { useI18n } from '@/components/providers/I18nProvider'
import { CONTACT } from '@/lib/constants/contact'
import { Gauge } from 'lucide-react'

export function Footer() {
  const { t } = useI18n()

  const handleLighthouseClick = () => {
    const pageSpeedUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(`${CONTACT.siteUrl}/`)}`
    window.open(pageSpeedUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted text-center md:text-left">
            {t.footer.copyright}
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleLighthouseClick}
              className="text-sm text-text-muted hover:text-primary transition-colors flex items-center gap-1.5 group"
              title={t.footer.lighthouseTooltip}
              aria-label={t.footer.lighthouse}
            >
              <Gauge className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="hidden sm:inline">{t.footer.lighthouse}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
