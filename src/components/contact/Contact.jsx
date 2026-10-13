import { AnimatePresence, motion } from 'motion/react'
import { Check, Copy, Download, Mail, Phone, MapPin, CalendarDays } from 'lucide-react'
import { BrandIcon } from '../ui/BrandIcon.jsx'
import { profile } from '../../data/profile.js'
import { useLens } from '../../hooks/useLens.js'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard.js'
import { SectionHeader } from '../layout/SectionHeader.jsx'
import { Button } from '../ui/Button.jsx'
import { Reveal } from '../ui/Reveal.jsx'
import './Contact.css'

export function Contact() {
  const { lens } = useLens()
  const { copied, copy } = useCopyToClipboard()

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader id="contact" eyebrow="Contact" title="Let's build something" intro={lens.intros.contact} />
        <Reveal className="contact card">
          <div className="contact__main">
            <a href={`mailto:${profile.email}`} className="contact__email">
              {profile.email}
            </a>
            <div className="contact__actions">
              <Button variant="soft" onClick={() => copy(profile.email)} aria-live="polite">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? 'ok' : 'copy'}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? 'Copied' : 'Copy email'}
                  </motion.span>
                </AnimatePresence>
              </Button>
              <Button as="a" variant="ghost" href={`mailto:${profile.email}`}>
                <Mail size={16} /> Write to me
              </Button>
              {profile.calendly && (
                <Button as="a" variant="ghost" href={profile.calendly} target="_blank" rel="noreferrer">
                  <CalendarDays size={16} /> Book a call
                </Button>
              )}
            </div>
            <ul className="contact__meta">
              <li>
                <Phone size={14} /> <a href={profile.phoneHref}>{profile.phone}</a>
              </li>
              <li>
                <MapPin size={14} /> {profile.location}
              </li>
              {profile.socials.map((s) => (
                <li key={s.id}>
                  <BrandIcon name={s.id} size={14} />{' '}
                  <a href={s.href} target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="contact__resumes">
            <span className="eyebrow">Resumes</span>
            {profile.resumes.map((r) => (
              <a key={r.id} href={r.href} download={r.filename} className="resume-dl">
                <span className="resume-dl__icon" aria-hidden="true">
                  <Download size={16} />
                </span>
                <span className="resume-dl__text">
                  <span className="resume-dl__label">
                    {r.label} <span className="mono">{r.format}</span>
                  </span>
                  <span className="resume-dl__note subtle">{r.note}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
