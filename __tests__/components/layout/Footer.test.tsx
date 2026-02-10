import { render, screen, fireEvent } from '@testing-library/react'
import { Footer } from '@/components/layout/Footer'
import { I18nProvider } from '@/components/providers/I18nProvider'

const renderFooter = () => {
  return render(
    <I18nProvider>
      <Footer />
    </I18nProvider>
  )
}

describe('Footer', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: {
        hostname: 'localhost',
        href: 'http://localhost:3000',
      },
    })
    window.open = jest.fn()
  })

  it('should render copyright text', () => {
    renderFooter()

    expect(screen.getByText(/Eduardo Nowakoski/i)).toBeInTheDocument()
    expect(screen.getByText(/2025/i)).toBeInTheDocument()
  })

  it('should render "Made with" text', () => {
    renderFooter()

    expect(screen.getByText(/Built with|Desenvolvido com/i)).toBeInTheDocument()
    expect(screen.getByText(/Next.js/i)).toBeInTheDocument()
  })

  it('should render Lighthouse button', () => {
    renderFooter()

    const lighthouseButton = screen.getByLabelText(/lighthouse|performance/i)
    expect(lighthouseButton).toBeInTheDocument()
  })

  it('should show instructions in development when Lighthouse button is clicked', () => {
    window.alert = jest.fn()
    renderFooter()

    const lighthouseButton = screen.getByLabelText(/lighthouse|performance/i)
    fireEvent.click(lighthouseButton)

    expect(window.alert).toHaveBeenCalled()
  })

  it('should open PageSpeed Insights in production', () => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: {
        hostname: 'example.com',
        href: 'https://example.com',
      },
    })

    renderFooter()

    const lighthouseButton = screen.getByLabelText(/lighthouse|performance/i)
    fireEvent.click(lighthouseButton)

    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining('pagespeed.web.dev'),
      '_blank',
      'noopener,noreferrer'
    )
  })

  it('should handle window undefined in handleLighthouseClick', () => {
    renderFooter()

    const lighthouseButton = screen.getByLabelText(/lighthouse|performance/i)

    const originalWindow = globalThis.window
    // Simula `window` indefinido apenas durante o clique
    // @ts-ignore
    globalThis.window = undefined

    fireEvent.click(lighthouseButton)

    // Should not throw error
    expect(lighthouseButton).toBeInTheDocument()

    // Restore window
    globalThis.window = originalWindow
  })

  it('should show Portuguese instructions when locale is pt-BR', () => {
    window.alert = jest.fn()
    renderFooter()

    const lighthouseButton = screen.getByLabelText(/lighthouse|performance/i)
    fireEvent.click(lighthouseButton)

    expect(window.alert).toHaveBeenCalledWith(
      expect.stringContaining('Para abrir o Lighthouse')
    )
  })

  it('should show English instructions when locale is en-US', () => {
    const originalLocale = window.localStorage.getItem('locale')
    window.localStorage.setItem('locale', 'en-US')
    window.alert = jest.fn()

    renderFooter()

    const lighthouseButton = screen.getByLabelText(/lighthouse|performance/i)
    fireEvent.click(lighthouseButton)

    // Should show English instructions (covers the : 'To open Lighthouse...' branch)
    expect(window.alert).toHaveBeenCalledWith(
      expect.stringContaining('To open Lighthouse')
    )

    // Restore locale
    if (originalLocale === null) {
      window.localStorage.removeItem('locale')
    } else {
      window.localStorage.setItem('locale', originalLocale)
    }
  })

  it('should return early when globalThis.window is undefined', () => {
    renderFooter()

    const originalWindow = globalThis.window
    // Simula `window` indefinido apenas durante o clique
    // @ts-ignore
    globalThis.window = undefined

    const lighthouseButton = screen.getByLabelText(/lighthouse|performance/i)
    fireEvent.click(lighthouseButton)

    // Restore window
    globalThis.window = originalWindow
  })

  it('should handle production with 127.0.0.1 hostname', () => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: {
        hostname: '127.0.0.1',
        href: 'http://127.0.0.1:3000',
      },
    })

    window.alert = jest.fn()
    renderFooter()

    const lighthouseButton = screen.getByLabelText(/lighthouse|performance/i)
    fireEvent.click(lighthouseButton)

    // Should show alert (not production)
    expect(window.alert).toHaveBeenCalled()
  })
})

