'use client'

import { useI18n } from '@/components/providers/I18nProvider'
import { m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp } from 'lucide-react'
import { CountUp } from '@/components/ui/CountUp'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Metrics() {
  const { t } = useI18n()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const items = [
    t.metrics.items.performance,
    t.metrics.items.incidents,
    t.metrics.items.mobile,
  ]

  return (
    <section
      id="metrics"
      ref={ref}
      aria-labelledby="metrics-title"
      className="pb-section content-auto relative z-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <AnimatedSection threshold={0.2}>
          <SectionHeading
            icon={TrendingUp}
            title={t.metrics.title}
            titleId="metrics-title"
            className="mb-6"
          />
        </AnimatedSection>

        <m.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-sm text-text-muted text-center max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.metrics.note}
        </m.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <m.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass bg-background-secondary/80 border border-border rounded-xl p-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
                <CountUp value={item.value} suffix={item.suffix} />
              </p>
              <p className="text-sm font-medium text-text mb-2">{item.label}</p>
              <p className="text-xs text-text-muted leading-relaxed mb-2">{item.context}</p>
              <p className="text-xs text-text-muted/80 leading-relaxed">{item.methodology}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
