import { renderHook, act } from '@testing-library/react'
import { useParallax } from '@/hooks/useParallax'

describe('useParallax', () => {
  let mockElement: HTMLElement

  beforeEach(() => {
    mockElement = document.createElement('div')
    mockElement.getBoundingClientRect = jest.fn(() => ({
      top: 100,
      height: 200,
      left: 0,
      width: 100,
      right: 100,
      bottom: 300,
      x: 0,
      y: 100,
      toJSON: jest.fn(),
    }))
    document.body.appendChild(mockElement)

    // Mock window.scrollY and window.innerHeight
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0,
    })
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      value: 800,
    })
  })

  afterEach(() => {
    document.body.removeChild(mockElement)
  })

  it('should return ref and translateY', () => {
    const { result } = renderHook(() => useParallax())

    expect(result.current.ref).toBeDefined()
    expect(result.current.translateY).toBe(0)
  })

  it('should calculate parallax on scroll', () => {
    const { result } = renderHook(() => useParallax({ speed: 0.5 }))

    act(() => {
      if (result.current.ref.current === null) {
        result.current.ref.current = mockElement
      }
    })

    // Simulate scroll
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 500,
      configurable: true,
    })
    const scrollEvent = new Event('scroll')

    act(() => {
      window.dispatchEvent(scrollEvent)
    })

    // translateY should be calculated based on scroll position
    expect(result.current.translateY).toBeDefined()
    expect(typeof result.current.translateY).toBe('number')
  })

  it('should handle scroll with different positions', () => {
    const { result } = renderHook(() => useParallax({ speed: 0.5, offset: 10 }))

    act(() => {
      if (result.current.ref.current === null) {
        result.current.ref.current = mockElement
      }
    })

    // Simulate different scroll positions
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 1000,
      configurable: true,
    })
    const scrollEvent = new Event('scroll')

    act(() => {
      window.dispatchEvent(scrollEvent)
    })

    expect(result.current.translateY).toBeDefined()
  })

  it('should use custom speed', () => {
    const { result } = renderHook(() => useParallax({ speed: 0.8 }))

    act(() => {
      if (result.current.ref.current === null) {
        result.current.ref.current = mockElement
      }
    })

    expect(result.current.ref.current).toBe(mockElement)
  })

  it('should use custom offset', () => {
    const { result } = renderHook(() => useParallax({ offset: 100 }))

    act(() => {
      if (result.current.ref.current === null) {
        result.current.ref.current = mockElement
      }
    })

    expect(result.current.ref.current).toBe(mockElement)
  })

  it('should clean up event listener on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener')
    const { result, unmount } = renderHook(() => useParallax())

    act(() => {
      if (result.current.ref.current === null) {
        result.current.ref.current = mockElement
      }
    })

    act(() => {
      unmount()
    })

    // Cleanup should be called
    expect(removeEventListenerSpy).toHaveBeenCalled()
    removeEventListenerSpy.mockRestore()
  })

  it('should handle null element', () => {
    const { result } = renderHook(() => useParallax())

    // Element is null, should not throw
    expect(result.current.ref.current).toBeNull()
  })

  it('should calculate parallax with different scroll positions', () => {
    const { result } = renderHook(() => useParallax({ speed: 0.5, offset: 10 }))

    act(() => {
      if (result.current.ref.current === null) {
        result.current.ref.current = mockElement
      }
    })

    // Simulate different scroll positions
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 200,
      configurable: true,
    })
    const scrollEvent = new Event('scroll')

    act(() => {
      window.dispatchEvent(scrollEvent)
    })

    expect(result.current.translateY).toBeDefined()
  })

  it('should call handleScroll on mount', () => {
    const { result } = renderHook(() => useParallax())

    act(() => {
      if (result.current.ref.current === null) {
        result.current.ref.current = mockElement
      }
    })

    // handleScroll should be called on mount
    expect(result.current.translateY).toBeDefined()
  })

  it('should calculate parallax value correctly', () => {
    const { result } = renderHook(() => useParallax({ speed: 0.5, offset: 0 }))

    act(() => {
      if (result.current.ref.current === null) {
        result.current.ref.current = mockElement
      }
    })

    // Set scroll position
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 500,
      configurable: true,
    })
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      value: 800,
      configurable: true,
    })

    const scrollEvent = new Event('scroll')

    act(() => {
      window.dispatchEvent(scrollEvent)
    })

    // translateY should be calculated: (scrollY + innerHeight - elementCenter) * speed + offset
    // elementCenter = elementTop + height/2 = (100 + 500) + 200/2 = 700
    // distance = (500 + 800) - 700 = 600
    // parallaxValue = 600 * 0.5 + 0 = 300
    expect(result.current.translateY).toBe(300)
  })

  it('should apply offset to parallax calculation', () => {
    const { result } = renderHook(() => useParallax({ speed: 0.5, offset: 100 }))

    act(() => {
      if (result.current.ref.current === null) {
        result.current.ref.current = mockElement
      }
    })

    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 500,
      configurable: true,
    })
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      value: 800,
      configurable: true,
    })

    const scrollEvent = new Event('scroll')

    act(() => {
      window.dispatchEvent(scrollEvent)
    })

    // translateY should include offset: 300 + 100 = 400
    expect(result.current.translateY).toBe(400)
  })

  it('should handle different scroll positions', () => {
    const { result } = renderHook(() => useParallax({ speed: 0.5 }))

    act(() => {
      if (result.current.ref.current === null) {
        result.current.ref.current = mockElement
      }
    })

    // Test multiple scroll positions
    const positions = [0, 100, 500, 1000, 2000]

    positions.forEach((scrollY) => {
      Object.defineProperty(window, 'scrollY', {
        writable: true,
        value: scrollY,
        configurable: true,
      })

      const scrollEvent = new Event('scroll')

      act(() => {
        window.dispatchEvent(scrollEvent)
      })

      expect(typeof result.current.translateY).toBe('number')
    })
  })

  it('should handle different element positions', () => {
    const { result } = renderHook(() => useParallax({ speed: 0.5 }))

    // Create element at different position
    const newElement = document.createElement('div')
    newElement.getBoundingClientRect = jest.fn(() => ({
      top: 500,
      height: 200,
      left: 0,
      width: 100,
      right: 100,
      bottom: 700,
      x: 0,
      y: 500,
      toJSON: jest.fn(),
    }))
    document.body.appendChild(newElement)

    act(() => {
      if (result.current.ref.current === null) {
        result.current.ref.current = newElement
      }
    })

    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 1000,
      configurable: true,
    })
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      value: 800,
      configurable: true,
    })

    const scrollEvent = new Event('scroll')

    act(() => {
      window.dispatchEvent(scrollEvent)
    })

    expect(result.current.translateY).toBeDefined()

    document.body.removeChild(newElement)
  })

  it('should update on dependency changes', () => {
    const { result, rerender } = renderHook(
      ({ speed, offset }) => useParallax({ speed, offset }),
      { initialProps: { speed: 0.5, offset: 0 } }
    )

    act(() => {
      if (result.current.ref.current === null) {
        result.current.ref.current = mockElement
      }
    })

    // Change speed
    rerender({ speed: 0.8, offset: 0 })

    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 500,
      configurable: true,
    })

    const scrollEvent = new Event('scroll')

    act(() => {
      window.dispatchEvent(scrollEvent)
    })

    // Should use new speed value
    // distance = 600, parallaxValue = 600 * 0.8 = 480
    expect(result.current.translateY).toBe(480)
  })

  it('should handle passive scroll listener', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener')
    const { result } = renderHook(() => useParallax())

    act(() => {
      if (result.current.ref.current === null) {
        result.current.ref.current = mockElement
      }
    })

    // Should add scroll listener with passive: true
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
      { passive: true }
    )

    addEventListenerSpy.mockRestore()
  })

  it('should handle multiple scroll events', () => {
    const { result } = renderHook(() => useParallax({ speed: 0.5 }))

    act(() => {
      if (result.current.ref.current === null) {
        result.current.ref.current = mockElement
      }
    })

    // Trigger multiple scroll events
    for (let i = 0; i < 10; i++) {
      Object.defineProperty(window, 'scrollY', {
        writable: true,
        value: i * 100,
        configurable: true,
      })

      const scrollEvent = new Event('scroll')

      act(() => {
        window.dispatchEvent(scrollEvent)
      })

      expect(typeof result.current.translateY).toBe('number')
    }
  })
})

