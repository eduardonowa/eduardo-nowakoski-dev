'use client'

import type React from 'react'
import { useI18n } from '@/components/providers/I18nProvider'
import { m } from 'framer-motion'
import { ArrowDown, Briefcase, Code } from 'lucide-react'
import { useMagnetic } from '@/hooks/useMagnetic'
import { TextReveal } from '@/components/ui/TextReveal'
import { Button } from '@/components/ui/Button'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useEffect, useState, useRef } from 'react'

const CODE_GRID_LINES = [
  'const component = () => {}',
  'export default function Page() {}',
  'useEffect(() => {}, [])',
  'const theme = useTheme()',
  '<Component />',
  'interface Props {}',
  'const styles = {}',
  'return <Layout />',
  'useState(false)',
  'const tokens = designSystem',
]

function HeroCodeGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [lines, setLines] = useState<string[]>([])

  useEffect(() => {
    setLines(
      Array.from({ length: 32 }, () =>
        CODE_GRID_LINES[Math.floor(Math.random() * CODE_GRID_LINES.length)]
      )
    )
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (containerRef.current) {
            containerRef.current.style.transform = `translate3d(0, ${-window.scrollY * 0.12}px, 0)`
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="hidden md:block pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-28 font-mono text-xs sm:text-sm select-none mask-gradient text-text-secondary dark:opacity-[0.06] opacity-[0.07]"
        style={{ filter: 'blur(0.25px)' }}
      >
        {lines.map((line, index) => (
          <span key={index} className="whitespace-nowrap">
            {line}
          </span>
        ))}
      </div>
    </div>
  )
}

function MagneticButton({
  href,
  variant,
  children,
}: Readonly<{
  href: string
  variant: 'primary' | 'outline'
  children: React.ReactNode
}>) {
  const magneticRef = useMagnetic({ strength: 0.2 })
  return (
    <Button
      ref={magneticRef as React.RefObject<HTMLAnchorElement>}
      href={href}
      variant={variant}
      className="group glow-hover"
    >
      {children}
    </Button>
  )
}

function RotatingKeywords() {
  const { t } = useI18n()
  const reducedMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const keywords = t.hero.keywords

  useEffect(() => {
    if (reducedMotion || keywords.length <= 1) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % keywords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [reducedMotion, keywords.length])

  const current = keywords[index] ?? keywords[0]

  if (reducedMotion) {
    return (
      <span className="text-accent-dark font-semibold">
        {keywords.join(' · ')}
      </span>
    )
  }

  return (
    <m.span
      key={current}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="inline-block text-accent-dark font-semibold min-w-[8ch]"
    >
      {current}
    </m.span>
  )
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
}

const nameVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export function Hero() {
  const { t } = useI18n()
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return (
      <section
        id="home"
        aria-labelledby="hero-title"
        className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <HeroCodeGrid />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-bold text-text mb-6">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-primary font-medium mb-4">{t.hero.greeting}</p>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-text-secondary mb-4 font-medium">
            {t.hero.subtitle}
          </h2>
          <p className="text-base md:text-lg text-text-muted mb-6">
            <RotatingKeywords />
          </p>
          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton href="#experience" variant="primary">
              <Briefcase className="w-5 h-5" aria-hidden="true" />
              {t.hero.ctaProjects}
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline">
              <Code className="w-5 h-5" aria-hidden="true" />
              {t.hero.ctaContact}
            </MagneticButton>
          </div>
          <div className="mt-16">
            <a href="#about" className="inline-block" aria-label={t.a11y.scrollDown}>
              <ArrowDown className="w-6 h-6 text-text-muted hover:text-primary transition-colors" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <HeroCodeGrid />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center">
          <m.div initial="visible" animate="visible" variants={containerVariants}>
            <m.h1
              id="hero-title"
              variants={nameVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-text mb-6"
            >
              <TextReveal splitBy="word">{t.hero.title}</TextReveal>
            </m.h1>

            <m.p variants={itemVariants} className="text-lg md:text-xl text-primary font-medium mb-4">
              {t.hero.greeting}
            </m.p>

            <m.h2
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl text-text-secondary mb-4 font-medium"
            >
              {t.hero.subtitle}
            </m.h2>

            <m.p variants={itemVariants} className="text-base md:text-lg text-text-muted mb-6">
              <RotatingKeywords />
            </m.p>
          </m.div>

          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          <m.div
            initial="visible"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <m.div variants={itemVariants}>
              <MagneticButton href="#experience" variant="primary">
                <Briefcase className="w-5 h-5" aria-hidden="true" />
                {t.hero.ctaProjects}
              </MagneticButton>
            </m.div>
            <m.div variants={itemVariants}>
              <MagneticButton href="#contact" variant="outline">
                <Code className="w-5 h-5" aria-hidden="true" />
                {t.hero.ctaContact}
              </MagneticButton>
            </m.div>
          </m.div>

          <m.div initial="visible" animate="visible" variants={containerVariants} className="mt-16">
            <m.div variants={itemVariants}>
              <m.a
                href="#about"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-block"
                aria-label={t.a11y.scrollDown}
              >
                <ArrowDown className="w-6 h-6 text-text-muted hover:text-primary transition-colors" aria-hidden="true" />
              </m.a>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  )
}
