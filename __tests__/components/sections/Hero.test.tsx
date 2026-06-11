import { render, screen, waitFor } from '@testing-library/react'
import { Hero } from '@/components/sections/Hero'
import { I18nProvider } from '@/components/providers/I18nProvider'

const mockUseInView = jest.fn()
jest.mock('react-intersection-observer', () => ({
  useInView: () => mockUseInView(),
}))

const renderHero = () =>
  render(
    <I18nProvider>
      <Hero />
    </I18nProvider>
  )

describe('Hero', () => {
  beforeEach(() => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: true,
    })
  })

  it('should render hero title', async () => {
    renderHero()
    await new Promise((resolve) => setTimeout(resolve, 100))
    expect(screen.getByText(/Eduardo/i)).toBeInTheDocument()
    expect(screen.getByText(/Nowakoski/i)).toBeInTheDocument()
  })

  it('should render greeting text', () => {
    renderHero()
    expect(screen.getByText(/Olá|Hello/i)).toBeInTheDocument()
  })

  it('should render subtitle', () => {
    renderHero()
    expect(screen.getByText(/Desenvolvedor Front-End Senior|Senior Front-End Engineer/i)).toBeInTheDocument()
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
    expect(screen.getByLabelText(/Rolar para baixo|Scroll down/i)).toBeInTheDocument()
  })

  it('should render code grid background', async () => {
    const { container } = renderHero()
    await waitFor(() => {
      expect(container.querySelector('.mask-gradient')).toBeInTheDocument()
    })
  })

  it('should handle inView false state', () => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: false,
    })
    renderHero()
    expect(screen.getByText(/Eduardo/i)).toBeInTheDocument()
    expect(screen.getByText(/Nowakoski/i)).toBeInTheDocument()
  })
})
