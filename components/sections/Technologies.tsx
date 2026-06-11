'use client'

import { useI18n } from '@/components/providers/I18nProvider'
import { m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2 } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const TECH_CATEGORIES = [
  {
    key: 'frontend' as const,
    span: 'md:col-span-2',
    core: true,
    items: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'GraphQL', 'RxJS'],
  },
  {
    key: 'cms' as const,
    span: '',
    core: false,
    items: ['AEM', 'Java', 'HTL', 'Sling Models'],
  },
  {
    key: 'state' as const,
    span: '',
    core: false,
    items: ['Redux', 'Zustand', 'Pinia', 'Vuex'],
  },
  {
    key: 'testing' as const,
    span: '',
    core: false,
    items: ['Jest', 'Cypress', 'Storybook'],
  },
  {
    key: 'devops' as const,
    span: 'md:col-span-2',
    core: false,
    items: [
      'Tailwind CSS',
      'SCSS',
      'Git',
      'GitFlow',
      'CI/CD',
      'Azure DevOps',
      'GitLab',
      'Microfrontends',
    ],
  },
]

export function Technologies() {
  const { t } = useI18n()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="technologies"
      ref={ref}
      aria-labelledby="technologies-title"
      className="py-section relative overflow-hidden content-auto"
      style={{ isolation: 'isolate' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative" style={{ zIndex: 1 }}>
        <m.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 30 }}
          transition={{ duration: 0.6 }}
          style={{ willChange: inView ? 'transform, opacity' : 'auto' }}
        >
          <SectionHeading
            icon={Code2}
            title={t.technologies.title}
            titleId="technologies-title"
            subtitle={t.technologies.subtitle}
          />
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {TECH_CATEGORIES.map((category, categoryIndex) => (
            <m.div
              key={category.key}
              initial={{ opacity: 0, translateY: 20 }}
              animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 20 }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.08 }}
              className={`glass bg-background/80 border border-border rounded-xl p-5 md:p-6 glow-hover ${category.span}`}
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">
                {t.technologies.categories[category.key]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((name) => (
                  <span
                    key={name}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                      category.core
                        ? 'border-primary/40 bg-primary/5 text-text'
                        : 'border-border bg-background-secondary/50 text-text-secondary'
                    }`}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
