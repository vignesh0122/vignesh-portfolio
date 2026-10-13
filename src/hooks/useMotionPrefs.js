import { useReducedMotion } from 'motion/react'
import { useMediaQuery } from './useMediaQuery.js'
import { BREAKPOINT_NARROW, COARSE_POINTER } from '../lib/constants.js'

/** { reduced, touch, narrow } — the three switches that degrade interactions. */
export function useMotionPrefs() {
  const reduced = useReducedMotion() ?? false
  const touch = useMediaQuery(COARSE_POINTER)
  const narrow = useMediaQuery(BREAKPOINT_NARROW)
  return { reduced, touch, narrow }
}
