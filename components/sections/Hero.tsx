'use client'

import { useI18n } from '@/components/providers/I18nProvider'
import { motion } from 'framer-motion'
import { ArrowDown, Code, Briefcase } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import dynamic from 'next/dynamic'

const CodeGridBackground = dynamic(() => import('../background/CodeGridBackground').then(mod => ({ default: mod.CodeGridBackground })), {
  ssr: false,
})
import { useMagnetic } from '@/hooks/useMagnetic'
import { TextReveal } from '@/components/ui/TextReveal'

function MagneticButton({ href, className, children }: Readonly<{ href: string; className: string; children: React.ReactNode }>) {
  const magneticRef = useMagnetic({ strength: 0.2 })
  return (
    <a ref={magneticRef as any} href={href} className={className}>
      {children}
    </a>
  )
}

export function Hero() {
  const { t } = useI18n()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0,
      },
    },
  }

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, translateY: 20 },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.6,
        delay: 0.8, // Espera o nome aparecer primeiro
      },
    },
  }

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10"
    >
          <CodeGridBackground />
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.h1
            variants={nameVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-text mb-6"
          >
            <TextReveal splitBy="word">{t.hero.title}</TextReveal>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-primary font-medium mb-4"
          >
            {t.hero.greeting}
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-primary mb-8 font-medium"
          >
            {t.hero.subtitle}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton href="#experience" className="group px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl glow-hover">
              <Briefcase className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">{t.hero.ctaProjects}</span>
            </MagneticButton>
            <MagneticButton href="#contact" className="group px-8 py-4 border-2 border-primary text-primary bg-background rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 glow-hover">
              <Code className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              <span className="text-primary group-hover:text-white transition-colors font-semibold">{t.hero.ctaContact}</span>
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="inline-block"
              aria-label="Scroll down"
            >
              <ArrowDown className="w-6 h-6 text-text-muted hover:text-primary transition-colors" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

