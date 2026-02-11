'use client'

import { useI18n } from '@/components/providers/I18nProvider'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Layers, Zap } from 'lucide-react'

export function Experience() {
  const { t } = useI18n()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 'telecom',
      icon: Code,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      ...t.experience.projects.telecom,
    },
    {
      id: 'automotive',
      icon: Layers,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      ...t.experience.projects.automotive,
    },
    {
      id: 'energy',
      icon: Zap,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      ...t.experience.projects.energy,
    },
  ]

  return (
    <section
      id="experience"
      ref={ref}
      className="py-section bg-background-secondary/70 backdrop-blur-sm relative z-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Code className="w-6 h-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              {t.experience.projectsTitle}
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, translateY: 30 }}
                animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ translateY: -5 }}
                style={{ willChange: inView ? 'transform, opacity' : 'auto' }}
                className="glass bg-background-secondary/80 border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 relative z-10 glow-hover"
              >
                <div className={`w-12 h-12 ${project.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${project.color}`} />
                </div>
                <h3 className="text-xl font-bold text-text mb-2">{project.title}</h3>
                <div className="space-y-2 text-sm text-text-secondary mb-4">
                  <p>
                    <span className="font-medium">{t.experience.segmentLabel}</span> {project.segment}
                  </p>
                  <p>
                    <span className="font-medium">{t.experience.typeLabel}</span> {project.type}
                  </p>
                  <p>
                    <span className="font-medium">{t.experience.stackLabel}</span> {project.stack}
                  </p>
                </div>
                <p className="text-sm text-text-muted leading-relaxed mb-3">
                  {project.role}
                </p>
                {'maintenance' in project && (
                  <p className="text-xs text-text-muted italic">
                    {project.maintenance}
                  </p>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

