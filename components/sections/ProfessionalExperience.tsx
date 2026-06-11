'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useI18n } from '@/components/providers/I18nProvider'
import { m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar } from 'lucide-react'
import { CompanyIcon } from '@/components/ui/CompanyIcon'
import { BrandIcon } from '@/components/ui/BrandIcon'
import type { BrandId, CompanyId } from '@/lib/i18n/translations'

export function ProfessionalExperience() {
  const { t } = useI18n()
  const sectionRef = useRef<HTMLElement | null>(null)
  const [lineProgress, setLineProgress] = useState(0)
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const setSectionRef = useCallback(
    (node: HTMLElement | null) => {
      sectionRef.current = node
      inViewRef(node)
    },
    [inViewRef]
  )

  useEffect(() => {
    let ticking = false

    const updateProgress = () => {
      const el = sectionRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const total = viewportHeight + rect.height
      const progress = Math.min(1, Math.max(0, (viewportHeight - rect.top) / total))
      setLineProgress(progress)
    }

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateProgress()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const companies: Array<{
    id: string
    logo: CompanyId
    progression?: string
    clientBadge?: string
    clientBrand?: BrandId
    company: string
    period: string
    position: string
    activities: string[]
  }> = [
    { id: 'newfold', ...t.experience.companies.newfold },
    { id: 'ntt', ...t.experience.companies.ntt },
    { id: 'merkle', ...t.experience.companies.merkle },
    { id: 'compass', ...t.experience.companies.compass },
  ]

  return (
    <section
      id="professional-experience"
      ref={setSectionRef}
      aria-labelledby="professional-experience-title"
      className="py-section relative content-auto"
      style={{ isolation: 'isolate' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative" style={{ zIndex: 1 }}>
        <m.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Briefcase className="w-6 h-6" aria-hidden="true" />
            <h2 id="professional-experience-title" className="text-3xl md:text-4xl font-bold text-text">
              {t.experience.professionalTitle}
            </h2>
          </div>
        </m.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2 overflow-hidden">
            <m.div
              className="w-full h-full bg-primary origin-top"
              style={{ transform: `scaleY(${lineProgress})` }}
            />
          </div>

          <div className="space-y-12">
            {companies.map((company, index) => {
              const isEven = index % 2 === 0

              return (
                <m.div
                  key={company.id}
                  initial={{ opacity: 0, translateX: isEven ? -50 : 50 }}
                  animate={inView ? { opacity: 1, translateX: 0 } : { opacity: 0, translateX: isEven ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex items-start gap-6 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background-secondary transform md:-translate-x-1/2 z-10" />

                  <m.div
                    initial={{ opacity: 0, translateX: isEven ? -30 : 30 }}
                    animate={inView ? { opacity: 1, translateX: 0 } : { opacity: 0, translateX: isEven ? -30 : 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ translateY: -5 }}
                    className={`flex-1 glass bg-background/80 border border-border rounded-xl p-6 md:p-8 shadow-lg relative glow-hover ${
                      isEven ? 'md:mr-auto md:max-w-[45%]' : 'md:ml-auto md:max-w-[45%]'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex shrink-0 items-center justify-center w-24 md:w-28">
                        <CompanyIcon company={company.logo} priority={index === 0} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-text mb-1">{company.company}</h3>
                        <p className="text-sm font-medium text-primary mb-1">{company.position}</p>
                        {company.progression && (
                          <p className="text-xs text-text-muted mb-1">{company.progression}</p>
                        )}
                        {company.clientBadge && (
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            {company.clientBrand && (
                              <span className="inline-flex items-center shrink-0">
                                <BrandIcon brand={company.clientBrand} className="max-h-4 max-w-[3.5rem]" />
                              </span>
                            )}
                            <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                              {company.clientBadge}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-sm text-text-muted">
                          <Calendar className="w-4 h-4" aria-hidden="true" />
                          <span>{company.period}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {company.activities.map((activity, actIndex) => (
                        <m.li
                          key={actIndex}
                          initial={{ opacity: 0, translateX: -10 }}
                          animate={inView ? { opacity: 1, translateX: 0 } : { opacity: 0, translateX: -10 }}
                          transition={{ duration: 0.4, delay: index * 0.15 + actIndex * 0.05 }}
                          className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed"
                        >
                          <span className="text-primary mt-1.5" aria-hidden="true">
                            •
                          </span>
                          <span>{activity}</span>
                        </m.li>
                      ))}
                    </ul>
                  </m.div>
                </m.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
