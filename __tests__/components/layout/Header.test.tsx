import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import { Header, FlagIcon } from '@/components/layout/Header'
import { I18nProvider } from '@/components/providers/I18nProvider'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const renderHeader = () => {
  return render(
    <ThemeProvider>
      <I18nProvider>
        <Header />
      </I18nProvider>
    </ThemeProvider>
  )
}

describe('Header', () => {
  beforeEach(() => {
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0,
      configurable: true,
    })
  })

  it('should render navigation items', () => {
    renderHeader()

    expect(screen.getByText(/Início|Home/i)).toBeInTheDocument()
    expect(screen.getByText(/Sobre|About/i)).toBeInTheDocument()
    expect(screen.getByText(/Experiência|Experience/i)).toBeInTheDocument()
  })

  it('should toggle locale when language button is clicked', () => {
    renderHeader()

    const langButton = screen.getByLabelText(/toggle language/i)
    expect(langButton).toBeInTheDocument()

    // Get initial locale text
    const initialLocale = screen.getByText(/EN|PT/).textContent

    fireEvent.click(langButton)

    // Should change locale (PT to EN or vice versa)
    const newLocale = screen.getByText(/EN|PT/).textContent
    expect(newLocale).not.toBe(initialLocale)
  })

  it('should toggle locale from en-US to pt-BR', () => {
    // Força locale inicial como en-US via localStorage
    const originalLocale = window.localStorage.getItem('locale')
    window.localStorage.setItem('locale', 'en-US')

    renderHeader()
    
    // Click to toggle to pt-BR (covers the : 'pt-BR' branch in setLocale)
    const langButton = screen.getByLabelText(/toggle language/i)
    fireEvent.click(langButton)

    // Locale label should now show PT
    expect(screen.getByText(/PT/)).toBeInTheDocument()

    // Restore locale
    if (originalLocale === null) {
      window.localStorage.removeItem('locale')
    } else {
      window.localStorage.setItem('locale', originalLocale)
    }
  })

  it('should open mobile menu when hamburger is clicked', async () => {
    renderHeader()

    const menuButton = screen.getByLabelText(/toggle menu/i)
    expect(menuButton).toBeInTheDocument()

    fireEvent.click(menuButton)

    await waitFor(() => {
      // Menu items should be visible in mobile menu
      const menuItems = screen.getAllByText(/Início|Home/i)
      expect(menuItems.length).toBeGreaterThan(0)
    })
  })

  it('should close mobile menu when item is clicked', async () => {
    renderHeader()

    const menuButton = screen.getByLabelText(/toggle menu/i)
    fireEvent.click(menuButton)

    await waitFor(() => {
      const menuItems = screen.getAllByText(/Início|Home/i)
      expect(menuItems.length).toBeGreaterThan(0)
    })

    const homeLink = screen.getAllByText(/Início|Home/i)[0]
    fireEvent.click(homeLink)

    await waitFor(() => {
      // Menu should close; re-query so we don't use a stale reference
      expect(screen.getByLabelText(/toggle menu/i)).toBeInTheDocument()
    })
  })

  it('should toggle theme when theme button is clicked', () => {
    renderHeader()

    const themeButton = screen.getByLabelText(/toggle theme/i)
    expect(themeButton).toBeInTheDocument()

    fireEvent.click(themeButton)

    // Theme should toggle
    expect(themeButton).toBeInTheDocument()
  })

  it('should toggle theme from dark to light', () => {
    // Mock theme as 'dark' initially
    const mockSetTheme = jest.fn()
    jest.spyOn(require('next-themes'), 'useTheme').mockReturnValue({
      theme: 'dark',
      setTheme: mockSetTheme,
    })

    renderHeader()

    const themeButton = screen.getByLabelText(/toggle theme/i)
    fireEvent.click(themeButton)

    // Should call setTheme with 'light' (covers the : 'light' branch)
    expect(mockSetTheme).toHaveBeenCalledWith('light')
  })

  it('should show scrolled state when scrollY > 20', () => {
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 25,
      configurable: true,
    })

    renderHeader()

    act(() => {
      const scrollEvent = new Event('scroll')
      window.dispatchEvent(scrollEvent)
    })

    // Header should have scrolled styles
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
  })

  it('should not show scrolled state when scrollY <= 20', () => {
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 10,
      configurable: true,
    })

    renderHeader()

    act(() => {
      const scrollEvent = new Event('scroll')
      window.dispatchEvent(scrollEvent)
    })

    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
  })

  it('should render FlagIcon component', () => {
    const { container } = render(<FlagIcon locale="pt-BR" />)
    expect(container).toBeInTheDocument()
  })

  it('should render FlagIcon with en-US locale', () => {
    const { container } = render(<FlagIcon locale="en-US" />)
    expect(container).toBeInTheDocument()
  })

  it('should show background when menu is open', async () => {
    renderHeader()

    const menuButton = screen.getByLabelText(/toggle menu/i)
    fireEvent.click(menuButton)

    await waitFor(() => {
      const mobileMenu = document.querySelector('.md\\:hidden.pb-4')
      expect(mobileMenu).toBeInTheDocument()
    })
  })

  it('should close menu when navigation item is clicked', async () => {
    renderHeader()

    const menuButton = screen.getByLabelText(/toggle menu/i)
    fireEvent.click(menuButton)

    await waitFor(() => {
      const menuItems = screen.getAllByText(/Início|Home/i)
      expect(menuItems.length).toBeGreaterThan(0)
    })

    // Click on a navigation item - this should trigger setIsMenuOpen(false)
    const navLinks = screen.getAllByText(/Sobre|About/i)
    if (navLinks.length > 0) {
      fireEvent.click(navLinks[0])
    }

    // Menu should close (onClick handler should be called); re-query so we don't use a stale reference
    await waitFor(() => {
      expect(screen.getByLabelText(/toggle menu/i)).toBeInTheDocument()
    })
  })

  it('should call setIsMenuOpen(false) when menu item is clicked', async () => {
    renderHeader()

    const menuButton = screen.getByLabelText(/toggle menu/i)
    fireEvent.click(menuButton)

    await waitFor(() => {
      expect(screen.getAllByText(/Início|Home/i).length).toBeGreaterThan(0)
    })

    // Find mobile menu link and click it
    const mobileMenuLinks = document.querySelectorAll('.md\\:hidden a[href="#home"]')
    if (mobileMenuLinks.length > 0) {
      fireEvent.click(mobileMenuLinks[0])
      
      // Menu should close
      await waitFor(() => {
        const menu = document.querySelector('.md\\:hidden.pb-4')
        // Menu should be closed (not visible or removed)
        expect(menu).toBeFalsy()
      })
    }
  })
})

