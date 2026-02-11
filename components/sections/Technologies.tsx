'use client'

import { useI18n } from '@/components/providers/I18nProvider'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Code2,
  FileCode,
  Database,
  Layers,
  TestTube,
  Palette,
  GitBranch,
  Settings,
  Box,
} from 'lucide-react'

const technologies = [
  // Frameworks & libraries
  { name: 'React', icon: FileCode, color: 'text-blue-500' },
  { name: 'Next.js', icon: FileCode, color: 'text-gray-100' },
  { name: 'Vue.js', icon: FileCode, color: 'text-green-500' },
  { name: 'Angular', icon: FileCode, color: 'text-red-500' },
  // Language & core
  { name: 'TypeScript', icon: Code2, color: 'text-blue-600' },
  { name: 'JavaScript', icon: Code2, color: 'text-yellow-500' },
  // State management
  { name: 'Redux', icon: Database, color: 'text-purple-500' },
  { name: 'Zustand', icon: Database, color: 'text-amber-500' },
  { name: 'Pinia', icon: Database, color: 'text-yellow-600' },
  { name: 'Vuex', icon: Database, color: 'text-green-600' },
  // AEM & backend
  { name: 'AEM', icon: Box, color: 'text-orange-500' },
  { name: 'Java', icon: Code2, color: 'text-red-600' },
  { name: 'HTL', icon: FileCode, color: 'text-purple-500' },
  { name: 'Sling Models', icon: Layers, color: 'text-indigo-500' },
  // Styling
  { name: 'Tailwind CSS', icon: Palette, color: 'text-cyan-600' },
  { name: 'SCSS', icon: Palette, color: 'text-pink-600' },
  // Testing
  { name: 'Jest', icon: TestTube, color: 'text-red-500' },
  { name: 'Cypress', icon: TestTube, color: 'text-cyan-500' },
  // Tooling & practices
  { name: 'Storybook', icon: FileCode, color: 'text-pink-500' },
  { name: 'Git', icon: GitBranch, color: 'text-orange-600' },
  { name: 'GitFlow', icon: GitBranch, color: 'text-blue-500' },
  { name: 'CI/CD', icon: Settings, color: 'text-gray-500' },
  { name: 'Azure DevOps', icon: Settings, color: 'text-blue-700' },
  { name: 'GitLab', icon: GitBranch, color: 'text-orange-500' },
  { name: 'Microfrontends', icon: Layers, color: 'text-purple-600' },
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
      className="py-section relative overflow-hidden"
      style={{ isolation: 'isolate' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 30 }}
          transition={{ duration: 0.6 }}
          style={{ willChange: inView ? 'transform, opacity' : 'auto' }}
          className="text-center mb-12"
        >
          <div className="flex items-start gap-1 text-primary mb-4 justify-center md:inline-flex md:items-center md:gap-2">
            <Code2 className="w-6 h-6 flex-shrink-0 mt-1 md:mt-0" />
            <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight inline-block max-w-[50%] sm:max-w-none">
              {t.technologies.title}
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {t.technologies.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8, translateY: 20 }}
                animate={inView ? { opacity: 1, scale: 1, translateY: 0 } : { opacity: 0, scale: 0.8, translateY: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, translateY: -5 }}
                style={{ willChange: inView ? 'transform, opacity' : 'auto', zIndex: 10 }}
                className="glass bg-background/80 border border-border rounded-xl p-4 md:p-6 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-all duration-300 group cursor-default relative glow-hover"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 ${tech.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-full h-full" />
                </div>
                <p className="text-xs md:text-sm font-medium text-text text-center">
                  {tech.name}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
