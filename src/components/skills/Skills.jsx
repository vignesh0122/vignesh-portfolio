import { LayoutGroup } from 'motion/react'
import { SKILL_GROUPS } from '../../data/skills.js'
import { useLens } from '../../hooks/useLens.js'
import { useHighlight } from '../../hooks/useHighlight.js'
import { rankByLens, weightOf } from '../../lib/selectors.js'
import { SectionHeader } from '../layout/SectionHeader.jsx'
import { SkillGroup } from './SkillGroup.jsx'
import { SkillLinkage } from './SkillLinkage.jsx'
import './Skills.css'

export function Skills() {
  const { lensId } = useLens()
  const { pinned, clear } = useHighlight()
  const ranked = rankByLens(SKILL_GROUPS, lensId, { hideZero: false })

  return (
    <section id="skills" className="section" aria-labelledby="skills-title" onClick={(e) => { if (pinned && e.target === e.currentTarget) clear() }}>
      <div className="container">
        <SectionHeader id="skills" eyebrow="Skills" title="What I work with" />
        <div className="skills__layout">
          <LayoutGroup id="skills">
            <div className="skills__groups">
              {ranked.map((g) => (
                <SkillGroup key={g.id} group={g} weight={weightOf(g, lensId)} />
              ))}
            </div>
          </LayoutGroup>
          <div className="skills__side">
            <SkillLinkage />
          </div>
        </div>
      </div>
    </section>
  )
}
