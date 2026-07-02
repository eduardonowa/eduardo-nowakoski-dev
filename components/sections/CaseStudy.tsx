'use client'

import { useI18n } from '@/components/providers/I18nProvider'
import { m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileSearch } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

function CaseBlock({
  title,
  items,
  inView,
  delay,
}: Readonly<{
  title: string
  items: string[]
  inView: boolean
  delay: number
}>) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="glass bg-background-secondary/80 border border-border rounded-xl p-6"
    >
      <h3 className="text-lg font-bold text-text mb-4">{title}</h3>
      <ul className="space-y-2 list-disc list-inside marker:text-primary">
        {items.map((item) => (
          <li key={item} className="text-sm text-text-secondary leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </m.div>
  )
}

export function CaseStudy() {
  const { t } = useI18n()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const cs = t.caseStudy

  return (
    <section
      id="case-study"
      ref={ref}
      aria-labelledby="case-study-title"
      className="py-section relative z-10 content-auto"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            icon={FileSearch}
            title={cs.title}
            titleId="case-study-title"
            subtitle={cs.subtitle}
          />
        </AnimatedSection>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center mb-10 text-sm text-text-muted"
        >
          <span className="px-3 py-1 rounded-lg border border-border bg-background-secondary/60">
            {cs.client}
          </span>
          <span className="px-3 py-1 rounded-lg border border-border bg-background-secondary/60">
            {cs.employer}
          </span>
          <span className="px-3 py-1 rounded-lg border border-border bg-background-secondary/60">
            {cs.period}
          </span>
        </m.div>

        <div className="grid md:grid-cols-2 gap-6">
          <CaseBlock title={cs.problem.title} items={cs.problem.items} inView={inView} delay={0.15} />
          <CaseBlock title={cs.solution.title} items={cs.solution.items} inView={inView} delay={0.2} />
          <CaseBlock
            title={cs.architecture.title}
            items={cs.architecture.items}
            inView={inView}
            delay={0.25}
          />
          <CaseBlock title={cs.results.title} items={cs.results.items} inView={inView} delay={0.3} />
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center mt-10"
        >
          <Button href={cs.cta.href} variant="outline">
            {cs.cta.label}
          </Button>
        </m.div>
      </div>
    </section>
  )
}
