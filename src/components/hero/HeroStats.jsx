import { AnimatePresence, motion } from 'motion/react'
import { useLens } from '../../hooks/useLens.js'
import { EASE } from '../../lib/constants.js'

export function HeroStats() {
  const { lensId, lens } = useLens()
  return (
    <div className="hero__stats" aria-label="Highlights">
      <AnimatePresence mode="popLayout" initial={false}>
        {lens.stats.map((s, i) => (
          <motion.div
            key={`${lensId}-${s.label}`}
            className="hero__stat card"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.25 + i * 0.07 }}
          >
            <span className="hero__stat-value">{s.value}</span>
            <span className="hero__stat-label">{s.label}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
