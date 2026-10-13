import { motion } from 'motion/react'
import { ArrowDown, Download } from 'lucide-react'
import { profile } from '../../data/profile.js'
import { useLens } from '../../hooks/useLens.js'
import { pick } from '../../lib/selectors.js'
import { EASE } from '../../lib/constants.js'
import { Button } from '../ui/Button.jsx'
import { PointerField } from './PointerField.jsx'
import { ScrambleText } from './ScrambleText.jsx'
import { HeroStats } from './HeroStats.jsx'
import './Hero.css'

export function Hero() {
  const { lensId, lens } = useLens()
  const resume = profile.resumes[0]

  return (
    <section id="top" className="hero" aria-labelledby="hero-name">
      <PointerField />
      <div className="container hero__inner">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          {profile.location} · {lens.label}
        </motion.p>
        <motion.h1
          id="hero-name"
          className="hero__name"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
        >
          <span className="hero__first">{profile.firstName}</span>
          <span className="hero__last">{profile.name.split(' ').slice(1).join(' ')}</span>
        </motion.h1>
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
        >
          <ScrambleText as="p" className="hero__headline" text={lens.hero.headline} delay={60} />
          <ScrambleText as="p" className="hero__tagline muted" text={lens.hero.tagline} delay={140} />
        </motion.div>
        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
        >
          <Button as="a" href="#experience">
            See the work <ArrowDown size={16} />
          </Button>
          <Button as="a" variant="ghost" href={resume.href} download={resume.filename}>
            <Download size={16} /> Resume
          </Button>
        </motion.div>
        <HeroStats />
        <p className="hero__summary muted" key={lensId}>
          {pick(profile.summary, lensId)}
        </p>
      </div>
    </section>
  )
}
