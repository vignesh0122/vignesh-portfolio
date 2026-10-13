const GLYPHS = '!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

/**
 * Pure scramble stepper. progress 0..1. Characters settle left to right with a little
 * per-character jitter so the resolve looks organic. Spaces are never scrambled.
 */
export function scramble(from, to, progress, seed = 0) {
  const len = Math.max(from.length, to.length)
  let out = ''
  for (let i = 0; i < len; i++) {
    const target = to[i] ?? ''
    const source = from[i] ?? ''
    const jitter = ((i * 7919 + seed * 104729) % 23) / 23 // 0..1 deterministic
    const settleAt = (i / len) * 0.75 + jitter * 0.25
    if (target === ' ') {
      out += ' '
    } else if (progress >= settleAt) {
      out += target
    } else if (progress < settleAt * 0.4 && source) {
      out += source
    } else {
      const g = GLYPHS[Math.floor(((i + 1) * 31 + progress * 977 + seed) % GLYPHS.length)]
      out += g
    }
  }
  return out
}
