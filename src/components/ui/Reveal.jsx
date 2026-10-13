import { motion } from 'motion/react'
import { EASE } from '../../lib/constants.js'

/** Fade/translate-in when scrolled into view. Reduced motion → opacity only (MotionConfig). */
export function Reveal({ as = 'div', delay = 0, y = 18, once = true, className, children, ...rest }) {
  const Comp = motion[as] ?? motion.div
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Comp>
  )
}
