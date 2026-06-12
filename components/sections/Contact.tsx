'use client'

import { useI18n } from '@/components/providers/I18nProvider'
import { m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, Linkedin, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Contact() {
  const { t } = useI18n()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactMethods = [
    {
      icon: Mail,
      label: t.contact.email,
      value: 'eduardo_nowa@hotmail.com',
      href: 'mailto:eduardo_nowa@hotmail.com',
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: '+55 54 99648-5010',
      href: 'https://wa.me/5554996485010',
    },
    {
      icon: Linkedin,
      label: t.contact.linkedin,
      value: 'linkedin.com/in/eduardonowakoski',
      href: 'https://www.linkedin.com/in/eduardonowakoski/',
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      aria-labelledby="contact-title"
      className="py-section section-surface relative z-10 content-auto"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <m.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 30 }}
          transition={{ duration: 0.6 }}
          style={{ willChange: inView ? 'transform, opacity' : 'auto' }}
          className="text-center mb-12"
        >
          <h2 id="contact-title" className="text-3xl md:text-4xl font-bold text-text mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ willChange: inView ? 'transform, opacity' : 'auto' }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <m.a
                key={method.label}
                href={method.href}
                aria-label={`${method.label}: ${method.value}`}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ willChange: inView ? 'transform, opacity' : 'auto' }}
                className="glass bg-background-secondary/80 border border-border rounded-xl p-6 hover:shadow-md transition-all duration-300 text-center group relative z-10 glow-hover"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <p className="text-sm font-medium text-text-secondary mb-1">
                  {method.label}
                </p>
                <p className="text-sm text-text-muted break-all">
                  {method.value}
                </p>
              </m.a>
            )
          })}
        </m.div>

        <m.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={inView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ willChange: inView ? 'transform, opacity' : 'auto' }}
          className="text-center"
        >
          <Button href="mailto:eduardo_nowa@hotmail.com" className="glow-hover">
            <Send className="w-5 h-5" aria-hidden="true" />
            {t.contact.cta}
          </Button>
        </m.div>
      </div>
    </section>
  )
}
