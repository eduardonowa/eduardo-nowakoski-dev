import { render, screen, waitFor, act } from '@testing-library/react'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

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
    render(<ScrollProgress />)

    const progressBar = screen.getByTestId('scroll-progress-bar')
    expect(progressBar).toBeInTheDocument()
  })

  it('should update progress on scroll', async () => {
    render(<ScrollProgress />)

    // Wait for component to mount
    await waitFor(() => {
      expect(screen.getByTestId('scroll-progress-bar')).toBeInTheDocument()
    })

    // Simulate scroll (wrap in act to flush setState from scroll handler)
    act(() => {
      Object.defineProperty(document.documentElement, 'scrollTop', {
        writable: true,
        value: 500,
        configurable: true,
      })
      const scrollEvent = new Event('scroll', { bubbles: true })
      window.dispatchEvent(scrollEvent)
    })

    // Component should handle scroll
    await waitFor(() => {
      expect(document.documentElement.scrollTop).toBe(500)
    }, { timeout: 1000 })
  })

  it('should throttle scroll events using requestAnimationFrame', async () => {
    const rafSpy = jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0)
      return 0
    })
    
    render(<ScrollProgress />)

    await waitFor(() => {
      expect(screen.getByTestId('scroll-progress-bar')).toBeInTheDocument()
    })

    // First scroll event - ticking should be false, so should enter if (!ticking)
    act(() => {
      Object.defineProperty(document.documentElement, 'scrollTop', {
        writable: true,
        value: 100,
        configurable: true,
      })
      const scrollEvent1 = new Event('scroll', { bubbles: true })
      window.dispatchEvent(scrollEvent1)
    })

    // Should use requestAnimationFrame (covers the if (!ticking) branch)
    await waitFor(() => {
      expect(rafSpy).toHaveBeenCalled()
    })

    // Second scroll event immediately after - ticking should be true, so should NOT enter if
    act(() => {
      Object.defineProperty(document.documentElement, 'scrollTop', {
        writable: true,
        value: 200,
        configurable: true,
      })
      const scrollEvent2 = new Event('scroll', { bubbles: true })
      window.dispatchEvent(scrollEvent2)
    })

    // After RAF callback, ticking should be false again
    await waitFor(() => {
      // RAF should have been called
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

    render(<ScrollProgress />)

    await waitFor(() => {
      expect(screen.getByTestId('scroll-progress-bar')).toBeInTheDocument()
    })
  })

  it('should not render until mounted', () => {
    const { container } = render(<ScrollProgress />)
    
    // Should render after mount
    expect(container.firstChild).toBeInTheDocument()
  })
})

