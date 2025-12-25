'use client'

import { useI18n } from '@/components/providers/I18nProvider'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

export function ProfessionalExperience() {
  const { t } = useI18n()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const companies = [
    {
      id: 'ntt',
      icon: Briefcase,
      ...t.experience.companies.ntt,
    },
    {
      id: 'merkle',
      icon: Briefcase,
      ...t.experience.companies.merkle,
    },
    {
      id: 'compass',
      icon: Briefcase,
      ...t.experience.companies.compass,
    },
    {
      id: 'intern',
      icon: Briefcase,
      ...t.experience.companies.intern,
    },
  ]

  return (
    <section
      id="professional-experience"
      ref={ref}
      className="py-section relative"
      style={{ isolation: 'isolate' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 30 }}
          transition={{ duration: 0.6 }}
          style={{ willChange: inView ? 'transform, opacity' : 'auto' }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Briefcase className="w-6 h-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              {t.experience.professionalTitle}
            </h2>
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {companies.map((company, index) => {
              const Icon = company.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, translateX: isEven ? -50 : 50 }}
                  animate={inView ? { opacity: 1, translateX: 0 } : { opacity: 0, translateX: isEven ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  style={{ willChange: inView ? 'transform, opacity' : 'auto' }}
                  className={`relative flex items-start gap-6 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background-secondary transform md:-translate-x-1/2 z-10" />

                  {/* Content card */}
                  <motion.div
                    initial={{ opacity: 0, translateX: isEven ? -30 : 30 }}
                    animate={inView ? { opacity: 1, translateX: 0 } : { opacity: 0, translateX: isEven ? -30 : 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ translateY: -5 }}
                    style={{ willChange: inView ? 'transform, opacity' : 'auto', zIndex: 10 }}
                    className={`flex-1 glass bg-background/80 border border-border rounded-xl p-6 md:p-8 shadow-lg relative glow-hover ${
                      isEven ? 'md:mr-auto md:max-w-[45%]' : 'md:ml-auto md:max-w-[45%]'
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-text mb-1">
                          {company.company}
                        </h3>
                        <p className="text-sm font-medium text-primary mb-2">
                          {company.position}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-text-muted">
                          <Calendar className="w-4 h-4" />
                          <span>{company.period}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {company.activities.map((activity, actIndex) => (
                        <motion.li
                          key={actIndex}
                          initial={{ opacity: 0, translateX: -10 }}
                          animate={inView ? { opacity: 1, translateX: 0 } : { opacity: 0, translateX: -10 }}
                          transition={{ duration: 0.4, delay: index * 0.15 + actIndex * 0.05 }}
                          style={{ willChange: inView ? 'transform, opacity' : 'auto' }}
                          className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed"
                        >
                          <span className="text-primary mt-1.5">•</span>
                          <span>{activity}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

