import { AnimatePresence, motion } from 'motion/react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme.js'
import { Button } from '../ui/Button.jsx'

export function ThemeToggle() {
  const { resolved, toggle } = useTheme()
  const Icon = resolved === 'dark' ? Sun : Moon
  return (
    <Button
      variant="icon"
      onClick={toggle}
      aria-label={resolved === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      title="Toggle theme (T)"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={resolved}
          initial={{ rotate: -60, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 60, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.22 }}
          style={{ display: 'grid', placeItems: 'center' }}
        >
          <Icon size={18} />
        </motion.span>
      </AnimatePresence>
    </Button>
  )
}
