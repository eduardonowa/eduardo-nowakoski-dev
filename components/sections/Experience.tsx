'use client'

import { useI18n } from '@/components/providers/I18nProvider'
import { m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, ExternalLink } from 'lucide-react'
import { BrandIcon } from '@/components/ui/BrandIcon'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useCardTilt } from '@/hooks/useCardTilt'
import type { BrandId } from '@/lib/i18n/translations'

function ProjectCard({
  project,
  index,
  inView,
  employerLabel,
  segmentLabel,
  typeLabel,
  stackLabel,
}: Readonly<{
  project: {
    title: string
    client: string
    employer: string
    segment: string
    type: string
    stack: string
    role: string
    brand: BrandId
    maintenance?: string
    links: Array<{ label: string; href: string }>
  }
  index: number
  inView: boolean
  employerLabel: string
  segmentLabel: string
  typeLabel: string
  stackLabel: string
}>) {
  const { ref, transform, onMouseMove, onMouseLeave } = useCardTilt()

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transform }}
      className="[transform-style:preserve-3d]"
    >
      <m.div
        initial={{ opacity: 0, translateY: 30 }}
        animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 30 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass bg-background-secondary/80 border border-border rounded-xl p-6 hover:shadow-md transition-shadow duration-300 relative z-10 glow-hover h-full flex flex-col"
      >
        <div className="mb-4 border-b border-border/40 pb-4">
          <BrandIcon brand={project.brand} size="lg" />
        </div>
        <h3 className="text-xl font-bold text-text mb-2">{project.title}</h3>
        <div className="space-y-2 text-sm text-text-secondary mb-4">
          <p>
            <span className="font-medium">{employerLabel}</span> {project.employer}
          </p>
          <p>
            <span className="font-medium">{segmentLabel}</span> {project.segment}
          </p>
          <p>
            <span className="font-medium">{typeLabel}</span> {project.type}
          </p>
          <p>
            <span className="font-medium">{stackLabel}</span> {project.stack}
          </p>
        </div>
        <p className="text-sm text-text-muted leading-relaxed mb-3 flex-1">{project.role}</p>
        {project.maintenance && (
          <p className="text-xs text-text-muted italic mb-4">{project.maintenance}</p>
        )}
        {project.links.length > 0 && (
          <div className="flex flex-col gap-2 pt-2 border-t border-border/40">
            {project.links.map((link) => {
              const isExternal = link.href.startsWith('http')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-light transition-colors"
                >
                  {link.label}
                  {isExternal && <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />}
                </a>
              )
            })}
          </div>
        )}
      </m.div>
    </div>
  )
}

export function Experience() {
  const { t } = useI18n()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    t.experience.projects.telecom,
    t.experience.projects.automotive,
    t.experience.projects.energy,
  ]

  return (
    <section
      id="experience"
      ref={ref}
      aria-labelledby="experience-title"
      className="py-section section-surface relative z-10 content-auto"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <AnimatedSection>
          <SectionHeading
            icon={Code}
            title={t.experience.projectsTitle}
            titleId="experience-title"
            className="mb-16"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              inView={inView}
              employerLabel={t.experience.employerLabel}
              segmentLabel={t.experience.segmentLabel}
              typeLabel={t.experience.typeLabel}
              stackLabel={t.experience.stackLabel}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
