import { render } from '@testing-library/react'
import JsonLd from '@/components/seo/JsonLd'

describe('JsonLd', () => {
  it('should render Person and WebSite structured data', () => {
    const { container } = render(<JsonLd />)
    const scripts = container.querySelectorAll('script[type="application/ld+json"]')

    expect(scripts).toHaveLength(2)

    const person = JSON.parse(scripts[0].textContent ?? '')
    const website = JSON.parse(scripts[1].textContent ?? '')

    expect(person['@type']).toBe('Person')
    expect(person.name).toBe('Eduardo Lopes Nowakoski')
    expect(person.knowsAbout).toEqual(expect.arrayContaining(['React', 'Newfold Digital', 'Vivo']))

    expect(website['@type']).toBe('WebSite')
    expect(website.url).toBe('https://eduardonowakoski.dev')
    expect(website.inLanguage).toEqual(['pt-BR', 'en-US'])
  })
})
