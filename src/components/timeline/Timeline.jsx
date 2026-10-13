import { useEffect, useState } from 'react'
import { useLens } from '../../hooks/useLens.js'
import { useMotionPrefs } from '../../hooks/useMotionPrefs.js'
import { timelineItems } from '../../lib/selectors.js'
import { SectionHeader } from '../layout/SectionHeader.jsx'
import { TimelineHorizontal } from './TimelineHorizontal.jsx'
import { TimelineVertical } from './TimelineVertical.jsx'

const ITEMS = timelineItems()

export function Timeline() {
  const { lensId } = useLens()
  const { reduced, touch, narrow } = useMotionPrefs()
  const [expanded, setExpanded] = useState(null)
  const horizontal = !reduced && !touch && !narrow

  const toggle = (id) => setExpanded((cur) => (cur === id ? null : id))

  // Linkage panel asks to reveal a role: focus (which also scrolls) and expand it.
  useEffect(() => {
    const onReveal = (e) => {
      const id = e.detail
      setExpanded(id)
      requestAnimationFrame(() => document.getElementById(`exp-${id}`)?.focus({ preventScroll: horizontal }))
    }
    window.addEventListener('vs:reveal-experience', onReveal)
    return () => window.removeEventListener('vs:reveal-experience', onReveal)
  }, [horizontal])

  return (
    <section id="experience" className={`section section--timeline ${horizontal ? "section--timeline-h" : ""}`} aria-labelledby="experience-title">
      {horizontal ? (
        <TimelineHorizontal
          items={ITEMS}
          lensId={lensId}
          expanded={expanded}
          onToggle={toggle}
          header={<SectionHeader id="experience" eyebrow="Experience" title="Where I've worked" />}
        />
      ) : (
        <>
          <div className="container">
            <SectionHeader id="experience" eyebrow="Experience" title="Where I've worked" />
          </div>
          <TimelineVertical items={ITEMS} lensId={lensId} expanded={expanded} onToggle={toggle} />
        </>
      )}
    </section>
  )
}
