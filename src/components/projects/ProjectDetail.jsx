import { ExternalLink } from 'lucide-react'
import { pick, skillLabel } from '../../lib/selectors.js'
import { useHighlight } from '../../hooks/useHighlight.js'
import { Tag } from '../ui/Tag.jsx'
import { MetricPill } from '../timeline/MetricPill.jsx'
import './ProjectDetail.css'

export function ProjectDetail({ project, lensId, onClose }) {
  const { togglePin } = useHighlight()
  const pinAndGo = (s) => {
    togglePin(s)
    onClose()
    requestAnimationFrame(() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }))
  }
  return (
    <div className="pdetail">
      <p className="eyebrow">
        {project.year} · {project.subtitle}
      </p>
      <h3 id={`project-${project.id}-title`} className="pdetail__title">
        {project.title}
      </h3>
      <p className="pdetail__tagline">{pick(project.tagline, lensId)}</p>
      {project.metrics?.length > 0 && (
        <div className="pdetail__metrics">
          {project.metrics.map((m) => (
            <MetricPill key={m.label} value={m.value} label={m.label} />
          ))}
        </div>
      )}
      <dl className="pdetail__story">
        <div>
          <dt>Problem</dt>
          <dd>{project.detail.problem}</dd>
        </div>
        <div>
          <dt>Approach</dt>
          <dd>{project.detail.approach}</dd>
        </div>
        <div>
          <dt>Outcome</dt>
          <dd>{project.detail.outcome}</dd>
        </div>
      </dl>
      <div className="pdetail__stack">
        <span className="subtle pdetail__label">Stack · click a skill to see where else it appears</span>
        <ul>
          {project.stack.map((s) => (
            <li key={s}>
              <button type="button" className="pdetail__skill" onClick={() => pinAndGo(s)}>
                <Tag>{skillLabel(s)}</Tag>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {project.links?.length > 0 && (
        <div className="pdetail__links">
          {project.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="pdetail__link">
              {l.label} <ExternalLink size={14} />
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
