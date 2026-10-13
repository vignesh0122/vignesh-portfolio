import { motion, useScroll, useTransform } from 'motion/react'
import { profile } from '../../data/profile.js'
import { NAV } from '../../data/nav.js'
import { LensSwitcher } from './LensSwitcher.jsx'
import { ThemeToggle } from './ThemeToggle.jsx'
import './TopBar.css'

export function TopBar() {
  const { scrollY } = useScroll()
  const bg = useTransform(scrollY, [0, 80], [0, 1])
  const shadow = useTransform(bg, (v) => `0 1px 0 oklch(50% 0.02 var(--hue) / ${0.12 * v})`)
  const opacity = useTransform(bg, [0, 1], [0, 1])

  return (
    <motion.header id="topbar" className="topbar" style={{ boxShadow: shadow }}>
      <motion.div className="topbar__bg" style={{ opacity }} aria-hidden="true" />
      <div className="container topbar__inner">
        <a href="#top" className="topbar__brand" aria-label={`${profile.name}, back to top`}>
          <span className="topbar__mark" aria-hidden="true">
            VS
          </span>
          <span className="topbar__name">{profile.name}</span>
        </a>
        <nav className="topbar__nav" aria-label="Sections">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="topbar__controls">
          <LensSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  )
}
