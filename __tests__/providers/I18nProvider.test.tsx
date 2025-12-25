import { render, screen, act } from '@testing-library/react'
import { I18nProvider, useI18n } from '@/components/providers/I18nProvider'

// Componente de teste que usa o hook
function TestComponent() {
  const { locale, setLocale, t } = useI18n()
  return (
    <div>
      <div data-testid="locale">{locale}</div>
      <div data-testid="title">{t.hero.title}</div>
      <button onClick={() => setLocale(locale === 'pt-BR' ? 'en-US' : 'pt-BR')}>
        Toggle
      </button>
    </div>
  )
}

describe('I18nProvider', () => {
  beforeEach(() => {
    localStorage.clear()
    jest.clearAllMocks()
  })

  it('should provide default locale (pt-BR)', () => {
    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>
    )

    expect(screen.getByTestId('locale')).toHaveTextContent('pt-BR')
  })

  it('should load locale from localStorage', () => {
    localStorage.setItem('locale', 'en-US')

    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>
    )

    expect(screen.getByTestId('locale')).toHaveTextContent('en-US')
  })

  it('should change locale when setLocale is called', () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem')
    
    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>
    )

    const button = screen.getByText('Toggle')
    
    act(() => {
      button.click()
    })

    expect(screen.getByTestId('locale')).toHaveTextContent('en-US')
    expect(setItemSpy).toHaveBeenCalledWith('locale', 'en-US')
    
    setItemSpy.mockRestore()
  })

  it('should provide correct translations for pt-BR', () => {
    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>
    )

    expect(screen.getByTestId('title')).toHaveTextContent('Eduardo Nowakoski')
  })

  it('should throw error when useI18n is used outside provider', () => {
    // Suprime o erro do console para o teste
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => {
      render(<TestComponent />)
    }).toThrow('useI18n must be used within an I18nProvider')

    consoleError.mockRestore()
  })
})

