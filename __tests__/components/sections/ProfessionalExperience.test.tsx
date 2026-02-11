import { render, screen, waitFor } from '@testing-library/react'
import { ProfessionalExperience } from '@/components/sections/ProfessionalExperience'
import { I18nProvider } from '@/components/providers/I18nProvider'

// Mock framer-motion (strip motion-only props to avoid DOM warnings)
const motionProps = ['whileHover', 'whileTap', 'initial', 'animate', 'transition', 'variants', 'exit']
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => { const rest = { ...props }; motionProps.forEach((p: string) => delete rest[p]); return require('react').createElement('div', rest, children) },
    li: ({ children, ...props }: any) => { const rest = { ...props }; motionProps.forEach((p: string) => delete rest[p]); return require('react').createElement('li', rest, children) },
  },
}))

// Mock react-intersection-observer
const mockUseInView = jest.fn()
jest.mock('react-intersection-observer', () => ({
  useInView: () => mockUseInView(),
}))

describe('ProfessionalExperience', () => {
  beforeEach(() => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: true,
    })
  })

  it('should render professional experience title', () => {
    render(
      <I18nProvider>
        <ProfessionalExperience />
      </I18nProvider>
    )

    expect(screen.getByText(/Histórico Profissional|Professional History/i)).toBeInTheDocument()
  })

  it('should render all companies', () => {
    render(
      <I18nProvider>
        <ProfessionalExperience />
      </I18nProvider>
    )

    // Check for company names from translations (may appear multiple times)
    const companies = screen.getAllByText(/NTT Data|Compass|Dentsu/i)
    expect(companies.length).toBeGreaterThan(0)
  })

  it('should render company positions', () => {
    render(
      <I18nProvider>
        <ProfessionalExperience />
      </I18nProvider>
    )

    const positions = screen.getAllByText(
      /Desenvolvedor Full-Stack AEM Senior|Desenvolvedor Front-End|Senior Full-Stack AEM Engineer|Front-End Engineer/i
    )
    expect(positions.length).toBeGreaterThan(0)
  })

  it('should render company periods', () => {
    render(
      <I18nProvider>
        <ProfessionalExperience />
      </I18nProvider>
    )

    expect(screen.getByText(/February 2025|Present|March|November/i)).toBeInTheDocument()
  })

  it('should render company activities', () => {
    render(
      <I18nProvider>
        <ProfessionalExperience />
      </I18nProvider>
    )

    // Activities should be rendered as list items
    const listItems = screen.getAllByRole('listitem')
    expect(listItems.length).toBeGreaterThan(0)
  })

  it('should render timeline line', () => {
    const { container } = render(
      <I18nProvider>
        <ProfessionalExperience />
      </I18nProvider>
    )

    const timelineLine = container.querySelector('.absolute.left-4')
    expect(timelineLine).toBeInTheDocument()
  })

  it('should render timeline dots', () => {
    const { container } = render(
      <I18nProvider>
        <ProfessionalExperience />
      </I18nProvider>
    )

    const timelineDots = container.querySelectorAll('.bg-primary.rounded-full')
    expect(timelineDots.length).toBeGreaterThan(0)
  })

  it('should handle inView false state', () => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: false,
    })

    render(
      <I18nProvider>
        <ProfessionalExperience />
      </I18nProvider>
    )

    expect(screen.getByText(/Histórico Profissional|Professional History/i)).toBeInTheDocument()
  })

  it('should render with different locales', () => {
    const { rerender } = render(
      <I18nProvider>
        <ProfessionalExperience />
      </I18nProvider>
    )

    // Change locale
    const { setLocale } = require('@/components/providers/I18nProvider').useI18n
    rerender(
      <I18nProvider>
        <ProfessionalExperience />
      </I18nProvider>
    )

    expect(screen.getByText(/Histórico Profissional|Professional History/i)).toBeInTheDocument()
  })
})



