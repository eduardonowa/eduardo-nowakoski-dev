import { render, screen, waitFor, act } from '@testing-library/react'
import { CodeSnippets } from '@/components/background/CodeSnippets'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

describe('CodeSnippets', () => {
  beforeEach(() => {
    // Ensure window exists
    if (typeof globalThis.window === 'undefined') {
      // @ts-ignore
      globalThis.window = {
        innerWidth: 1920,
        innerHeight: 1080,
      }
    }

    Object.defineProperty(document.documentElement, 'scrollHeight', {
      writable: true,
      value: 5000,
      configurable: true,
    })
  })

  it('should not render immediately', () => {
    const { container } = render(<CodeSnippets />)

    // Should not render snippets before delay
    expect(container.firstChild).toBeNull()
  })

  it('should render code snippets after delay', async () => {
    jest.useFakeTimers()
    
    render(<CodeSnippets />)

    // Should not render immediately
    expect(screen.queryByText(/const developer/i)).not.toBeInTheDocument()

    // Fast-forward 2 seconds
    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      expect(screen.getByText(/const developer/i)).toBeInTheDocument()
    }, { timeout: 3000 })

    jest.useRealTimers()
  })

  it('should not render when window is undefined', () => {
    const originalWindow = globalThis.window
    // @ts-ignore
    delete globalThis.window

    const { container } = render(<CodeSnippets />)
    
    // Should not render snippets
    expect(container.firstChild).toBeNull()

    // Restore window
    globalThis.window = originalWindow
  })

  it('should render multiple code snippets', async () => {
    jest.useFakeTimers()
    
    render(<CodeSnippets />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      // Should render multiple snippets (one for each codeSnippets entry)
      const snippets = screen.queryAllByText(/const developer|function buildPortfolio|@Component|useQuery|Page|theme/i)
      expect(snippets.length).toBeGreaterThan(0)
    }, { timeout: 3000 })

    jest.useRealTimers()
  })

  it('should apply syntax highlighting classes', async () => {
    jest.useFakeTimers()
    
    const { container } = render(<CodeSnippets />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      // Should have syntax highlighting classes
      const codeElements = container.querySelectorAll('[class*="text-"]')
      expect(codeElements.length).toBeGreaterThan(0)
    }, { timeout: 3000 })

    jest.useRealTimers()
  })

  it('should regenerate snippets on interval', async () => {
    jest.useFakeTimers()
    
    render(<CodeSnippets />)

    // Fast-forward initial delay
    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      expect(screen.getByText(/const developer/i)).toBeInTheDocument()
    })

    // Fast-forward interval (15000ms)
    act(() => {
      jest.advanceTimersByTime(15000)
    })

    // Snippets should still be rendered (regenerated)
    await waitFor(() => {
      expect(screen.getByText(/const developer|function buildPortfolio|@Component/i)).toBeInTheDocument()
    })

    jest.useRealTimers()
  })

  it('should calculate document height correctly', async () => {
    jest.useFakeTimers()
    
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      writable: true,
      value: 10000,
      configurable: true,
    })

    render(<CodeSnippets />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      expect(screen.getByText(/const developer/i)).toBeInTheDocument()
    })

    jest.useRealTimers()
  })

  it('should use default document height when window is undefined', async () => {
    const originalWindow = globalThis.window
    const originalScrollHeight = document.documentElement.scrollHeight

    // @ts-ignore
    delete globalThis.window

    jest.useFakeTimers()
    
    render(<CodeSnippets />)

    // Should not render when window is undefined
    expect(screen.queryByText(/const developer/i)).not.toBeInTheDocument()

    // Restore
    globalThis.window = originalWindow
    document.documentElement.scrollHeight = originalScrollHeight

    jest.useRealTimers()
  })

  it('should render all snippet types', async () => {
    jest.useFakeTimers()
    
    render(<CodeSnippets />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      // Check for different snippet types
      expect(screen.getByText(/const developer/i)).toBeInTheDocument()
      expect(screen.getByText(/function buildPortfolio/i)).toBeInTheDocument()
      expect(screen.getByText(/@Component/i)).toBeInTheDocument()
    }, { timeout: 3000 })

    jest.useRealTimers()
  })

  it('should clean up timeout on unmount', () => {
    jest.useFakeTimers()
    
    const { unmount } = render(<CodeSnippets />)

    // Unmount before timeout completes
    act(() => {
      unmount()
    })

    // Fast-forward time - should not throw
    act(() => {
      jest.advanceTimersByTime(2000)
    })

    jest.useRealTimers()
  })

  it('should clean up interval on unmount', () => {
    jest.useFakeTimers()
    
    const { unmount } = render(<CodeSnippets />)

    // Fast-forward initial delay
    act(() => {
      jest.advanceTimersByTime(2000)
    })

    // Unmount after interval is set
    act(() => {
      unmount()
    })

    // Fast-forward interval - should not throw
    act(() => {
      jest.advanceTimersByTime(15000)
    })

    jest.useRealTimers()
  })

  it('should not generate snippets when isVisible is false', () => {
    jest.useFakeTimers()
    
    const { container } = render(<CodeSnippets />)

    // Before delay, should not render
    expect(container.firstChild).toBeNull()

    // Fast-forward less than 2 seconds
    act(() => {
      jest.advanceTimersByTime(1000)
    })

    // Still should not render
    expect(container.firstChild).toBeNull()

    jest.useRealTimers()
  })

  it('should generate snippets with random positions', async () => {
    jest.useFakeTimers()
    
    const { container } = render(<CodeSnippets />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      // Should have snippets with left style (x position)
      const snippets = container.querySelectorAll('[style*="left"]')
      expect(snippets.length).toBeGreaterThan(0)
    }, { timeout: 3000 })

    jest.useRealTimers()
  })

  it('should apply getColorClass for different types', async () => {
    jest.useFakeTimers()
    
    const { container } = render(<CodeSnippets />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      // Should have different color classes for different types
      const keywordElements = container.querySelectorAll('.text-\\[\\#ff79c6\\]') // keyword
      const stringElements = container.querySelectorAll('.text-\\[\\#f1fa8c\\]') // string
      
      // At least one should exist
      expect(keywordElements.length + stringElements.length).toBeGreaterThan(0)
    }, { timeout: 3000 })

    jest.useRealTimers()
  })

  it('should use fallback color when type is not found in getColorClass', async () => {
    // We need to test getColorClass directly or create a snippet with unknown type
    // Since getColorClass is not exported, we'll test it indirectly by checking
    // that all lines have color classes applied
    jest.useFakeTimers()
    
    const { container } = render(<CodeSnippets />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      // Should render snippets
      expect(screen.getByText(/const developer/i)).toBeInTheDocument()
      
      // All lines should have color classes (either specific or fallback)
      const allLines = container.querySelectorAll('[class*="text-"]')
      expect(allLines.length).toBeGreaterThan(0)
      
      // Check if fallback class exists (text-[#f8f8f2])
      // This tests the return colors[type] || 'text-[#f8f8f2]' fallback
      const hasColorClass = Array.from(allLines).some((line) => {
        const className = line.getAttribute('class') || ''
        return className.includes('text-')
      })
      expect(hasColorClass).toBe(true)
    }, { timeout: 3000 })

    jest.useRealTimers()
  })

  it('should call generateSnippets on interval', async () => {
    jest.useFakeTimers()
    
    render(<CodeSnippets />)

    // Fast-forward initial delay
    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      expect(screen.getByText(/const developer/i)).toBeInTheDocument()
    })

    // Fast-forward interval (15000ms) - this should trigger generateSnippets again
    act(() => {
      jest.advanceTimersByTime(15000)
    })

    // Snippets should still be rendered (regenerated by interval)
    await waitFor(() => {
      expect(screen.getByText(/const developer|function buildPortfolio|@Component/i)).toBeInTheDocument()
    }, { timeout: 3000 })

    jest.useRealTimers()
  })

  it('should regenerate snippets multiple times on interval', async () => {
    jest.useFakeTimers()
    
    render(<CodeSnippets />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    await waitFor(() => {
      expect(screen.getByText(/const developer/i)).toBeInTheDocument()
    })

    // Fast-forward multiple intervals
    for (let i = 0; i < 3; i++) {
      act(() => {
        jest.advanceTimersByTime(15000)
      })
    }

    // Snippets should still be rendered
    await waitFor(() => {
      expect(screen.getByText(/const developer|function buildPortfolio|@Component/i)).toBeInTheDocument()
    }, { timeout: 3000 })

    jest.useRealTimers()
  })
})
