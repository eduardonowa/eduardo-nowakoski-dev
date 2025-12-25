import { useRef, useEffect } from 'react'

interface MagneticOptions {
  strength?: number
  threshold?: number
}

export function useMagnetic({ strength = 0.3, threshold = 50 }: MagneticOptions = {}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

      if (distance < threshold) {
        const moveX = distanceX * strength
        const moveY = distanceY * strength

        element.style.willChange = 'transform'
        element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`
        element.style.transition = 'transform 0.1s ease-out'
      }
    }

    const handleMouseLeave = () => {
      element.style.transform = 'translate3d(0, 0, 0)'
      element.style.transition = 'transform 0.3s ease-out'
      // Remove will-change após animação
      setTimeout(() => {
        if (element) {
          element.style.willChange = 'auto'
        }
      }, 300)
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength, threshold])

  return ref
}

