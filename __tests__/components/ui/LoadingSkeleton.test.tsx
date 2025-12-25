import { render, screen } from '@testing-library/react'
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}))

describe('LoadingSkeleton', () => {
  it('should render loading spinner', () => {
    const { container } = render(<LoadingSkeleton />)

    const spinner = container.querySelector('.border-4.border-primary')
    expect(spinner).toBeInTheDocument()
  })

  it('should render loading text', () => {
    render(<LoadingSkeleton />)

    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })

  it('should have fixed positioning', () => {
    const { container } = render(<LoadingSkeleton />)

    const wrapper = container.querySelector('.fixed.inset-0')
    expect(wrapper).toBeInTheDocument()
  })

  it('should have centered content', () => {
    const { container } = render(<LoadingSkeleton />)

    const centered = container.querySelector('.flex.items-center.justify-center')
    expect(centered).toBeInTheDocument()
  })

  it('should have high z-index', () => {
    const { container } = render(<LoadingSkeleton />)

    const wrapper = container.querySelector('.z-50')
    expect(wrapper).toBeInTheDocument()
  })
})


