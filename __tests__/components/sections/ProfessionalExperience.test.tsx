import { render, screen } from '@testing-library/react'
import { ProfessionalExperience } from '@/components/sections/ProfessionalExperience'
import { I18nProvider } from '@/components/providers/I18nProvider'
import { MotionProvider } from '@/components/providers/MotionProvider'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt, priority: _priority, ...props }: any) =>
    require('react').createElement('img', { alt, ...props }),
}))

const mockUseInView = jest.fn()
jest.mock('react-intersection-observer', () => ({
  useInView: () => mockUseInView(),
}))

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <I18nProvider>
      <MotionProvider>{ui}</MotionProvider>
    </I18nProvider>
  )
}

describe('ProfessionalExperience', () => {
  beforeEach(() => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: true,
    })
  })

  it('should render professional experience title', () => {
    renderWithProviders(<ProfessionalExperience />)
    expect(screen.getByText(/Histórico Profissional|Professional History/i)).toBeInTheDocument()
  })

  it('should render four companies including Newfold and Merkle', () => {
    renderWithProviders(<ProfessionalExperience />)
    expect(screen.getByRole('heading', { level: 3, name: 'Newfold Digital' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /Merkle/i })).toBeInTheDocument()
    expect(screen.getAllByText(/Compass/i).length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { level: 3, name: 'NTT Data' })).toBeInTheDocument()
  })

  it('should render company positions', () => {
    renderWithProviders(<ProfessionalExperience />)
    const positions = screen.getAllByText(/Front-End|Front End|Desenvolvedor Front-End/i)
    expect(positions.length).toBeGreaterThan(0)
  })

  it('should render client badges for Compass, NTT and Merkle', () => {
    renderWithProviders(<ProfessionalExperience />)
    expect(screen.getByText(/Cliente: Vivo|Client: Vivo/i)).toBeInTheDocument()
    expect(screen.getByText(/Cliente: Enel|Client: Enel/i)).toBeInTheDocument()
    expect(screen.getByText(/Cliente: Stellantis|Client: Stellantis/i)).toBeInTheDocument()
  })

  it('should render company periods', () => {
    renderWithProviders(<ProfessionalExperience />)
    expect(screen.getAllByText(/2026|2025|2022/i).length).toBeGreaterThan(0)
  })

  it('should render company activities as list items', () => {
    renderWithProviders(<ProfessionalExperience />)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems.length).toBeGreaterThan(0)
  })

  it('should render timeline line', () => {
    const { container } = renderWithProviders(<ProfessionalExperience />)
    const timelineLine = container.querySelector('.absolute.left-4')
    expect(timelineLine).toBeInTheDocument()
  })

  it('should handle inView false state', () => {
    mockUseInView.mockReturnValue({
      ref: jest.fn(),
      inView: false,
    })

    renderWithProviders(<ProfessionalExperience />)
    expect(screen.getByText(/Histórico Profissional|Professional History/i)).toBeInTheDocument()
  })
})
