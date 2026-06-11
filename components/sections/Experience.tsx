'use client'

import { useI18n } from '@/components/providers/I18nProvider'
import { m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code } from 'lucide-react'
import { BrandIcon } from '@/components/ui/BrandIcon'
import { useCardTilt } from '@/hooks/useCardTilt'
import type { BrandId } from '@/lib/i18n/translations'

function ProjectCard({
  project,
  index,
  inView,
  clientLabel,
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
  }
  index: number
  inView: boolean
  clientLabel: string
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
      className="glass bg-background-secondary/80 border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 relative z-10 glow-hover h-full"
    >
      <div className="mb-4 flex items-center">
        <BrandIcon brand={project.brand} />
      </div>
      <h3 className="text-xl font-bold text-text mb-2">{project.title}</h3>
      <div className="space-y-2 text-sm text-text-secondary mb-4">
        <p>
          <span className="font-medium">{clientLabel}</span> {project.client}
        </p>
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
      <p className="text-sm text-text-muted leading-relaxed mb-3">{project.role}</p>
      {project.maintenance && (
        <p className="text-xs text-text-muted italic">{project.maintenance}</p>
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
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Code className="w-6 h-6" aria-hidden="true" />
            <h2 id="experience-title" className="text-3xl md:text-4xl font-bold text-text">
              {t.experience.projectsTitle}
            </h2>
          </div>
        </m.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              inView={inView}
              clientLabel={t.experience.clientLabel}
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
