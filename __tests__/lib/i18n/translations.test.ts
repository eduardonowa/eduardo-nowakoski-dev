import { translations } from '@/lib/i18n/translations'

describe('Translations', () => {
  it('should have translations for pt-BR', () => {
    expect(translations['pt-BR']).toBeDefined()
    expect(translations['pt-BR'].hero.title).toBe('Eduardo Nowakoski')
    expect(translations['pt-BR'].nav.home).toBe('Início')
  })

  it('should have translations for en-US', () => {
    expect(translations['en-US']).toBeDefined()
    expect(translations['en-US'].hero.title).toBe('Eduardo Nowakoski')
    expect(translations['en-US'].nav.home).toBe('Home')
  })

  it('should have all required keys in pt-BR', () => {
    const ptBR = translations['pt-BR']

    expect(ptBR.nav).toBeDefined()
    expect(ptBR.hero).toBeDefined()
    expect(ptBR.about).toBeDefined()
    expect(ptBR.experience).toBeDefined()
    expect(ptBR.technologies).toBeDefined()
    expect(ptBR.contact).toBeDefined()
    expect(ptBR.footer).toBeDefined()
    expect(ptBR.a11y).toBeDefined()
    expect(ptBR.metrics).toBeDefined()
  })

  it('should have updated company keys with logos', () => {
    const ptBR = translations['pt-BR']
    const enUS = translations['en-US']

    expect(ptBR.experience.companies.newfold.logo).toBe('newfold')
    expect(ptBR.experience.companies.ntt.logo).toBe('ntt')
    expect(ptBR.experience.companies.merkle.logo).toBe('merkle')
    expect(ptBR.experience.companies.compass.logo).toBe('compass')
    expect(ptBR.experience.companies.compass.clientBrand).toBe('vivo')
    expect(ptBR.experience.companies.ntt.clientBrand).toBe('enel')
    expect(ptBR.experience.companies.merkle.clientBrand).toBe('stellantis')
    expect((ptBR.experience.companies as Record<string, unknown>).intern).toBeUndefined()
    expect((ptBR.experience.companies as Record<string, unknown>).dentsu).toBeUndefined()

    expect(enUS.experience.companies.newfold).toBeDefined()
    expect(enUS.experience.companies.merkle).toBeDefined()
  })

  it('should have brand projects', () => {
    expect(translations['pt-BR'].experience.projects.telecom.brand).toBe('vivo')
    expect(translations['pt-BR'].experience.projects.automotive.brand).toBe('stellantis')
    expect(translations['pt-BR'].experience.projects.energy.brand).toBe('enel')
  })

  it('should have brand and company asset paths', () => {
    const { BRAND_ASSETS, COMPANY_ASSETS } = require('@/lib/i18n/translations')

    expect(BRAND_ASSETS.vivo.src).toBe('/brands/vivo.svg')
    expect(BRAND_ASSETS.enel.src).toBe('/brands/enel.svg')
    expect(BRAND_ASSETS.stellantis.src).toBe('/brands/stellantis.svg')

    expect(COMPANY_ASSETS.newfold.src).toBe('/companies/newfold.svg')
    expect(COMPANY_ASSETS.ntt.src).toBe('/companies/ntt-data.svg')
    expect(COMPANY_ASSETS.merkle.src).toBe('/companies/dentsu.svg')
    expect(COMPANY_ASSETS.compass.src).toBe('/companies/compass-uol.svg')
  })

  it('should have consistent structure between locales', () => {
    const ptBR = translations['pt-BR']
    const enUS = translations['en-US']

    expect(Object.keys(ptBR.nav)).toEqual(Object.keys(enUS.nav))
    expect(Object.keys(ptBR.hero)).toEqual(Object.keys(enUS.hero))
    expect(Object.keys(ptBR.about)).toEqual(Object.keys(enUS.about))
    expect(Object.keys(ptBR.experience.companies)).toEqual(Object.keys(enUS.experience.companies))
    expect(Object.keys(ptBR.technologies.categories)).toEqual(Object.keys(enUS.technologies.categories))
  })
})
