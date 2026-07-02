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
    window.open = jest.fn()
  })

  it('should render copyright text', () => {
    renderFooter()

    expect(screen.getByText(/Eduardo Nowakoski/i)).toBeInTheDocument()
    expect(screen.getByText(/20\d{2}/)).toBeInTheDocument()
  })

  it('should not render stack credit line', () => {
    renderFooter()

    expect(screen.queryByText(/Next.js/i)).not.toBeInTheDocument()
  })

  it('should render Lighthouse button', () => {
    renderFooter()

    const lighthouseButton = screen.getByLabelText(/lighthouse|performance/i)
    expect(lighthouseButton).toBeInTheDocument()
    expect(lighthouseButton).toHaveAttribute('type', 'button')
  })

  it('should open PageSpeed Insights when Lighthouse button is clicked', () => {
    renderFooter()

    const lighthouseButton = screen.getByLabelText(/lighthouse|performance/i)
    fireEvent.click(lighthouseButton)

    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining('pagespeed.web.dev'),
      '_blank',
      'noopener,noreferrer'
    )
  })
})
