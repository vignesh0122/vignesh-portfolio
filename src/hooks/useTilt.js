import { useMotionValue, useSpring, useTransform } from 'motion/react'

/**
 * Pointer-driven 3D tilt + glare. Returns motion values and handlers.
 * When disabled, handlers are no-ops and the values stay at rest.
 */
export function useTilt({ max = 8, enabled = true } = {}) {
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const sx = useSpring(px, { stiffness: 260, damping: 24, mass: 0.6 })
  const sy = useSpring(py, { stiffness: 260, damping: 24, mass: 0.6 })

  const rotateX = useTransform(sy, [0, 1], [max, -max])
  const rotateY = useTransform(sx, [0, 1], [-max, max])
  const glareX = useTransform(sx, [0, 1], ['0%', '100%'])
  const glareY = useTransform(sy, [0, 1], ['0%', '100%'])
  const glareOpacity = useTransform([sx, sy], ([x, y]) => {
    const d = Math.hypot(x - 0.5, y - 0.5)
    return enabled ? Math.min(0.5, d * 1.1 + 0.08) : 0
  })

  const onPointerMove = (e) => {
    if (!enabled) return
    const r = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  const onPointerLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return { rotateX, rotateY, glareX, glareY, glareOpacity, onPointerMove, onPointerLeave }
}
