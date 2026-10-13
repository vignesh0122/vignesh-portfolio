import { motion } from 'motion/react'
import './Button.css'

export function Button({ as = 'button', variant = 'primary', size = 'md', className = '', children, ...rest }) {
  const Comp = as === 'a' ? motion.a : motion.button
  return (
    <Comp
      className={`btn btn--${variant} btn--${size} ${className}`}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      {...rest}
    >
      {children}
    </Comp>
  )
}
