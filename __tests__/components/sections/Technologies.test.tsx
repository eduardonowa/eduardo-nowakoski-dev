import { render, screen } from '@testing-library/react'
import { Technologies } from '@/components/sections/Technologies'
import { I18nProvider } from '@/components/providers/I18nProvider'

// Mock react-intersection-observer
const mockUseInView = jest.fn()
jest.mock('react-intersection-observer', () => ({
  useInView: () => mockUseInView(),
}))

const renderTechnologies = () => {
  return render(
    <I18nProvider>
      <Technologies />
    </I18nProvider>
  )
}

describe('Technologies', () => {
  beforeEach(() => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: true,
    })
  })

  it('should render technologies title', () => {
    renderTechnologies()

    expect(screen.getByText(/Tecnologias|Technologies/i)).toBeInTheDocument()
  })

  it('should render technologies subtitle', () => {
    renderTechnologies()

    expect(screen.getByText(/Stack técnico|Technical stack/i)).toBeInTheDocument()
  })

  it('should render technology items', () => {
    renderTechnologies()

    expect(screen.getByText(/Vue.js/i)).toBeInTheDocument()
    expect(screen.getByText(/Angular/i)).toBeInTheDocument()
    expect(screen.getByText(/React/i)).toBeInTheDocument()
    expect(screen.getByText(/TypeScript/i)).toBeInTheDocument()
  })

  it('should have correct section id', () => {
    renderTechnologies()

    const section = screen.getByText(/Tecnologias|Technologies/i).closest('section')
    expect(section).toHaveAttribute('id', 'technologies')
  })

  it('should handle inView false state', () => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: false,
    })

    renderTechnologies()

    expect(screen.getByText(/Tecnologias|Technologies/i)).toBeInTheDocument()
  })

  it('should render all technology cards', () => {
    renderTechnologies()

    // Check for multiple technologies
    const technologies = [
      'Vue.js',
      'Angular',
      'React',
      'TypeScript',
      'JavaScript',
      'AEM',
      'Java',
      'Jest',
      'Cypress',
    ]

    technologies.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument()
    })
  })
})

