'use client'

import { useState } from 'react'
import { useI18n } from '@/components/providers/I18nProvider'
import { m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sparkles, Clock, Zap, FileText, ChevronDown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

const METRIC_ICONS: LucideIcon[] = [Clock, Zap, FileText]

export function AiWorkflow() {
  const { t } = useI18n()
  const [expanded, setExpanded] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const caseColumns = [t.aiWorkflow.cases.frontend, t.aiWorkflow.cases.aem]

  return (
    <section
      id="ai-workflow"
      ref={ref}
      aria-labelledby="ai-workflow-title"
      className="py-section relative overflow-hidden"
      style={{ isolation: 'isolate' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative" style={{ zIndex: 1 }}>
        <AnimatedSection>
          <SectionHeading
            icon={Sparkles}
            title={t.aiWorkflow.title}
            titleId="ai-workflow-title"
            subtitle={t.aiWorkflow.subtitle}
          />
        </AnimatedSection>

        <m.p
          initial={{ opacity: 0, translateY: 20 }}
          animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto text-center mb-6"
        >
          {t.aiWorkflow.philosophy}
        </m.p>

        <m.div
          initial={{ opacity: 0, translateY: 16 }}
          animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 16 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center mb-8 max-w-2xl mx-auto"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-3">
            {t.aiWorkflow.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 rounded-lg text-sm font-medium border border-primary/40 bg-primary/5 text-text"
              >
                {tool}
              </span>
            ))}
          </div>
          <p className="text-sm text-text-muted leading-relaxed">{t.aiWorkflow.toolsNote}</p>
        </m.div>

        <div className="text-center mb-8">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            aria-controls="ai-workflow-details"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            {expanded ? t.aiWorkflow.collapseLabel : t.aiWorkflow.expandLabel}
            <ChevronDown
              className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
          {!expanded && (
            <p className="text-xs text-text-muted mt-3 max-w-md mx-auto">{t.aiWorkflow.collapsedHint}</p>
          )}
        </div>

        {expanded && (
          <div id="ai-workflow-details">
            <div className="mb-12">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">
                {t.aiWorkflow.workflowTitle}
              </h3>
              <m.div
                initial={{ opacity: 0, translateY: 20 }}
                animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass bg-background/80 border border-border rounded-xl p-5 md:p-6 glow-hover max-w-4xl mx-auto"
              >
                <ul className="space-y-3 list-disc list-inside marker:text-primary">
                  {t.aiWorkflow.workflow.map((item) => (
                    <li key={item.step} className="text-sm text-text-secondary leading-relaxed">
                      <strong className="font-medium text-text">{item.step}</strong> — {item.role}.{' '}
                      {item.example}
                    </li>
                  ))}
                </ul>
              </m.div>
            </div>

            <div className="mb-12">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">
                {t.aiWorkflow.casesTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {caseColumns.map((column, columnIndex) => (
                  <m.div
                    key={column.title}
                    initial={{ opacity: 0, translateY: 20 }}
                    animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 + columnIndex * 0.08 }}
                    className="glass bg-background/80 border border-border rounded-xl p-5 md:p-6 glow-hover"
                  >
                    <h4 className="text-sm font-bold text-text mb-3">{column.title}</h4>
                    <ul className="space-y-2">
                      {column.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed"
                        >
                          <span className="text-primary mt-1.5 shrink-0" aria-hidden="true">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </m.div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4 text-center">
                {t.aiWorkflow.metricsTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {t.aiWorkflow.metrics.map((metric, index) => {
                  const Icon = METRIC_ICONS[index] ?? Clock
                  return (
                    <m.div
                      key={metric.label}
                      initial={{ opacity: 0, translateY: 20 }}
                      animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 20 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="glass bg-background-secondary/80 border border-border rounded-xl p-6 text-center"
                    >
                      <div className="inline-flex items-center justify-center text-primary mb-3">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <p className="text-sm text-text-secondary">{metric.label}</p>
                      {metric.description ? (
                        <p className="text-xs text-text-muted mt-2">{metric.description}</p>
                      ) : null}
                    </m.div>
                  )
                })}
              </div>
            </div>

            <m.div
              initial={{ opacity: 0, translateY: 20 }}
              animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center mt-8"
            >
              <p className="text-lg text-text-secondary mb-6">{t.aiWorkflow.cta.text}</p>
              <Button href="#contact" variant="primary" size="lg">
                {t.aiWorkflow.cta.button}
              </Button>
            </m.div>
          </div>
        )}
      </div>
    </section>
  )
}
