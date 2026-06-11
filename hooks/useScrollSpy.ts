'use client'

import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    let ticking = false

    const updateActive = () => {
      const scrollY = window.scrollY + 120
      let current = sections[0]?.id ?? ''

      for (const section of sections) {
        if (section.offsetTop <= scrollY) {
          current = section.id
        }
      }

      setActiveId(current)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActive)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    updateActive()

    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds])

  return activeId
}
