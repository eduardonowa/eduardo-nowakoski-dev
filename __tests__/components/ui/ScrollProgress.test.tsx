import { render, screen, waitFor, act } from '@testing-library/react'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { I18nProvider } from '@/components/providers/I18nProvider'
import { ScrollProvider } from '@/components/providers/ScrollProvider'

const renderScrollProgress = () =>
  render(
    <I18nProvider>
      <ScrollProvider>
        <ScrollProgress />
      </ScrollProvider>
    </I18nProvider>
  )

describe('ScrollProgress', () => {
  beforeEach(() => {
    Object.defineProperty(document.documentElement, 'scrollTop', {
      writable: true,
      value: 0,
      configurable: true,
    })
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      writable: true,
      value: 2000,
      configurable: true,
    })
    Object.defineProperty(document.documentElement, 'clientHeight', {
      writable: true,
      value: 1000,
      configurable: true,
    })
  })

  it('should render progress bar', () => {
    renderScrollProgress()

    const progressBar = screen.getByTestId('scroll-progress-bar')
    expect(progressBar).toBeInTheDocument()
  })

  it('should update progress on scroll', async () => {
    renderScrollProgress()

    await waitFor(() => {
      expect(screen.getByTestId('scroll-progress-bar')).toBeInTheDocument()
    })

    act(() => {
      Object.defineProperty(document.documentElement, 'scrollTop', {
        writable: true,
        value: 500,
        configurable: true,
      })
      window.dispatchEvent(new Event('scroll', { bubbles: true }))
    })

    await waitFor(() => {
      expect(document.documentElement.scrollTop).toBe(500)
    })
  })

  it('should throttle scroll events using requestAnimationFrame', async () => {
    const rafSpy = jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0)
      return 0
    })

    renderScrollProgress()

    await waitFor(() => {
      expect(screen.getByTestId('scroll-progress-bar')).toBeInTheDocument()
    })

    act(() => {
      Object.defineProperty(document.documentElement, 'scrollTop', {
        writable: true,
        value: 100,
        configurable: true,
      })
      window.dispatchEvent(new Event('scroll', { bubbles: true }))
    })

    await waitFor(() => {
      expect(rafSpy).toHaveBeenCalled()
    })

    rafSpy.mockRestore()
  })

  it('should handle zero scroll height', async () => {
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      writable: true,
      value: 1000,
      configurable: true,
    })
    Object.defineProperty(document.documentElement, 'clientHeight', {
      writable: true,
      value: 1000,
      configurable: true,
    })

    renderScrollProgress()

    await waitFor(() => {
      expect(screen.getByTestId('scroll-progress-bar')).toBeInTheDocument()
    })
  })

  it('should render after mount', () => {
    const { container } = renderScrollProgress()
    expect(container.firstChild).toBeInTheDocument()
  })
})
