import { useContext } from 'react'
import { HighlightContext } from '../context/HighlightContext.js'

export function useHighlight() {
  const ctx = useContext(HighlightContext)
  if (!ctx) throw new Error('useHighlight must be used inside <HighlightProvider>')
  return ctx
}
