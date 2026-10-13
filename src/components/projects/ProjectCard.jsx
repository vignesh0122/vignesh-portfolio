import { ArrowUpRight } from 'lucide-react'
import { pick, skillLabel, weightOf, itemUsesSkill } from '../../lib/selectors.js'
import { useHighlight } from '../../hooks/useHighlight.js'
import { Tag } from '../ui/Tag.jsx'
import { MetricPill } from '../timeline/MetricPill.jsx'
import { TiltCard } from './TiltCard.jsx'
import './ProjectCard.css'

export function ProjectCard({ project, lensId, onOpen, tiltEnabled, layoutId }) {
  const { activeSkill } = useHighlight()
  const w = weightOf(project, lensId)
  const featured = w >= 3
  const dim = activeSkill && !itemUsesSkill(project, activeSkill)
  const stack = featured ? project.stack : project.stack.slice(0, 5)

  return (
    <TiltCard
      enabled={tiltEnabled && !dim}
      layoutId={layoutId}
      className={`pcard card ${featured ? 'pcard--featured' : ''} ${w <= 1 ? 'pcard--compact' : ''} ${dim ? 'is-dim' : ''}`}
      onClick={onOpen}
    >
      <div className="pcard__top">
        <span className="pcard__year mono">{project.year}</span>
        {featured && <span className="pcard__badge">Featured</span>}
      </div>
      <h3 className="pcard__title">
        <button type="button" id={`project-${project.id}`} className="pcard__open" onClick={(e) => { e.stopPropagation(); onOpen() }}>
          {project.title}
          <ArrowUpRight size={18} aria-hidden="true" />
        </button>
      </h3>
      <p className="pcard__subtitle subtle">{project.subtitle}</p>
      <p className="pcard__tagline muted">{pick(project.tagline, lensId)}</p>
      {project.metrics?.length > 0 && !(w <= 1) && (
        <div className="pcard__metrics">
          {project.metrics.slice(0, featured ? 2 : 1).map((m) => (
            <MetricPill key={m.label} value={m.value} label={m.label} />
          ))}
        </div>
      )}
      <ul className="pcard__stack" aria-label="Stack">
        {stack.map((s) => (
          <li key={s}>
            <Tag tone={activeSkill === s ? 'accent' : 'default'}>{skillLabel(s)}</Tag>
          </li>
        ))}
        {!featured && project.stack.length > 5 && (
          <li>
            <Tag tone="muted">+{project.stack.length - 5}</Tag>
          </li>
        )}
      </ul>
    </TiltCard>
  )
}
