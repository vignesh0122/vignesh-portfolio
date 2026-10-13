import { useEffect, useRef, useState } from 'react'
import { scramble } from '../lib/scramble.js'
import { SCRAMBLE_MS } from '../lib/constants.js'

/** Animates text changes with a glyph scramble. Returns the string to render. */
export function useScramble(text, { enabled = true, duration = SCRAMBLE_MS, delay = 0 } = {}) {
  const [display, setDisplay] = useState(text)
  const prevRef = useRef(text)

  useEffect(() => {
    const from = prevRef.current
    prevRef.current = text
    if (!enabled || from === text) return undefined

    let raf = 0
    let start = 0
    const seed = Math.floor(Math.random() * 1000)
    const tick = (now) => {
      if (!start) start = now
      const p = Math.min(1, (now - start) / duration)
      setDisplay(scramble(from, text, p, seed))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    const timer = setTimeout(() => {
      raf = requestAnimationFrame(tick)
    }, delay)
    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(raf)
    }
  }, [text, enabled, duration, delay])

  return enabled ? display : text
}
