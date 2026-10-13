const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function formatMonth(iso) {
  if (!iso) return 'Present'
  const [y, m] = iso.split('-').map(Number)
  return `${MONTHS[m - 1]} ${y}`
}

export function formatRange(start, end) {
  return `${formatMonth(start)} – ${formatMonth(end)}`
}

export function yearOf(iso) {
  return iso ? iso.slice(0, 4) : ''
}

export function monthsBetween(start, end) {
  const [sy, sm] = start.split('-').map(Number)
  const [ey, em] = (end ?? currentIsoMonth()).split('-').map(Number)
  return (ey - sy) * 12 + (em - sm) + 1
}

export function currentIsoMonth() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

export function formatDuration(start, end) {
  const months = monthsBetween(start, end)
  const y = Math.floor(months / 12)
  const m = months % 12
  const parts = []
  if (y) parts.push(`${y} yr${y > 1 ? 's' : ''}`)
  if (m) parts.push(`${m} mo${m > 1 ? 's' : ''}`)
  return parts.join(' ') || '1 mo'
}
