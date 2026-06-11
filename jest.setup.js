// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme: jest.fn(() => ({
    theme: 'dark',
    setTheme: jest.fn(),
    resolvedTheme: 'dark',
  })),
  ThemeProvider: ({ children }) => children,
}))

// Mock framer-motion: strip motion-only props to avoid React DOM warnings in tests
const MOTION_PROPS = [
  'whileHover', 'whileTap', 'whileFocus', 'whileInView',
  'initial', 'animate', 'exit', 'transition', 'variants', 'custom',
  'layout', 'layoutId', 'onAnimationStart', 'onAnimationComplete',
]
function createMotionComponent(type) {
  const Component = ({ children, ...props }) => {
    const rest = { ...props }
    MOTION_PROPS.forEach(p => delete rest[p])
    return require('react').createElement(type, rest, children)
  }
  Component.displayName = `motion.${type}`
  return Component
}
jest.mock('framer-motion', () => {
  const motionProxy = new Proxy(
    {},
    {
      get(_, prop) {
        return createMotionComponent(prop)
      },
    }
  )
  return {
    motion: motionProxy,
    m: motionProxy,
    AnimatePresence: ({ children }) => children,
    LazyMotion: ({ children }) => children,
    domAnimation: {},
    useScroll: () => ({ scrollY: { get: () => 0 }, scrollYProgress: { get: () => 0 } }),
    useTransform: () => 0,
  }
})

jest.mock('@/hooks/useReducedMotion', () => ({
  useReducedMotion: () => true,
}))

// Mock react-intersection-observer
jest.mock('react-intersection-observer', () => ({
  useInView: () => ({
    ref: jest.fn(),
    inView: true,
  }),
}))

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
global.localStorage = localStorageMock

// Mock scrollIntoView
Element.prototype.scrollIntoView = jest.fn()

