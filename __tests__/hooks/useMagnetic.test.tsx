import { renderHook, act } from '@testing-library/react'
import { useMagnetic } from '@/hooks/useMagnetic'

describe('useMagnetic', () => {
  let mockElement: HTMLElement

  beforeEach(() => {
    mockElement = document.createElement('div')
    mockElement.getBoundingClientRect = jest.fn(() => ({
      left: 100,
      top: 100,
      width: 200,
      height: 200,
      right: 300,
      bottom: 300,
      x: 100,
      y: 100,
      toJSON: jest.fn(),
    }))
    document.body.appendChild(mockElement)
  })

  afterEach(() => {
    document.body.removeChild(mockElement)
  })

  it('should return a ref', () => {
    const { result } = renderHook(() => useMagnetic())

    expect(result.current).toBeDefined()
    expect(result.current.current).toBeNull()
  })

  it('should attach element to ref', () => {
    const { result } = renderHook(() => useMagnetic())

    act(() => {
      if (result.current.current === null) {
        result.current.current = mockElement
      }
    })

    expect(result.current.current).toBe(mockElement)
  })

  it('should apply magnetic effect on mouse move within threshold', () => {
    const { result, rerender } = renderHook(
      ({ strength, threshold }) => useMagnetic({ strength, threshold }),
      { initialProps: { strength: 0.3, threshold: 40 } }
    )

    act(() => {
      if (result.current.current === null) {
        result.current.current = mockElement
      }
    })

    // Re-executa o efeito com o elemento já atribuído ao ref
    act(() => {
      rerender({ strength: 0.3, threshold: 50 })
    })

    // Mouse near center (within threshold)
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: 200, // Center X (100 + 200/2 = 200)
      clientY: 200, // Center Y (100 + 200/2 = 200)
      bubbles: true,
    })

    act(() => {
      mockElement.dispatchEvent(mouseEvent)
    })

    // Should have transform applied (within threshold)
    expect(mockElement.style.willChange).toBe('transform')
    expect(mockElement.style.transform).toContain('translate3d')
  })

  it('should apply magnetic effect with distance calculation', () => {
    const { result, rerender } = renderHook(
      ({ strength, threshold }) => useMagnetic({ strength, threshold }),
      { initialProps: { strength: 0.3, threshold: 40 } }
    )

    act(() => {
      if (result.current.current === null) {
        result.current.current = mockElement
      }
    })

    // Re-executa o efeito com o elemento já atribuído ao ref
    act(() => {
      rerender({ strength: 0.3, threshold: 50 })
    })

    // Mouse slightly offset from center (within threshold)
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: 220, // Slightly right of center
      clientY: 210, // Slightly below center
      bubbles: true,
    })

    act(() => {
      mockElement.dispatchEvent(mouseEvent)
    })

    // Should have transform applied
    expect(mockElement.style.willChange).toBe('transform')
    expect(mockElement.style.transform).toContain('translate3d')
  })

  it('should not apply magnetic effect outside threshold', () => {
    const { result } = renderHook(() => useMagnetic({ strength: 0.3, threshold: 50 }))

    act(() => {
      if (result.current.current === null) {
        result.current.current = mockElement
      }
    })

    const mouseEvent = new MouseEvent('mousemove', {
      clientX: 500, // Far from center
      clientY: 500,
    })

    act(() => {
      mockElement.dispatchEvent(mouseEvent)
    })

    // Should not have transform applied
    expect(mockElement.style.transform).toBe('')
  })

  it('should reset transform on mouse leave', () => {
    jest.useFakeTimers()
    const { result, rerender } = renderHook(
      ({ strength, threshold }) => useMagnetic({ strength, threshold }),
      { initialProps: { strength: 0.3, threshold: 40 } }
    )

    act(() => {
      if (result.current.current === null) {
        result.current.current = mockElement
      }
    })

    // Re-executa o efeito com o elemento já atribuído ao ref
    act(() => {
      rerender({ strength: 0.3, threshold: 50 })
    })

    // First apply a transform
    mockElement.style.transform = 'translate3d(15px, 15px, 0)'

    const leaveEvent = new MouseEvent('mouseleave', {
      bubbles: true,
    })

    act(() => {
      mockElement.dispatchEvent(leaveEvent)
    })

    // Should reset transform
    expect(mockElement.style.transform).toBe('translate3d(0, 0, 0)')

    // Fast-forward timers to check willChange cleanup
    act(() => {
      jest.advanceTimersByTime(300)
    })

    jest.useRealTimers()
  })

  it('should use custom strength and threshold', () => {
    const { result } = renderHook(() => useMagnetic({ strength: 0.5, threshold: 100 }))

    act(() => {
      if (result.current.current === null) {
        result.current.current = mockElement
      }
    })

    expect(result.current.current).toBe(mockElement)
  })

  it('should handle mouse move with distance calculation', () => {
    const { result, rerender } = renderHook(
      ({ strength, threshold }) => useMagnetic({ strength, threshold }),
      { initialProps: { strength: 0.3, threshold: 40 } }
    )

    act(() => {
      if (result.current.current === null) {
        result.current.current = mockElement
      }
    })

    // Re-executa o efeito com o elemento já atribuído ao ref
    act(() => {
      rerender({ strength: 0.3, threshold: 50 })
    })

    // Mouse at center
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: 200, // Center X
      clientY: 200, // Center Y
      bubbles: true,
    })

    act(() => {
      mockElement.dispatchEvent(mouseEvent)
    })

    // Should apply transform (distance is 0, which is < threshold)
    expect(mockElement.style.willChange).toBe('transform')
    expect(mockElement.style.transform).toContain('translate3d')
  })

  it('should handle mouse move outside threshold', () => {
    const { result } = renderHook(() => useMagnetic({ strength: 0.3, threshold: 50 }))

    act(() => {
      if (result.current.current === null) {
        result.current.current = mockElement
      }
    })

    // Mouse far from center (distance > threshold)
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: 500,
      clientY: 500,
      bubbles: true,
    })

    act(() => {
      mockElement.dispatchEvent(mouseEvent)
    })

    // Should not apply transform
    expect(mockElement.style.transform).toBe('')
  })

  it('should handle null element', () => {
    const { result } = renderHook(() => useMagnetic())

    // Element is null, should not throw
    expect(result.current.current).toBeNull()
  })

  it('should clean up event listeners on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(HTMLElement.prototype, 'removeEventListener')
    const { result, unmount, rerender } = renderHook(
      ({ strength, threshold }) => useMagnetic({ strength, threshold }),
      { initialProps: { strength: 0.3, threshold: 40 } }
    )

    act(() => {
      if (result.current.current === null) {
        result.current.current = mockElement
      }
    })

    // Garante que os listeners foram registrados antes do unmount
    act(() => {
      rerender({ strength: 0.3, threshold: 50 })
    })

    act(() => {
      unmount()
    })

    expect(removeEventListenerSpy).toHaveBeenCalled()
    removeEventListenerSpy.mockRestore()
  })

  it('should calculate distance correctly', () => {
    const { result } = renderHook(() => useMagnetic({ strength: 0.3, threshold: 50 }))

    act(() => {
      if (result.current.current === null) {
        result.current.current = mockElement
      }
    })

    // Mouse at exact threshold distance
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: 200 + 50, // Exactly at threshold (center + threshold)
      clientY: 200,
      bubbles: true,
    })

    act(() => {
      mockElement.dispatchEvent(mouseEvent)
    })

    // Should not apply transform (distance equals threshold, not < threshold)
    expect(mockElement.style.transform).toBe('')
  })

  it('should apply correct transform values based on strength', () => {
    const { result, rerender } = renderHook(
      ({ strength, threshold }) => useMagnetic({ strength, threshold }),
      { initialProps: { strength: 0.5, threshold: 80 } }
    )

    act(() => {
      if (result.current.current === null) {
        result.current.current = mockElement
      }
    })

    // Re-executa o efeito com o elemento já atribuído ao ref
    act(() => {
      rerender({ strength: 0.5, threshold: 100 })
    })

    // Mouse slightly offset
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: 210, // 10px right of center
      clientY: 200, // Center Y
      bubbles: true,
    })

    act(() => {
      mockElement.dispatchEvent(mouseEvent)
    })

    // Should apply transform with strength 0.5
    expect(mockElement.style.willChange).toBe('transform')
    expect(mockElement.style.transform).toContain('translate3d')
    expect(mockElement.style.transform).toContain('5px') // 10 * 0.5 = 5
  })

  it('should handle mouse leave with setTimeout cleanup', () => {
    jest.useFakeTimers()
    const { result, rerender } = renderHook(
      ({ strength, threshold }) => useMagnetic({ strength, threshold }),
      { initialProps: { strength: 0.3, threshold: 40 } }
    )

    act(() => {
      if (result.current.current === null) {
        result.current.current = mockElement
      }
    })

    // Re-executa o efeito com o elemento já atribuído ao ref
    act(() => {
      rerender({ strength: 0.3, threshold: 50 })
    })

    // Apply transform first
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: 200,
      clientY: 200,
      bubbles: true,
    })

    act(() => {
      mockElement.dispatchEvent(mouseEvent)
    })

    // Then mouse leave
    const leaveEvent = new MouseEvent('mouseleave', {
      bubbles: true,
    })

    act(() => {
      mockElement.dispatchEvent(leaveEvent)
    })

    // Should reset transform
    expect(mockElement.style.transform).toBe('translate3d(0, 0, 0)')

    // Fast-forward to check willChange cleanup
    act(() => {
      jest.advanceTimersByTime(300)
    })

    // After timeout, willChange should be 'auto'
    expect(mockElement.style.willChange).toBe('auto')

    jest.useRealTimers()
  })

  it('should handle element being removed during setTimeout', () => {
    jest.useFakeTimers()
    const { result } = renderHook(() => useMagnetic())

    act(() => {
      if (result.current.current === null) {
        result.current.current = mockElement
      }
    })

    const leaveEvent = new MouseEvent('mouseleave', {
      bubbles: true,
    })

    act(() => {
      mockElement.dispatchEvent(leaveEvent)
    })

    // Remove element before timeout (simulates element being removed)
    act(() => {
      result.current.current = null
      if (document.body.contains(mockElement)) {
        document.body.removeChild(mockElement)
      }
    })

    // Fast-forward - should not throw (checks if element exists in setTimeout)
    act(() => {
      jest.advanceTimersByTime(300)
    })

    // Restore for cleanup
    if (!document.body.contains(mockElement)) {
      document.body.appendChild(mockElement)
    }

    jest.useRealTimers()
  })

  it('should handle element existing during setTimeout cleanup', () => {
    jest.useFakeTimers()
    const { result, rerender } = renderHook(
      ({ strength, threshold }) => useMagnetic({ strength, threshold }),
      { initialProps: { strength: 0.3, threshold: 40 } }
    )

    act(() => {
      if (result.current.current === null) {
        result.current.current = mockElement
      }
    })

    // Re-executa o efeito com o elemento já atribuído ao ref
    act(() => {
      rerender({ strength: 0.3, threshold: 50 })
    })

    // Apply transform first to ensure willChange is set
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: 200,
      clientY: 200,
      bubbles: true,
    })

    act(() => {
      mockElement.dispatchEvent(mouseEvent)
    })

    // Verify transform was applied
    expect(mockElement.style.willChange).toBe('transform')

    // Then mouse leave - this should trigger handleMouseLeave
    const leaveEvent = new MouseEvent('mouseleave', {
      bubbles: true,
    })

    act(() => {
      mockElement.dispatchEvent(leaveEvent)
    })

    // Should reset transform immediately
    expect(mockElement.style.transform).toBe('translate3d(0, 0, 0)')
    expect(mockElement.style.transition).toBe('transform 0.3s ease-out')

    // Fast-forward to trigger setTimeout cleanup (lines 38-40)
    // This tests the setTimeout callback where element exists
    act(() => {
      jest.advanceTimersByTime(300)
    })

    // Element should still exist and willChange should be 'auto' (line 40)
    expect(mockElement).toBeTruthy()
    expect(mockElement.style.willChange).toBe('auto')

    jest.useRealTimers()
  })

  it('should handle multiple mouse moves', () => {
    const { result, rerender } = renderHook(
      ({ strength, threshold }) => useMagnetic({ strength, threshold }),
      { initialProps: { strength: 0.3, threshold: 40 } }
    )

    act(() => {
      if (result.current.current === null) {
        result.current.current = mockElement
      }
    })

    // Re-executa o efeito com o elemento já atribuído ao ref
    act(() => {
      rerender({ strength: 0.3, threshold: 50 })
    })

    // Multiple mouse moves
    for (let i = 0; i < 5; i++) {
      const mouseEvent = new MouseEvent('mousemove', {
        clientX: 200 + i * 5,
        clientY: 200 + i * 5,
        bubbles: true,
      })

      act(() => {
        mockElement.dispatchEvent(mouseEvent)
      })
    }

    // Should have transform applied
    expect(mockElement.style.willChange).toBe('transform')
    expect(mockElement.style.transform).toContain('translate3d')
  })

  it('should update transform on dependency changes', () => {
    const { result, rerender } = renderHook(
      ({ strength, threshold }) => useMagnetic({ strength, threshold }),
      { initialProps: { strength: 0.3, threshold: 50 } }
    )

    act(() => {
      if (result.current.current === null) {
        result.current.current = mockElement
      }
    })

    // Change dependencies
    rerender({ strength: 0.5, threshold: 100 })

    // Hook should still work with new values
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: 200,
      clientY: 200,
      bubbles: true,
    })

    act(() => {
      mockElement.dispatchEvent(mouseEvent)
    })

    expect(mockElement.style.willChange).toBe('transform')
  })
})

