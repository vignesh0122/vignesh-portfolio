import { ArrowUp } from 'lucide-react'
import { profile } from '../../data/profile.js'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="subtle">
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite, and Motion.
        </p>
        <p className="subtle footer__hint">
          <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> switch lens · <kbd>T</kbd> theme
        </p>
        <a href="#top" className="footer__top" aria-label="Back to top">
          <ArrowUp size={16} /> Top
        </a>
      </div>
    </footer>
  )
}
