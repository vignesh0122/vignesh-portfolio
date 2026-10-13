import { AnimatePresence, motion } from 'motion/react'
import { Pin, X } from 'lucide-react'
import { useHighlight } from '../../hooks/useHighlight.js'
import { skillLabel, usageOf } from '../../lib/selectors.js'

function reveal(kind, id) {
  window.dispatchEvent(new CustomEvent(`vs:reveal-${kind}`, { detail: id }))
}

export function SkillLinkage() {
  const { activeSkill, pinned, clear } = useHighlight()
  const usage = activeSkill ? usageOf(activeSkill) : null

  return (
    <aside className="slink card" aria-live="polite" aria-label="Where this skill was used">
      <AnimatePresence mode="wait" initial={false}>
        {activeSkill ? (
          <motion.div
            key={activeSkill}
            className="slink__body"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            <div className="slink__head">
              <span className="eyebrow">
                {pinned ? <Pin size={12} /> : null} {pinned ? 'Pinned' : 'Hovering'}
              </span>
              {pinned && (
                <button type="button" className="slink__clear" onClick={clear} aria-label="Clear pinned skill">
                  <X size={14} />
                </button>
              )}
            </div>
            <h3 className="slink__title">{skillLabel(activeSkill)}</h3>
            {usage.projects.length === 0 && usage.roles.length === 0 ? (
              <p className="muted">Listed on my resume; not tied to a specific project here yet.</p>
            ) : (
              <>
                {usage.roles.length > 0 && (
                  <div className="slink__group">
                    <span className="slink__label subtle">Roles</span>
                    <ul>
                      {usage.roles.map((r) => (
                        <li key={r.id}>
                          <a href={`#exp-${r.id}`} onClick={(e) => { e.preventDefault(); reveal('experience', r.id) }}>
                            {r.role} <span className="subtle">· {r.orgShort}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {usage.projects.length > 0 && (
                  <div className="slink__group">
                    <span className="slink__label subtle">Projects</span>
                    <ul>
                      {usage.projects.map((p) => (
                        <li key={p.id}>
                          <a href={`#project-${p.id}`} onClick={(e) => { e.preventDefault(); reveal('project', p.id) }}>
                            {p.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            className="slink__body slink__empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <span className="eyebrow">Skill map</span>
            <p className="muted" id="skills-help">
              Hover or focus a skill to see the roles and projects that used it. Click to pin it; projects and
              experience dim to show the matches.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  )
}
