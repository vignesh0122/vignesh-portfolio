import { useCallback, useMemo, useState } from 'react'
import { HighlightContext } from './HighlightContext.js'

export function HighlightProvider({ children }) {
  const [hovered, setHovered] = useState(null)
  const [pinned, setPinned] = useState(null)

  const activeSkill = pinned ?? hovered

  const hover = useCallback((id) => setHovered(id), [])
  const unhover = useCallback(() => setHovered(null), [])
  const togglePin = useCallback((id) => setPinned((p) => (p === id ? null : id)), [])
  const clear = useCallback(() => {
    setPinned(null)
    setHovered(null)
  }, [])

  const value = useMemo(
    () => ({ activeSkill, pinned, hover, unhover, togglePin, clear }),
    [activeSkill, pinned, hover, unhover, togglePin, clear],
  )

  return <HighlightContext.Provider value={value}>{children}</HighlightContext.Provider>
}
