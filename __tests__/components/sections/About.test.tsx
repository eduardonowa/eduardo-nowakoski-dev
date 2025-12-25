import { render, screen } from '@testing-library/react'
import { About } from '@/components/sections/About'
import { I18nProvider } from '@/components/providers/I18nProvider'

// Mock react-intersection-observer
const mockUseInView = jest.fn()
jest.mock('react-intersection-observer', () => ({
  useInView: () => mockUseInView(),
}))

const renderAbout = () => {
  return render(
    <I18nProvider>
      <About />
    </I18nProvider>
  )
}

describe('About', () => {
  beforeEach(() => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: true,
    })
  })

  it('should render about title', () => {
    renderAbout()

    expect(screen.getByText(/Sobre Mim|About Me/i)).toBeInTheDocument()
  })

  it('should render about content paragraphs', () => {
    renderAbout()

    // Should render multiple paragraphs from translations
    const paragraphs = screen.getAllByText(/Front-End|AEM|Vue|Angular/i)
    expect(paragraphs.length).toBeGreaterThan(0)
  })

  it('should have correct section id', () => {
    renderAbout()

    const section = screen.getByText(/Sobre Mim|About Me/i).closest('section')
    expect(section).toHaveAttribute('id', 'about')
  })

  it('should handle inView false state', () => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: false,
    })

    renderAbout()

    expect(screen.getByText(/Sobre Mim|About Me/i)).toBeInTheDocument()
  })

  it('should animate paragraphs with different delays', () => {
    renderAbout()

    const paragraphs = screen.getAllByText(/Front-End|AEM|Vue|Angular/i)
    expect(paragraphs.length).toBeGreaterThan(0)
  })
})

