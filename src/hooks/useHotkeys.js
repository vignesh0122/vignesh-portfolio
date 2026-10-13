import { useEffect } from 'react'

const EDITABLE = new Set(['INPUT', 'TEXTAREA', 'SELECT'])

/**
 * map: { key: handler }. Handlers are ignored inside editable fields or with modifiers,
 * except Escape which always fires.
 */
export function useHotkeys(map) {
  useEffect(() => {
    const onKey = (e) => {
      const handler = map[e.key]
      if (!handler) return
      if (e.key !== 'Escape') {
        if (e.metaKey || e.ctrlKey || e.altKey) return
        const t = e.target
        if (t && (EDITABLE.has(t.tagName) || t.isContentEditable)) return
      }
      handler(e)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [map])
}
