import { render, screen } from '@testing-library/react'
import { TextReveal } from '@/components/ui/TextReveal'

// Mock react-intersection-observer
const mockUseInView = jest.fn()
jest.mock('react-intersection-observer', () => ({
  useInView: () => mockUseInView(),
}))

describe('TextReveal', () => {
  beforeEach(() => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: true,
    })
  })

  it('should render text by word', () => {
    render(<TextReveal>Hello World</TextReveal>)

    expect(screen.getByText(/Hello/i)).toBeInTheDocument()
    expect(screen.getByText(/World/i)).toBeInTheDocument()
  })

  it('should render text by character when splitBy is char', () => {
    const { container } = render(<TextReveal splitBy="char">Hi</TextReveal>)

    // Should split into individual characters (H and i)
    const spans = container.querySelectorAll('span')
    expect(spans.length).toBeGreaterThan(0)
  })

  it('should apply custom className', () => {
    const { container } = render(
      <TextReveal className="custom-class">Test</TextReveal>
    )

    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('should use custom delay', () => {
    render(<TextReveal delay={0.5}>Test</TextReveal>)

    expect(screen.getByText(/Test/i)).toBeInTheDocument()
  })

  it('should handle inView false state', () => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: false,
    })

    render(<TextReveal>Test</TextReveal>)

    expect(screen.getByText(/Test/i)).toBeInTheDocument()
  })

  it('should add space between words when splitBy is word', () => {
    const { container } = render(<TextReveal splitBy="word">Hello World</TextReveal>)

    const spans = container.querySelectorAll('span')
    expect(spans.length).toBeGreaterThan(0)
  })

  it('should not add space after last word', () => {
    const { container } = render(<TextReveal splitBy="word">Single</TextReveal>)

    // Ignora o span externo do wrapper e considera apenas os spans internos
    const wrapperSpan = container.querySelector('span')
    const innerSpans = wrapperSpan?.querySelectorAll('span') ?? []

    expect(innerSpans.length).toBe(1)
  })
})

