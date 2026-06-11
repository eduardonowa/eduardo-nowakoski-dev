const siteUrl = 'https://eduardonowakoski.dev'

export default function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Eduardo Lopes Nowakoski',
    jobTitle: 'Senior Front-End Engineer',
    url: siteUrl,
    email: 'eduardo_nowa@hotmail.com',
    sameAs: ['https://www.linkedin.com/in/eduardonowakoski/'],
    knowsAbout: [
      'React',
      'Next.js',
      'Vue.js',
      'Angular',
      'TypeScript',
      'Microfrontends',
      'Adobe Experience Manager',
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
    inLanguage: ['pt-BR', 'en-US'],
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
