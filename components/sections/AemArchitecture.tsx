'use client'

import { useI18n } from '@/components/providers/I18nProvider'
import { m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Layers } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function AemArchitecture() {
  const { t } = useI18n()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="aem-architecture"
      ref={ref}
      aria-labelledby="aem-architecture-title"
      className="py-section section-surface relative z-10 content-auto"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <AnimatedSection>
          <SectionHeading
            icon={Layers}
            title={t.aemArchitecture.title}
            titleId="aem-architecture-title"
            subtitle={t.aemArchitecture.subtitle}
          />
        </AnimatedSection>

        <div className="grid gap-6">
          {t.aemArchitecture.decisions.map((decision, index) => (
            <m.article
              key={decision.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass bg-background-secondary/80 border border-border rounded-xl p-6 md:p-8"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                <h3 className="text-lg font-bold text-text">{decision.title}</h3>
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {decision.context}
                </span>
              </div>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-text mb-1">{t.aemArchitecture.decisionLabel}</dt>
                  <dd className="text-text-secondary leading-relaxed">{decision.decision}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-text mb-1">{t.aemArchitecture.rationaleLabel}</dt>
                  <dd className="text-text-secondary leading-relaxed">{decision.rationale}</dd>
                </div>
              </dl>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  )
}
