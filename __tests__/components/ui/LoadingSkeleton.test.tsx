import { render, screen } from '@testing-library/react'
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'
import { I18nProvider } from '@/components/providers/I18nProvider'

// Mock framer-motion (strip motion-only props to avoid DOM warnings)
const motionProps = ['whileHover', 'whileTap', 'initial', 'animate', 'transition', 'variants', 'exit']
jest.mock('framer-motion', () => {
  const motionProps = ['whileHover', 'whileTap', 'initial', 'animate', 'transition', 'variants', 'exit']
  const createEl = (type: string) => ({ children, ...props }: any) => {
    const rest = { ...props }
    motionProps.forEach((p: string) => delete rest[p])
    return require('react').createElement(type, rest, children)
  }
  const motionElements = { div: createEl('div'), p: createEl('p') }
  return { motion: motionElements, m: motionElements }
})

describe('LoadingSkeleton', () => {
  const renderSkeleton = () =>
    render(
      <I18nProvider>
        <LoadingSkeleton />
      </I18nProvider>
    )

  it('should render loading spinner', () => {
    const { container } = renderSkeleton()

    const spinner = container.querySelector('.border-4.border-primary')
    expect(spinner).toBeInTheDocument()
  })

  it('should render loading text', () => {
    renderSkeleton()

    expect(screen.getByText(/Loading section|Carregando seção/i)).toBeInTheDocument()
  })

  it('should have fixed positioning', () => {
    const { container } = renderSkeleton()

    const wrapper = container.querySelector('.fixed.inset-0')
    expect(wrapper).toBeInTheDocument()
  })

  it('should have centered content', () => {
    const { container } = renderSkeleton()

    const centered = container.querySelector('.flex.items-center.justify-center')
    expect(centered).toBeInTheDocument()
  })

  it('should have high z-index', () => {
    const { container } = renderSkeleton()

    const wrapper = container.querySelector('.z-50')
    expect(wrapper).toBeInTheDocument()
  })
})



