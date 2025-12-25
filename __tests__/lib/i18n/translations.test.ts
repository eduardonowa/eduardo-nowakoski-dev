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
  })

  it('should have all required keys in en-US', () => {
    const enUS = translations['en-US']
    
    expect(enUS.nav).toBeDefined()
    expect(enUS.hero).toBeDefined()
    expect(enUS.about).toBeDefined()
    expect(enUS.experience).toBeDefined()
    expect(enUS.technologies).toBeDefined()
    expect(enUS.contact).toBeDefined()
    expect(enUS.footer).toBeDefined()
  })

  it('should have consistent structure between locales', () => {
    const ptBR = translations['pt-BR']
    const enUS = translations['en-US']

    expect(Object.keys(ptBR.nav)).toEqual(Object.keys(enUS.nav))
    expect(Object.keys(ptBR.hero)).toEqual(Object.keys(enUS.hero))
    expect(Object.keys(ptBR.about)).toEqual(Object.keys(enUS.about))
  })
})


