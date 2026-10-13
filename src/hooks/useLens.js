import { useContext } from 'react'
import { LensContext } from '../context/LensContext.js'

export function useLens() {
  const ctx = useContext(LensContext)
  if (!ctx) throw new Error('useLens must be used inside <LensProvider>')
  return ctx
}
