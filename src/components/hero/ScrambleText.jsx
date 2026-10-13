import { useScramble } from '../../hooks/useScramble.js'
import { useMotionPrefs } from '../../hooks/useMotionPrefs.js'

/** Renders text with a glyph-scramble on change. Screen readers get the final text. */
export function ScrambleText({ text, as: Comp = 'span', delay = 0, className = '' }) {
  const { reduced } = useMotionPrefs()
  const shown = useScramble(text, { enabled: !reduced, delay })
  const animating = shown !== text
  return (
    <Comp className={className} aria-label={text}>
      <span aria-hidden="true" className={animating ? 'is-scrambling' : undefined}>
        {shown}
      </span>
    </Comp>
  )
}
