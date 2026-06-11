'use client'

import { useI18n } from '@/components/providers/I18nProvider'
import { m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp } from 'lucide-react'
import { CountUp } from '@/components/ui/CountUp'

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
      className="py-section content-auto relative z-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <TrendingUp className="w-5 h-5" aria-hidden="true" />
            <h2 id="metrics-title" className="text-2xl md:text-3xl font-bold text-text">
              {t.metrics.title}
            </h2>
          </div>
        </m.div>

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
              <p className="text-sm text-text-secondary">{item.label}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
