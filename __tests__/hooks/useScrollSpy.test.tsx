import { renderHook, act } from '@testing-library/react'
import { useScrollSpy } from '@/hooks/useScrollSpy'

const sectionIds = ['home', 'about', 'contact']

function mockSection(id: string, documentTop: number, height = 400) {
  const element = document.createElement('section')
  element.id = id
  element.getBoundingClientRect = jest.fn(() => {
    const top = documentTop - window.scrollY
    return {
      top,
      bottom: top + height,
      left: 0,
      right: 0,
      width: 0,
      height,
      x: 0,
      y: top,
      toJson: () => ({}),
    }
  })
  document.body.appendChild(element)
  return element
}

async function flushScrollSpy() {
  await act(async () => {
    await new Promise((resolve) => requestAnimationFrame(resolve))
  })
}

describe('useScrollSpy', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    Object.defineProperty(window, 'innerHeight', { value: 800, writable: true, configurable: true })
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      value: 3000,
      writable: true,
      configurable: true,
    })
  })

  it('activates the last section when scrolled to the bottom', async () => {
    mockSection('home', 0)
    mockSection('about', 800)
    mockSection('contact', 2200)

    const { result } = renderHook(() => useScrollSpy(sectionIds))

    await act(async () => {
      window.scrollY = 2200
      window.dispatchEvent(new Event('scroll'))
    })
    await flushScrollSpy()

    expect(result.current.activeId).toBe('contact')
  })

  it('activates the section whose top has passed the probe line', async () => {
    mockSection('home', 0)
    mockSection('about', 800)
    mockSection('contact', 2200)

    const { result } = renderHook(() => useScrollSpy(sectionIds))

    await act(async () => {
      window.scrollY = 900
      window.dispatchEvent(new Event('scroll'))
    })
    await flushScrollSpy()

    expect(result.current.activeId).toBe('about')
  })

  it('keeps the pinned section active while scrolling', async () => {
    mockSection('home', 0)
    mockSection('about', 800)
    mockSection('contact', 2200)

    const { result } = renderHook(() => useScrollSpy(sectionIds))

    act(() => {
      result.current.pinSection('contact')
    })

    expect(result.current.activeId).toBe('contact')

    await act(async () => {
      window.scrollY = 400
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current.activeId).toBe('contact')
  })

  it('releases the pin after scrolling stops', async () => {
    jest.useFakeTimers()

    mockSection('home', 0)
    mockSection('about', 800)
    mockSection('contact', 2200)

    const { result } = renderHook(() => useScrollSpy(sectionIds))

    act(() => {
      result.current.pinSection('contact')
    })

    await act(async () => {
      window.scrollY = 900
      window.dispatchEvent(new Event('scroll'))
    })

    act(() => {
      jest.advanceTimersByTime(120)
    })

    expect(result.current.activeId).toBe('about')

    jest.useRealTimers()
  })
})
