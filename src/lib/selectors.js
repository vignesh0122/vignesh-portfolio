import { experience } from '../data/experience.js'
import { projects } from '../data/projects.js'
import { SKILLS } from '../data/skills.js'

/** Resolve a copy object ({ default, ai?, cloud?, research? }) or plain string for a lens. */
export function pick(copy, lens) {
  if (copy == null) return ''
  if (typeof copy === 'string') return copy
  return copy[lens] ?? copy.default ?? ''
}

export function weightOf(item, lens) {
  return item.lens?.[lens] ?? 2
}

/** Stable sort by lens weight desc, then by start date desc (newest first). */
export function rankByLens(items, lens, { hideZero = true } = {}) {
  const ranked = items
    .map((item, index) => ({ item, index, w: weightOf(item, lens) }))
    .filter(({ w }) => !hideZero || w > 0)
    .sort((a, b) => {
      if (b.w !== a.w) return b.w - a.w
      const ad = a.item.start ?? a.item.year ?? ''
      const bd = b.item.start ?? b.item.year ?? ''
      if (ad !== bd) return ad < bd ? 1 : -1
      return a.index - b.index
    })
  return ranked.map(({ item }) => item)
}

/** Bullets relevant to the lens first; the rest only when the item is featured. */
export function bulletsForLens(item, lens) {
  const w = weightOf(item, lens)
  const relevant = item.bullets.filter((b) => b.lens.includes(lens))
  if (w >= 3) {
    const rest = item.bullets.filter((b) => !b.lens.includes(lens))
    return [...relevant, ...rest]
  }
  if (w === 2) return relevant.length ? relevant : item.bullets.slice(0, 2)
  return relevant.slice(0, 1).length ? relevant.slice(0, 1) : item.bullets.slice(0, 1)
}

export function metricsOf(item, lens) {
  return bulletsForLens(item, lens)
    .map((b) => b.metric)
    .filter(Boolean)
}

export function skillLabel(id) {
  return SKILLS[id] ?? id
}

/** skillId -> { projects: [project], roles: [experience] } */
function buildSkillIndex() {
  const index = new Map()
  const ensure = (id) => {
    if (!index.has(id)) index.set(id, { projects: [], roles: [] })
    return index.get(id)
  }
  for (const p of projects) for (const s of p.stack) ensure(s).projects.push(p)
  for (const e of experience) for (const s of e.skills) ensure(s).roles.push(e)
  return index
}

export const SKILL_INDEX = buildSkillIndex()

export function usageOf(skillId) {
  return SKILL_INDEX.get(skillId) ?? { projects: [], roles: [] }
}

export function itemUsesSkill(item, skillId) {
  if (!skillId) return true
  const list = item.stack ?? item.skills ?? []
  return list.includes(skillId)
}

/** Chronological order for the timeline (oldest first). */
export function timelineItems() {
  return [...experience].sort((a, b) => (a.start < b.start ? -1 : a.start > b.start ? 1 : a.kind === 'education' ? -1 : 1))
}
