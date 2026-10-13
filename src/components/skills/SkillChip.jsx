import { useHighlight } from '../../hooks/useHighlight.js'
import { skillLabel, usageOf } from '../../lib/selectors.js'

export function SkillChip({ id }) {
  const { activeSkill, pinned, hover, unhover, togglePin } = useHighlight()
  const usage = usageOf(id)
  const count = usage.projects.length + usage.roles.length
  const active = activeSkill === id
  return (
    <button
      type="button"
      className={`schip ${active ? 'is-active' : ''} ${pinned === id ? 'is-pinned' : ''}`}
      onMouseEnter={() => hover(id)}
      onMouseLeave={unhover}
      onFocus={() => hover(id)}
      onBlur={unhover}
      onClick={() => togglePin(id)}
      aria-pressed={pinned === id}
      aria-describedby="skills-help"
    >
      <span>{skillLabel(id)}</span>
      {count > 0 && (
        <span className="schip__count" aria-label={`used in ${count}`}>
          {count}
        </span>
      )}
    </button>
  )
}
