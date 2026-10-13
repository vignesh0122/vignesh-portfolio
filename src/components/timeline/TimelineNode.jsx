import { AnimatePresence, motion } from 'motion/react'
import { ChevronDown, GraduationCap, Briefcase } from 'lucide-react'
import { formatDuration, formatRange, formatMonth } from '../../lib/format.js'
import { metricsOf, pick, weightOf, itemUsesSkill } from '../../lib/selectors.js'
import { useHighlight } from '../../hooks/useHighlight.js'
import { MetricPill } from './MetricPill.jsx'
import { NodeDetail } from './NodeDetail.jsx'
import { EASE } from '../../lib/constants.js'
import './TimelineNode.css'

export function TimelineNode({ item, lensId, expanded, onToggle, active = false, onFocusNode, ref }) {
  const { activeSkill } = useHighlight()
  const w = weightOf(item, lensId)
  const dim = activeSkill && !itemUsesSkill(item, activeSkill)
  const metrics = metricsOf(item, lensId)
  const isEdu = item.kind === 'education'
  const Icon = isEdu ? GraduationCap : Briefcase
  const detailId = `exp-${item.id}-detail`

  return (
    <motion.article
      ref={ref}
      layout="position"
      className={`tnode card ${isEdu ? 'tnode--edu' : ''} ${w >= 3 ? 'tnode--featured' : ''} ${w <= 1 ? 'tnode--compact' : ''} ${active ? 'is-active' : ''} ${dim ? 'is-dim' : ''} ${expanded ? 'is-open' : ''}`}
      data-kind={item.kind}
      transition={{ layout: { duration: 0.35, ease: EASE } }}
    >
      <div className="tnode__dot" aria-hidden="true" />
      <header className="tnode__head">
        <div className="tnode__meta mono">
          <Icon size={13} aria-hidden="true" />
          <span>{isEdu ? `Graduated ${formatMonth(item.end)}` : formatRange(item.start, item.end)}</span>
          {!isEdu && <span className="subtle">· {formatDuration(item.start, item.end)}</span>}
          {w >= 3 && <span className="tnode__badge">Featured</span>}
        </div>
        <h3 className="tnode__role">
          <button
            type="button"
            id={`exp-${item.id}`}
            className="tnode__toggle"
            aria-expanded={expanded}
            aria-controls={detailId}
            onClick={onToggle}
            onFocus={onFocusNode}
          >
            {item.role}
          </button>
        </h3>
        <p className="tnode__org">
          {item.org} <span className="subtle">· {item.location}</span>
        </p>
      </header>
      <p className="tnode__summary muted">{pick(item.summary, lensId)}</p>
      {metrics.length > 0 && (
        <div className="tnode__metrics">
          {metrics.map((m) => (
            <MetricPill key={m.label} value={m.value} label={m.label} />
          ))}
        </div>
      )}
      <button type="button" className="tnode__more" onClick={onToggle} aria-expanded={expanded} aria-controls={detailId} tabIndex={-1}>
        {expanded ? 'Less' : 'Details'}
        <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ display: 'inline-flex' }}>
          <ChevronDown size={15} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={detailId}
            key="detail"
            className="tnode__detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <NodeDetail item={item} lensId={lensId} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
