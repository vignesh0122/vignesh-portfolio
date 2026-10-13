import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react'
import { MoveHorizontal } from 'lucide-react'
import { yearOf } from '../../lib/format.js'
import { TimelineNode } from './TimelineNode.jsx'
import './Timeline.css'

/**
 * Sticky viewport whose horizontal track is driven by vertical scroll (native scrolling only).
 * Section height = viewport + horizontal range, so the mapping is 1:1 pixels.
 */
export function TimelineHorizontal({ items, lensId, expanded, onToggle, header }) {
  const sectionRef = useRef(null)
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const nodeRefs = useRef([])
  const [range, setRange] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -range])
  const railScale = scrollYProgress

  useEffect(() => {
    const track = trackRef.current
    const vp = viewportRef.current
    if (!track || !vp) return undefined
    const measure = () => setRange(Math.max(0, track.scrollWidth - vp.clientWidth))
    const ro = new ResizeObserver(measure)
    ro.observe(track)
    ro.observe(vp)
    return () => ro.disconnect()
  }, [])

  useMotionValueEvent(x, 'change', (v) => {
    const vp = viewportRef.current
    if (!vp) return
    const center = vp.clientWidth / 2
    let best = 0
    let bestDist = Infinity
    nodeRefs.current.forEach((el, i) => {
      if (!el) return
      const c = el.offsetLeft + el.offsetWidth / 2 + v
      const d = Math.abs(c - center)
      if (d < bestDist) {
        bestDist = d
        best = i
      }
    })
    setActiveIndex((prev) => (prev === best ? prev : best))
  })

  const scrollToNode = (i) => {
    const section = sectionRef.current
    const vp = viewportRef.current
    const el = nodeRefs.current[i]
    if (!section || !vp || !el || !range) return
    const desired = Math.min(range, Math.max(0, el.offsetLeft + el.offsetWidth / 2 - vp.clientWidth / 2))
    const start = section.getBoundingClientRect().top + window.scrollY
    const pinEnd = start + section.offsetHeight - window.innerHeight
    const top = start + (desired / range) * (pinEnd - start)
    window.scrollTo({ top, behavior: 'instant' })
  }

  const firstYear = yearOf(items[0]?.start)
  const activeItem = items[activeIndex]

  return (
    <div ref={sectionRef} className="tl-h" style={{ height: `calc(100vh - var(--topbar-h) + ${range}px)` }}>
      <div ref={viewportRef} className="tl-h__viewport">
        <div className="container tl-h__header">{header}</div>
        <div className="container tl-h__rail-wrap">
          <div className="tl-h__rail" aria-hidden="true">
            <motion.div className="tl-h__rail-fill" style={{ scaleX: railScale }} />
          </div>
          <div className="tl-h__rail-meta mono">
            <span>{firstYear}</span>
            <span className="tl-h__now">
              {activeItem ? `${activeItem.orgShort} · ${yearOf(activeItem.start)}` : ''}
            </span>
            <span>Now</span>
          </div>
        </div>
        <motion.div ref={trackRef} className="tl-h__track" style={{ x }}>
          <div className="tl-h__line" aria-hidden="true" />
          {items.map((item, i) => (
            <TimelineNode
              key={item.id}
              ref={(el) => {
                nodeRefs.current[i] = el
              }}
              item={item}
              lensId={lensId}
              expanded={expanded === item.id}
              onToggle={() => onToggle(item.id)}
              active={i === activeIndex}
              onFocusNode={() => scrollToNode(i)}
            />
          ))}
          <div className="tl-h__end mono subtle" aria-hidden="true">
            <MoveHorizontal size={16} /> keep scrolling
          </div>
        </motion.div>
      </div>
    </div>
  )
}
