import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { LensContext } from './LensContext.js'
import { LENSES, LENS_IDS, lensById } from '../data/lenses.js'
import { persistLens, readInitialLens, readLensFromUrl } from '../lib/lensStorage.js'
import { LENS_SWITCH_LOCK_MS } from '../lib/constants.js'

export function LensProvider({ children }) {
  const [lensId, setLensId] = useState(readInitialLens)
  const [transition, setTransition] = useState({ key: 0, origin: null })
  const [announcement, setAnnouncement] = useState('')
  const lastSwitchRef = useRef(0)
  const mountedRef = useRef(false)

  const setLens = useCallback((next, origin = null) => {
    if (!LENS_IDS.includes(next)) return
    const now = performance.now()
    if (now - lastSwitchRef.current < LENS_SWITCH_LOCK_MS) return
    setLensId((prev) => {
      if (prev === next) return prev
      lastSwitchRef.current = now
      // Flip the attribute before React commits so child effects read fresh CSS tokens.
      document.documentElement.dataset.lens = next
      setTransition((t) => ({ key: t.key + 1, origin }))
      return next
    })
  }, [])

  const cycle = useCallback(
    (dir = 1) => {
      const i = LENS_IDS.indexOf(lensId)
      setLens(LENS_IDS[(i + dir + LENS_IDS.length) % LENS_IDS.length])
    },
    [lensId, setLens],
  )

  useEffect(() => {
    persistLens(lensId)
    if (mountedRef.current) {
      setAnnouncement(`Viewing as ${lensById[lensId].label}`)
    }
    mountedRef.current = true
  }, [lensId])

  useEffect(() => {
    const onPop = () => {
      const fromUrl = readLensFromUrl()
      if (fromUrl) setLensId(fromUrl)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const value = useMemo(
    () => ({ lensId, lens: lensById[lensId], lenses: LENSES, setLens, cycle, transition }),
    [lensId, setLens, cycle, transition],
  )

  return (
    <LensContext.Provider value={value}>
      {children}
      <div className="visually-hidden" aria-live="polite" role="status">
        {announcement}
      </div>
    </LensContext.Provider>
  )
}
