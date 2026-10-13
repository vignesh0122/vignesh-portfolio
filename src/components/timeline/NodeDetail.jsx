import { bulletsForLens, skillLabel } from '../../lib/selectors.js'
import { useHighlight } from '../../hooks/useHighlight.js'
import { Tag } from '../ui/Tag.jsx'

export function NodeDetail({ item, lensId }) {
  const bullets = bulletsForLens(item, lensId)
  const { activeSkill, togglePin } = useHighlight()
  return (
    <div className="node-detail">
      <ul className="node-detail__bullets">
        {bullets.map((b) => (
          <li key={b.text}>{b.text}</li>
        ))}
      </ul>
      {item.gpa && (
        <p className="node-detail__gpa subtle">
          GPA <span className="mono">{item.gpa}</span>
        </p>
      )}
      <ul className="node-detail__skills" aria-label="Skills used">
        {item.skills.map((s) => (
          <li key={s}>
            <button
              type="button"
              className="node-detail__skill"
              onClick={() => togglePin(s)}
              aria-pressed={activeSkill === s}
            >
              <Tag tone={activeSkill === s ? 'accent' : 'default'}>{skillLabel(s)}</Tag>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
