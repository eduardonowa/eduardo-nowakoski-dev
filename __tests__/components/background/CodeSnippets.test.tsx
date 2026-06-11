import { render, screen, waitFor, act } from '@testing-library/react'
import { CodeSnippets } from '@/components/background/CodeSnippets'

jest.mock('@/hooks/useReducedMotion', () => ({
  useReducedMotion: () => false,
}))

describe('CodeSnippets', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query: string) => ({
        matches: query.includes('max-width') ? false : query.includes('reduce') ? false : false,
        media: query,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      })),
    })

    Object.defineProperty(document, 'hidden', {
      writable: true,
      configurable: true,
      value: false,
    })
  })

  it('should not render immediately', () => {
    const { container } = render(<CodeSnippets />)
    expect(container.firstChild).toBeNull()
  })

  it('should render code snippets after delay on desktop', async () => {
    jest.useFakeTimers()

    render(<CodeSnippets />)

    act(() => {
      jest.advanceTimersByTime(600)
    })

    await waitFor(() => {
      expect(screen.getByText(/const developer/i)).toBeInTheDocument()
    })

    jest.useRealTimers()
  })

  it('should have aria-hidden on container', async () => {
    jest.useFakeTimers()

    const { container } = render(<CodeSnippets />)

    act(() => {
      jest.advanceTimersByTime(600)
    })

    await waitFor(() => {
      expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument()
    })

    jest.useRealTimers()
  })
})
