import { AnimatePresence, motion } from 'motion/react'
import { useLens } from '../../hooks/useLens.js'
import { Reveal } from '../ui/Reveal.jsx'
import './SectionHeader.css'

export function SectionHeader({ eyebrow, title, intro, id }) {
  const { lensId, lens } = useLens()
  const text = intro ?? lens.intros[id]
  return (
    <Reveal className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-header__title">{title}</h2>
      <div className="section-header__intro" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={lensId}
            className="muted"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            {text}
          </motion.p>
        </AnimatePresence>
      </div>
    </Reveal>
  )
}
