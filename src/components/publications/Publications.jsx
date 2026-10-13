import { BookOpen, Award, ExternalLink } from 'lucide-react'
import { publications, certifications } from '../../data/publications.js'
import { useLens } from '../../hooks/useLens.js'
import { rankByLens } from '../../lib/selectors.js'
import { SectionHeader } from '../layout/SectionHeader.jsx'
import { Reveal } from '../ui/Reveal.jsx'
import './Publications.css'

export function Publications() {
  const { lensId } = useLens()
  const ranked = rankByLens(publications, lensId, { hideZero: false })
  return (
    <section id="publications" className="section" aria-labelledby="publications-title">
      <div className="container">
        <SectionHeader id="publications" eyebrow="Papers & credentials" title="Published and certified" />
        <div className="pubs__layout">
          <ol className="pubs__list">
            {ranked.map((p, i) => (
              <Reveal as="li" key={p.id} delay={i * 0.08} className="pub card">
                <div className="pub__icon" aria-hidden="true">
                  <BookOpen size={18} />
                </div>
                <div className="pub__body">
                  <h3 className="pub__title">
                    {p.href ? (
                      <a href={p.href} target="_blank" rel="noreferrer">
                        {p.title} <ExternalLink size={14} />
                      </a>
                    ) : (
                      p.title
                    )}
                  </h3>
                  <p className="pub__venue">{p.venue}</p>
                  <p className="pub__event muted">
                    {p.event} · {p.location} · {p.year}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal className="certs card" delay={0.1}>
            <h3 className="certs__title">
              <Award size={16} aria-hidden="true" /> Certifications
            </h3>
            <ul className="certs__list">
              {certifications.map((c) => (
                <li key={c.id} className="cert">
                  <span className="cert__name">
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noreferrer">
                        {c.name} <ExternalLink size={12} />
                      </a>
                    ) : (
                      c.name
                    )}
                  </span>
                  <span className="cert__meta subtle">
                    {c.issuer}
                    {c.status === 'in-progress' && <span className="cert__badge">In progress</span>}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
