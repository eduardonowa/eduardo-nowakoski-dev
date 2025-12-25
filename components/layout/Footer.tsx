'use client'

import { useI18n } from '@/components/providers/I18nProvider'
import { Heart, Gauge } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Footer() {
  const { t, locale } = useI18n()
  const [isProduction, setIsProduction] = useState(false)

  useEffect(() => {
    if (globalThis.window !== undefined) {
      setIsProduction(
        globalThis.window.location.hostname !== 'localhost' && 
        !globalThis.window.location.hostname.includes('127.0.0.1')
      )
    }
  }, [])

  const handleLighthouseClick = () => {
    if (globalThis.window === undefined) return

    if (isProduction) {
      // Em produção, abre o PageSpeed Insights
      const currentUrl = globalThis.window.location.href
      const pageSpeedUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(currentUrl)}`
      globalThis.window.open(pageSpeedUrl, '_blank', 'noopener,noreferrer')
    } else {
      // Em desenvolvimento, mostra instruções
      const instructions = locale === 'pt-BR' 
        ? 'Para abrir o Lighthouse:\n1. Pressione F12 ou Ctrl+Shift+I\n2. Vá para a aba "Lighthouse"\n3. Clique em "Analyze page load"'
        : 'To open Lighthouse:\n1. Press F12 or Ctrl+Shift+I\n2. Go to the "Lighthouse" tab\n3. Click "Analyze page load"'
      
      alert(instructions)
    }
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
              onClick={handleLighthouseClick}
              className="text-sm text-text-muted hover:text-primary transition-colors flex items-center gap-1.5 group"
              title={t.footer.lighthouseTooltip}
              aria-label={t.footer.lighthouse}
            >
              <Gauge className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">{t.footer.lighthouse}</span>
            </button>
            <p className="text-sm text-text-muted flex items-center gap-1">
              {t.footer.madeWith} <Heart className="w-4 h-4 text-primary fill-primary" />{' '}
              {t.footer.using} Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

