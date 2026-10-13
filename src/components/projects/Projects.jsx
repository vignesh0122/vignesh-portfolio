import { useEffect, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { projects } from '../../data/projects.js'
import { useLens } from '../../hooks/useLens.js'
import { useMotionPrefs } from '../../hooks/useMotionPrefs.js'
import { rankByLens, weightOf } from '../../lib/selectors.js'
import { EASE } from '../../lib/constants.js'
import { SectionHeader } from '../layout/SectionHeader.jsx'
import { Modal } from '../ui/Modal.jsx'
import { ProjectCard } from './ProjectCard.jsx'
import { ProjectDetail } from './ProjectDetail.jsx'
import './Projects.css'

export function Projects() {
  const { lensId } = useLens()
  const { reduced, touch } = useMotionPrefs()
  const [showAll, setShowAll] = useState(false)
  const [openId, setOpenId] = useState(null)

  const ranked = rankByLens(projects, lensId, { hideZero: !showAll })
  const hiddenCount = projects.length - rankByLens(projects, lensId).length
  const open = projects.find((p) => p.id === openId) ?? null
  const morph = !reduced

  // Close the dialog if the lens changes underneath it.
  useEffect(() => {
    setOpenId(null)
  }, [lensId])

  // Linkage panel asks to reveal a project.
  useEffect(() => {
    const onReveal = (e) => {
      const el = document.getElementById(`project-${e.detail}`)
      el?.scrollIntoView({ block: 'center', behavior: 'smooth' })
      el?.focus({ preventScroll: true })
    }
    window.addEventListener('vs:reveal-project', onReveal)
    return () => window.removeEventListener('vs:reveal-project', onReveal)
  }, [])

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader id="projects" eyebrow="Projects" title="Things I've built" />
        <LayoutGroup id="projects">
          <motion.ul className="projects__grid" layout>
            <AnimatePresence mode="popLayout" initial={false}>
              {ranked.map((p) => {
                const w = weightOf(p, lensId)
                return (
                  <motion.li
                    key={p.id}
                    layout
                    className={`projects__cell ${w >= 3 ? 'is-featured' : ''} ${w <= 1 ? 'is-compact' : ''}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: EASE, layout: { duration: 0.45, ease: EASE } }}
                  >
                    <ProjectCard
                      project={p}
                      lensId={lensId}
                      tiltEnabled={!reduced && !touch}
                      layoutId={morph && openId !== p.id ? `project-card-${p.id}` : undefined}
                      onOpen={() => setOpenId(p.id)}
                    />
                  </motion.li>
                )
              })}
            </AnimatePresence>
          </motion.ul>
          {hiddenCount > 0 && (
            <button type="button" className="projects__more" onClick={() => setShowAll((s) => !s)}>
              {showAll ? 'Show fewer' : `Show ${hiddenCount} more project${hiddenCount > 1 ? 's' : ''}`}
            </button>
          )}
          <Modal
            open={!!open}
            onClose={() => setOpenId(null)}
            labelledBy={open ? `project-${open.id}-title` : undefined}
            layoutId={morph && open ? `project-card-${open.id}` : undefined}
          >
            {open && <ProjectDetail project={open} lensId={lensId} onClose={() => setOpenId(null)} />}
          </Modal>
        </LayoutGroup>
      </div>
    </section>
  )
}
