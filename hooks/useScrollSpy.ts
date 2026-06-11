'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const HEADER_OFFSET = 120
const SCROLL_END_DELAY_MS = 120

function getSectionDocumentTop(element: HTMLElement) {
  return element.getBoundingClientRect().top + window.scrollY
}

function resolveActiveSection(sectionIds: string[]) {
  const { scrollY, innerHeight } = window
  const docHeight = document.documentElement.scrollHeight
  const lastId = sectionIds[sectionIds.length - 1]

  if (lastId && scrollY + innerHeight >= docHeight - 4) {
    return lastId
  }

  const probe = scrollY + HEADER_OFFSET
  let current = sectionIds[0] ?? ''

  for (const id of sectionIds) {
    const element = document.getElementById(id)
    if (!element) continue

    if (getSectionDocumentTop(element) <= probe) {
      current = id
    }
  }

  return current
}

export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')
  const pinnedIdRef = useRef<string | null>(null)
  const scrollEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const releasePin = useCallback(() => {
    pinnedIdRef.current = null
    setActiveId(resolveActiveSection(sectionIds))
  }, [sectionIds])

  const pinSection = useCallback((id: string) => {
    pinnedIdRef.current = id
    setActiveId(id)
  }, [])

  useEffect(() => {
    if (sectionIds.length === 0) return

    let ticking = false

    const updateActive = () => {
      if (pinnedIdRef.current) {
        setActiveId(pinnedIdRef.current)
        ticking = false
        return
      }

      setActiveId(resolveActiveSection(sectionIds))
      ticking = false
    }

    const scheduleScrollEndRelease = () => {
      if (!pinnedIdRef.current) return

      if (scrollEndTimerRef.current) {
        clearTimeout(scrollEndTimerRef.current)
      }

      scrollEndTimerRef.current = setTimeout(releasePin, SCROLL_END_DELAY_MS)
    }

    const onScroll = () => {
      if (pinnedIdRef.current) {
        setActiveId(pinnedIdRef.current)
        scheduleScrollEndRelease()
        return
      }

      if (!ticking) {
        ticking = true
        requestAnimationFrame(updateActive)
      }
    }

    const onScrollEnd = () => {
      if (pinnedIdRef.current) {
        if (scrollEndTimerRef.current) {
          clearTimeout(scrollEndTimerRef.current)
          scrollEndTimerRef.current = null
        }
        releasePin()
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    window.addEventListener('scrollend', onScrollEnd)
    updateActive()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('scrollend', onScrollEnd)
      if (scrollEndTimerRef.current) {
        clearTimeout(scrollEndTimerRef.current)
      }
    }
  }, [sectionIds, releasePin])

  return { activeId, pinSection }
}
