'use client'

import ReactCountryFlag from 'react-country-flag'

type FlagIconProps = {
  locale: 'pt-BR' | 'en-US'
}
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import { motion, AnimatePresence } from 'framer-motion'

export function FlagIcon({ locale }: Readonly<FlagIconProps>) {
    const countryCode = locale === 'pt-BR' ? 'BR' : 'US'
    const ariaLabel = locale === 'pt-BR' ? 'Brasil' : 'United States'
  
    return (
      <ReactCountryFlag
        svg
        countryCode={countryCode}
        aria-label={ariaLabel}
        title={ariaLabel}
        style={{
          width: '1.5rem',
          height: '1.5rem',
        }}
      />
    )
  }

export function Header() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const { locale, setLocale, t } = useI18n()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLocale = () => {
    setLocale(locale === 'pt-BR' ? 'en-US' : 'pt-BR')
  }

  const navItems = [
    { id: 'home', label: t.nav.home, href: '#home' },
    { id: 'about', label: t.nav.about, href: '#about' },
    { id: 'experience', label: t.nav.experience, href: '#experience' },
    { id: 'technologies', label: t.nav.technologies, href: '#technologies' },
    { id: 'contact', label: t.nav.contact, href: '#contact' },
  ]

  if (!mounted) {
    return null
  }

  return (
    <motion.header
      initial={{ translateY: -100 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.3 }}
      style={{ willChange: 'transform' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-text-secondary hover:text-primary hover:bg-background-secondary transition-colors"
              aria-label="Toggle language"
            >
              <FlagIcon locale={locale} />
              <span className="text-sm font-medium">{locale === 'pt-BR' ? 'PT' : 'EN'}</span>
            </button>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-background-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-background-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden pb-4 bg-background/80 backdrop-blur-md -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
            >
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="py-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

