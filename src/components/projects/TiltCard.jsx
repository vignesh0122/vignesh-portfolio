import { motion } from 'motion/react'
import { useTilt } from '../../hooks/useTilt.js'
import './TiltCard.css'

export function TiltCard({ enabled = true, className = '', layoutId, children, ...rest }) {
  const tilt = useTilt({ enabled, max: 7 })
  return (
    <motion.div
      className={`tilt ${className}`}
      layoutId={layoutId}
      style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformPerspective: 1100 }}
      onPointerMove={tilt.onPointerMove}
      onPointerLeave={tilt.onPointerLeave}
      {...rest}
    >
      {children}
      <motion.div
        className="tilt__glare"
        aria-hidden="true"
        style={{ '--gx': tilt.glareX, '--gy': tilt.glareY, opacity: tilt.glareOpacity }}
      />
    </motion.div>
  )
}
