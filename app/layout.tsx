import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { I18nProvider } from '@/components/providers/I18nProvider'
import { MotionProvider } from '@/components/providers/MotionProvider'
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
const defaultTitle = 'Eduardo Nowakoski | Senior Front-End Engineer'
const defaultDescription =
  'Senior Front-End Engineer specialized in React, Next.js, Vue.js, Angular, TypeScript, microfrontends, and AEM integration. Enterprise web applications with measurable performance impact.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: '%s | Eduardo Nowakoski',
  },
  description: defaultDescription,
  keywords: [
    'Senior Front-End Engineer',
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
      'pt-BR': '/',
      'en-US': '/',
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Eduardo Nowakoski Portfolio',
    title: defaultTitle,
    description: defaultDescription,
    locale: 'pt_BR',
    alternateLocale: 'en_US',
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.variable}>
        <JsonLd />
        <ThemeProvider>
          <I18nProvider>
            <MotionProvider>
              <SkipLink />
              {children}
            </MotionProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
