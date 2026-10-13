import { useRef } from 'react'
import { motion } from 'motion/react'
import { useLens } from '../../hooks/useLens.js'
import { useMotionPrefs } from '../../hooks/useMotionPrefs.js'
import './LensSwitcher.css'

export function LensSwitcher({ compact = false }) {
  const { lensId, lenses, setLens } = useLens()
  const { narrow } = useMotionPrefs()
  const groupRef = useRef(null)

  const choose = (id, e) => {
    const r = e?.currentTarget?.getBoundingClientRect()
    setLens(id, r ? { x: r.left + r.width / 2, y: r.top + r.height / 2 } : null)
  }

  const onKeyDown = (e) => {
    const i = lenses.findIndex((l) => l.id === lensId)
    let next = null
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = lenses[(i + 1) % lenses.length]
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = lenses[(i - 1 + lenses.length) % lenses.length]
    if (e.key === 'Home') next = lenses[0]
    if (e.key === 'End') next = lenses[lenses.length - 1]
    if (next) {
      e.preventDefault()
      const btn = groupRef.current?.querySelector(`[data-lens-id="${next.id}"]`)
      btn?.focus()
      choose(next.id, { currentTarget: btn })
    }
  }

  return (
    <div
      ref={groupRef}
      className={`lens-switcher ${compact ? 'lens-switcher--compact' : ''}`}
      role="radiogroup"
      aria-label="View portfolio as"
      onKeyDown={onKeyDown}
    >
      {lenses.map((l) => {
        const active = l.id === lensId
        return (
          <button
            key={l.id}
            type="button"
            role="radio"
            aria-checked={active}
            tabIndex={active ? 0 : -1}
            data-lens-id={l.id}
            className={`lens-switcher__btn ${active ? 'is-active' : ''}`}
            onClick={(e) => choose(l.id, e)}
          >
            {active && (
              <motion.span
                layoutId="lens-indicator"
                className="lens-switcher__pill"
                transition={{ type: 'spring', stiffness: 420, damping: 36 }}
              />
            )}
            <span className="lens-switcher__label">{narrow || compact ? l.short : l.label}</span>
            {!narrow && !compact && <kbd aria-hidden="true">{l.hotkey}</kbd>}
          </button>
        )
      })}
    </div>
  )
}
