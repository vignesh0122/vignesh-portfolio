import { useState } from 'react'
import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { SkillChip } from './SkillChip.jsx'
import { EASE } from '../../lib/constants.js'

export function SkillGroup({ group, weight }) {
  const compact = weight <= 1
  const [open, setOpen] = useState(false)
  const limit = compact && !open ? 6 : group.skills.length
  const shown = group.skills.slice(0, limit)
  const rest = group.skills.length - shown.length
  return (
    <motion.section
      layout
      className={`sgroup card ${weight >= 3 ? 'sgroup--featured' : ''} ${compact ? 'sgroup--compact' : ''}`}
      transition={{ layout: { duration: 0.45, ease: EASE } }}
      aria-labelledby={`sgroup-${group.id}`}
    >
      <h3 id={`sgroup-${group.id}`} className="sgroup__title">
        {group.label}
        {weight >= 3 && <span className="sgroup__badge">Core</span>}
      </h3>
      <ul className="sgroup__list">
        {shown.map((s) => (
          <li key={s}>
            <SkillChip id={s} />
          </li>
        ))}
      </ul>
      {rest > 0 && (
        <button type="button" className="sgroup__more" onClick={() => setOpen(true)}>
          +{rest} more <ChevronDown size={14} />
        </button>
      )}
    </motion.section>
  )
}
