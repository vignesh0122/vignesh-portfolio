import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'motion/react'
import { X } from 'lucide-react'
import './Modal.css'

/**
 * Accessible dialog: portal, backdrop, Esc, focus management, inert main, scroll lock.
 * Children render inside a motion.div that can carry a layoutId for shared-layout morphs.
 */
export function Modal({ open, onClose, labelledBy, layoutId, children }) {
  const closeRef = useRef(null)
  const restoreRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    restoreRef.current = document.activeElement
    const main = document.getElementById('main')
    const header = document.getElementById('topbar')
    main?.setAttribute('inert', '')
    header?.setAttribute('inert', '')
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => closeRef.current?.focus(), 60)
    return () => {
      clearTimeout(t)
      main?.removeAttribute('inert')
      header?.removeAttribute('inert')
      document.body.style.overflow = prevOverflow
      restoreRef.current?.focus?.()
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.button
            type="button"
            className="modal__backdrop"
            aria-label="Close dialog"
            onClick={onClose}
            tabIndex={-1}
          />
          <motion.div
            className="modal__panel card"
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            layoutId={layoutId}
            initial={layoutId ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98, transition: { duration: 0.18 } }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
          >
            <button ref={closeRef} type="button" className="modal__close" onClick={onClose} aria-label="Close">
              <X size={18} />
            </button>
            <div className="modal__body">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
