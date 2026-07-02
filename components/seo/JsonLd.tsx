import { CONTACT } from '@/lib/constants/contact'

const siteUrl = CONTACT.siteUrl

export default function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Eduardo Lopes Nowakoski',
    jobTitle: 'Senior AEM & Front-End Engineer',
    url: siteUrl,
    email: CONTACT.email,
    sameAs: [CONTACT.linkedinUrl, CONTACT.githubUrl],
    knowsAbout: [
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
      'Performance Optimization',
      'Vivo',
      'Stellantis',
      'Enel',
      'Newfold Digital',
      'Domain',
      'Network Solutions',
      'HostGator',
      'Bluehost',
      'Web.com',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Eduardo Nowakoski Portfolio',
    url: siteUrl,
    inLanguage: ['en-US', 'pt-BR'],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
