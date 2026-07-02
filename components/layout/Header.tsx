'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X, Github, Linkedin } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import { CONTACT } from '@/lib/constants/contact'
import { m, AnimatePresence } from 'framer-motion'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useScroll } from '@/components/providers/ScrollProvider'

type FlagIconProps = {
  locale: 'pt-BR' | 'en-US'
}

export function FlagIcon({ locale }: Readonly<FlagIconProps>) {
  const flagSrc = locale === 'pt-BR' ? '/flags/br.svg' : '/flags/us.svg'

  return (
    <Image
      src={flagSrc}
      alt=""
      aria-hidden
      width={24}
      height={18}
      unoptimized
      className="w-6 h-[1.125rem] object-cover rounded-sm"
    />
  )
}

const NAV_SECTION_IDS = [
  'home',
  'about',
  'professional-experience',
  'experience',
  'ai-workflow',
  'technologies',
  'contact',
] as const

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const { locale, setLocale, t } = useI18n()
  const { activeId: activeSection, pinSection } = useScrollSpy([...NAV_SECTION_IDS])
  const { scrollY } = useScroll()
  const scrolled = scrollY > 20

  const handleNavClick = (sectionId: string) => {
    pinSection(sectionId)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  // Match defaultTheme="dark" on SSR to avoid Sun/Moon hydration mismatch
  const isDark = !mounted || resolvedTheme === 'dark'

  const toggleLocale = () => {
    setLocale(locale === 'pt-BR' ? 'en-US' : 'pt-BR')
  }

  const navItems = [
    { id: 'home', label: t.nav.home, href: '#home' },
    { id: 'about', label: t.nav.about, href: '#about' },
    { id: 'professional-experience', label: t.nav.history, href: '#professional-experience' },
    { id: 'experience', label: t.nav.projects, href: '#experience' },
    { id: 'ai-workflow', label: t.nav.aiWorkflow, href: '#ai-workflow' },
    { id: 'technologies', label: t.nav.technologies, href: '#technologies' },
    { id: 'contact', label: t.nav.contact, href: '#contact' },
  ]

  return (
    <m.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? 'header-surface border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="hidden md:flex items-center gap-1 relative">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isActive ? 'text-primary' : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  {isActive && (
                    <m.span
                      layoutId="nav-pill"
                      aria-hidden="true"
                      className="absolute inset-0 bg-primary/10 rounded-lg"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-3 ml-auto md:ml-0">
            <a
              href={CONTACT.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-background-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href={CONTACT.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-background-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={toggleLocale}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-text-secondary hover:text-primary hover:bg-background-secondary transition-colors"
              aria-label={t.a11y.toggleLanguage}
            >
              <FlagIcon locale={locale} />
              <span className="text-sm font-medium">{locale === 'pt-BR' ? 'PT' : 'EN'}</span>
            </button>
            <button
              type="button"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-background-secondary transition-colors"
              aria-label={t.a11y.toggleTheme}
            >
              {isDark ? (
                <Sun className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Moon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-background-secondary transition-colors"
              aria-label={t.a11y.toggleMenu}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden pb-4 header-surface -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
            >
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => {
                      handleNavClick(item.id)
                      setIsMenuOpen(false)
                    }}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                    className={`py-2 text-sm font-medium transition-colors ${
                      activeSection === item.id ? 'text-primary' : 'text-text-secondary hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </nav>
    </m.header>
  )
}
