'use client'

import { useI18n } from '@/components/providers/I18nProvider'
import { m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function About() {
  const { t } = useI18n()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="about"
      ref={ref}
      aria-labelledby="about-title"
      className="py-section section-surface relative z-10 content-auto"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <AnimatedSection>
          <SectionHeading icon={User} title={t.about.title} titleId="about-title" />
        </AnimatedSection>

        <div className="space-y-6">
          {t.about.content.map((paragraph, index) => (
            <m.p
              key={`paragraph-${index}`}
              initial={{ opacity: 0, translateX: -20 }}
              animate={inView ? { opacity: 1, translateX: 0 } : { opacity: 0, translateX: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-lg text-text-secondary leading-relaxed"
            >
              {paragraph}
            </m.p>
          ))}
        </div>
      </div>
    </section>
  )
}
