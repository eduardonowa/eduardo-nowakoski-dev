import { render, screen } from '@testing-library/react'
import { Contact } from '@/components/sections/Contact'
import { I18nProvider } from '@/components/providers/I18nProvider'

// Mock react-intersection-observer
const mockUseInView = jest.fn()
jest.mock('react-intersection-observer', () => ({
  useInView: () => mockUseInView(),
}))

const renderContact = () => {
  return render(
    <I18nProvider>
      <Contact />
    </I18nProvider>
  )
}

describe('Contact', () => {
  beforeEach(() => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: true,
    })
  })

  it('should render contact title', () => {
    renderContact()

    expect(screen.getByText(/Entre em Contato|Get in Touch/i)).toBeInTheDocument()
  })

  it('should render contact methods', () => {
    renderContact()

    expect(screen.getByText(/Email/i)).toBeInTheDocument()
    expect(screen.getByText(/Phone|Telefone/i)).toBeInTheDocument()
    expect(screen.getByText(/LinkedIn/i)).toBeInTheDocument()
  })

  it('should have correct contact links', () => {
    renderContact()

    const emailLink = screen.getByText(/eduardo_nowa@hotmail.com/i)
    expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:eduardo_nowa@hotmail.com')

    // Phone and LinkedIn might be in different format, so check if links exist
    const links = screen.getAllByRole('link')
    const phoneLink = links.find(link => link.getAttribute('href')?.includes('wa.me'))
    const linkedinLink = links.find(link => link.getAttribute('href')?.includes('linkedin.com'))

    expect(phoneLink).toBeDefined()
    expect(linkedinLink).toBeDefined()
  })

  it('should have correct section id', () => {
    renderContact()

    const section = screen.getByText(/Entre em Contato|Get in Touch/i).closest('section')
    expect(section).toHaveAttribute('id', 'contact')
  })

  it('should handle inView false state', () => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: false,
    })

    renderContact()

    expect(screen.getByText(/Entre em Contato|Get in Touch/i)).toBeInTheDocument()
  })

  it('should add target and rel to external links', () => {
    renderContact()

    const links = screen.getAllByRole('link')
    const httpLinks = links.filter(link => {
      const href = link.getAttribute('href')
      return href && href.startsWith('http')
    })

    httpLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('should not add target and rel to mailto links', () => {
    renderContact()

    const emailLink = screen.getByText(/eduardo_nowa@hotmail.com/i).closest('a')
    expect(emailLink).not.toHaveAttribute('target')
    expect(emailLink).not.toHaveAttribute('rel')
  })

  it('should render CTA button', () => {
    renderContact()

    expect(screen.getByText(/Enviar Mensagem|Send Message/i)).toBeInTheDocument()
  })
})

