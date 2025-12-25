import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { I18nProvider } from '@/components/providers/I18nProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  title: 'Eduardo Nowakoski | Senior Front-End & Full-Stack AEM Developer',
  description: 'Senior Front-End Developer and Full-Stack AEM Developer specialized in Vue.js, Angular, Adobe Experience Manager, and modern web applications.',
  keywords: ['Front-End Developer', 'AEM Developer', 'Vue.js', 'Angular', 'React', 'TypeScript', 'Full-Stack'],
  authors: [{ name: 'Eduardo Lopes Nowakoski' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    title: 'Eduardo Nowakoski | Senior Front-End & Full-Stack AEM Developer',
    description: 'Senior Front-End Developer and Full-Stack AEM Developer specialized in modern web applications.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.variable}>
        <ThemeProvider>
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

