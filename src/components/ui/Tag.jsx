import './Tag.css'

export function Tag({ children, tone = 'default', className = '', ...rest }) {
  return (
    <span className={`tag tag--${tone} ${className}`} {...rest}>
      {children}
    </span>
  )
}
