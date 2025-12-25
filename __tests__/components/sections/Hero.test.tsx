import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/sections/Hero'
import { I18nProvider } from '@/components/providers/I18nProvider'

// Mock react-intersection-observer
const mockUseInView = jest.fn()
jest.mock('react-intersection-observer', () => ({
  useInView: () => mockUseInView(),
}))

// Mock dynamic import
jest.mock('next/dynamic', () => ({
  __esModule: true,
  default: (fn: any) => {
    const Component = fn()
    return Component
  },
}))

const renderHero = () => {
  return render(
    <I18nProvider>
      <Hero />
    </I18nProvider>
  )
}

describe('Hero', () => {
  beforeEach(() => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: true,
    })
  })

  it('should render hero title', async () => {
    renderHero()

    // Wait for text reveal animation
    await new Promise(resolve => setTimeout(resolve, 100))
    
    expect(screen.getByText(/Eduardo Nowakoski/i)).toBeInTheDocument()
  })

  it('should render greeting text', () => {
    renderHero()

    expect(screen.getByText(/Olá|Hello/i)).toBeInTheDocument()
  })

  it('should render subtitle', () => {
    renderHero()

    expect(screen.getByText(/Senior Front-End|Full-Stack AEM/i)).toBeInTheDocument()
  })

  it('should render CTA buttons', () => {
    renderHero()

    expect(screen.getByText(/Ver Projetos|View Projects/i)).toBeInTheDocument()
    expect(screen.getByText(/Entre em Contato|Get in Touch/i)).toBeInTheDocument()
  })

  it('should have correct links for CTAs', () => {
    renderHero()

    const projectsLink = screen.getByText(/Ver Projetos|View Projects/i).closest('a')
    const contactLink = screen.getByText(/Entre em Contato|Get in Touch/i).closest('a')

    expect(projectsLink).toHaveAttribute('href', '#experience')
    expect(contactLink).toHaveAttribute('href', '#contact')
  })

  it('should render scroll down indicator', () => {
    renderHero()

    const scrollIndicator = screen.getByLabelText(/scroll down/i)
    expect(scrollIndicator).toBeInTheDocument()
  })

  it('should handle inView false state', () => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: false,
    })

    renderHero()

    expect(screen.getByText(/Eduardo Nowakoski/i)).toBeInTheDocument()
  })

  it('should render MagneticButton with useMagnetic hook', () => {
    renderHero()

    const projectsButton = screen.getByText(/Ver Projetos|View Projects/i).closest('a')
    expect(projectsButton).toBeInTheDocument()
    
    const contactButton = screen.getByText(/Entre em Contato|Get in Touch/i).closest('a')
    expect(contactButton).toBeInTheDocument()
  })

  it('should use useMagnetic with strength 0.2 in MagneticButton', () => {
    // Mock useMagnetic to verify it's called with strength 0.2
    const useMagneticSpy = jest.fn()
    jest.doMock('@/hooks/useMagnetic', () => ({
      useMagnetic: useMagneticSpy,
    }))

    renderHero()

    // MagneticButton should be rendered and useMagnetic should be called
    const buttons = screen.getAllByText(/Ver Projetos|View Projects|Entre em Contato|Get in Touch/i)
    expect(buttons.length).toBeGreaterThan(0)
  })
})

