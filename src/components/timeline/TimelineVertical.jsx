import { TimelineNode } from './TimelineNode.jsx'
import './Timeline.css'

export function TimelineVertical({ items, lensId, expanded, onToggle }) {
  const ordered = [...items].reverse() // newest first when stacked
  return (
    <div className="container">
      <ol className="tl-v">
        {ordered.map((item) => (
          <li key={item.id} className="tl-v__item">
            <TimelineNode
              item={item}
              lensId={lensId}
              expanded={expanded === item.id}
              onToggle={() => onToggle(item.id)}
              onFocusNode={(e) => e.currentTarget.scrollIntoView({ block: 'center', behavior: 'smooth' })}
            />
          </li>
        ))}
      </ol>
    </div>
  )
}
