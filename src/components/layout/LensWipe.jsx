import { AnimatePresence, motion } from 'motion/react'
import { useLens } from '../../hooks/useLens.js'
import { useMotionPrefs } from '../../hooks/useMotionPrefs.js'
import { WIPE_MS } from '../../lib/constants.js'
import './LensWipe.css'

/** Radial clip-path wipe in the new accent, emanating from the switcher button. */
export function LensWipe() {
  const { transition } = useLens()
  const { reduced } = useMotionPrefs()
  if (reduced || transition.key === 0) return null

  const origin = transition.origin ?? { x: window.innerWidth / 2, y: 40 }
  const at = `${origin.x}px ${origin.y}px`

  return (
    <AnimatePresence>
      <motion.div
        key={transition.key}
        className="lens-wipe"
        aria-hidden="true"
        initial={{ clipPath: `circle(0px at ${at})`, opacity: 0.22 }}
        animate={{ clipPath: `circle(160vmax at ${at})`, opacity: 0 }}
        transition={{
          clipPath: { duration: WIPE_MS / 1000, ease: [0.4, 0, 0.2, 1] },
          opacity: { duration: (WIPE_MS + 200) / 1000, ease: 'easeOut' },
        }}
      />
    </AnimatePresence>
  )
}
