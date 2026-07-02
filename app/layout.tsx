import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { I18nProvider } from '@/components/providers/I18nProvider'
import { MotionProvider } from '@/components/providers/MotionProvider'
import { ScrollProvider } from '@/components/providers/ScrollProvider'
import { SkipLink } from '@/components/ui/SkipLink'
import JsonLd from '@/components/seo/JsonLd'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

const siteUrl = 'https://eduardonowakoski.dev'
const defaultTitle = 'Eduardo Nowakoski | Senior AEM & Front-End Engineer'
const defaultDescription =
  'Senior AEM Engineer specializing in Adobe Experience Manager, HTL, Sling Models, OSGi, and modern front-end integration with React, Next.js, Angular, and TypeScript. Enterprise CMS architecture with measurable performance impact.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: '%s | Eduardo Nowakoski',
  },
  description: defaultDescription,
  keywords: [
    'Senior AEM Engineer',
    'Senior Front-End Engineer',
    'Adobe Experience Manager',
    'AEM Cloud Service',
    'HTL',
    'Sling Models',
    'OSGi',
    'JCR',
    'Dispatcher',
    'React',
    'Next.js',
    'Vue.js',
    'Angular',
    'TypeScript',
    'Microfrontends',
    'AEM Integration',
    'Vivo',
    'Stellantis',
    'Enel',
    'Newfold Digital',
    'Domain',
    'Network Solutions',
    'HostGator',
    'Bluehost',
    'Web.com',
    'SSR',
    'SSG',
    'Design Systems',
  ],
  authors: [{ name: 'Eduardo Lopes Nowakoski', url: siteUrl }],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'pt-BR': '/',
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Eduardo Nowakoski Portfolio',
    title: defaultTitle,
    description: defaultDescription,
    locale: 'en_US',
    alternateLocale: 'pt_BR',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: defaultTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <JsonLd />
        <ThemeProvider>
          <I18nProvider>
            <MotionProvider>
              <ScrollProvider>
                <SkipLink />
                {children}
              </ScrollProvider>
            </MotionProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
