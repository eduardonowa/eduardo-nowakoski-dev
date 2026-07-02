'use client'

import { useI18n } from '@/components/providers/I18nProvider'
import { m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2 } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

const CATEGORY_ORDER = ['aem', 'frontend', 'cms', 'state', 'testing', 'devops'] as const

export function Technologies() {
  const { t } = useI18n()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const coreSet = new Set(t.technologies.coreCategories)

  return (
    <section
      id="technologies"
      ref={ref}
      aria-labelledby="technologies-title"
      className="py-section relative overflow-hidden content-auto"
      style={{ isolation: 'isolate' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative" style={{ zIndex: 1 }}>
        <AnimatedSection>
          <SectionHeading
            icon={Code2}
            title={t.technologies.title}
            titleId="technologies-title"
            subtitle={t.technologies.subtitle}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {CATEGORY_ORDER.map((categoryKey, categoryIndex) => {
            const isCore = coreSet.has(categoryKey)
            const span = t.technologies.categorySpans[categoryKey] ?? ''
            const items = t.technologies.items[categoryKey]

            return (
              <m.div
                key={categoryKey}
                initial={{ opacity: 0, translateY: 20 }}
                animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 20 }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.08 }}
                className={`glass bg-background/80 border border-border rounded-xl p-5 md:p-6 glow-hover ${span}`}
              >
                <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">
                  {t.technologies.categories[categoryKey]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((name) => (
                    <span
                      key={name}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                        isCore
                          ? 'border-primary/40 bg-primary/5 text-text'
                          : 'border-border bg-background-secondary/50 text-text-secondary'
                      }`}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </m.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
