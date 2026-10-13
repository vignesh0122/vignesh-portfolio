import './MetricPill.css'

export function MetricPill({ value, label }) {
  return (
    <span className="metric">
      <span className="metric__value">{value}</span>
      <span className="metric__label">{label}</span>
    </span>
  )
}
