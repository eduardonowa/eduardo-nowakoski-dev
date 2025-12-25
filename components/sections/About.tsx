'use client'

import { useI18n } from '@/components/providers/I18nProvider'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User } from 'lucide-react'

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
      className="py-section bg-background-secondary/70 backdrop-blur-sm relative z-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 30 }}
          transition={{ duration: 0.6 }}
          style={{ willChange: inView ? 'transform, opacity' : 'auto' }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <User className="w-6 h-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              {t.about.title}
            </h2>
          </div>
        </motion.div>

        <div className="space-y-6">
          {t.about.content.map((paragraph, index) => (
            <motion.p
              key={`paragraph-${index}`}
              initial={{ opacity: 0, translateX: -20 }}
              animate={inView ? { opacity: 1, translateX: 0 } : { opacity: 0, translateX: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ willChange: inView ? 'transform, opacity' : 'auto' }}
              className="text-lg text-text-secondary leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}

