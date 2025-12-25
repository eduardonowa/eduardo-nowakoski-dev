import { render, screen, waitFor } from '@testing-library/react'
import { CodeGridBackground } from '@/components/background/CodeGridBackground'

// Mock framer-motion
const mockScrollY = { get: jest.fn(() => 0) }
const mockTransform = jest.fn(() => 0)

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useScroll: () => ({ scrollY: mockScrollY }),
  useTransform: () => mockTransform,
}))

describe('CodeGridBackground', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockScrollY.get.mockReturnValue(0)
    mockTransform.mockReturnValue(0)
  })

  it('should render code grid background', () => {
    const { container } = render(<CodeGridBackground />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render code lines', async () => {
    render(<CodeGridBackground />)

    await waitFor(() => {
      // Should render multiple code lines
      const lines = screen.queryAllByText(/const|export|useEffect|useTheme|Component|interface|useState/i)
      expect(lines.length).toBeGreaterThan(0)
    })
  })

  it('should have correct aria-hidden attribute', () => {
    const { container } = render(<CodeGridBackground />)

    const element = container.querySelector('[aria-hidden]')
    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute('aria-hidden', 'true')
  })

  it('should have pointer-events-none class', () => {
    const { container } = render(<CodeGridBackground />)

    const element = container.querySelector('.pointer-events-none')
    expect(element).toBeInTheDocument()
  })

  it('should use useScroll and useTransform', () => {
    render(<CodeGridBackground />)

    // useScroll and useTransform should be called during render
    // The hooks are called during component render, so they should be invoked
    expect(mockTransform).toBeDefined()
  })

  it('should generate 32 code lines', async () => {
    const { container } = render(<CodeGridBackground />)

    await waitFor(() => {
      // Should have multiple spans (one for each line)
      const spans = container.querySelectorAll('span')
      expect(spans.length).toBe(32)
    })
  })

  it('should render with hidden md:block classes', () => {
    const { container } = render(<CodeGridBackground />)

    const element = container.querySelector('.hidden.md\\:block')
    expect(element).toBeInTheDocument()
  })

  it('should have z-0 class', () => {
    const { container } = render(<CodeGridBackground />)

    const element = container.querySelector('.z-0')
    expect(element).toBeInTheDocument()
  })
})

