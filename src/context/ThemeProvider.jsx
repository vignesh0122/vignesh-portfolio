import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './ThemeContext.js'
import { persistTheme, readStoredTheme } from '../lib/lensStorage.js'

const DARK_MQ = '(prefers-color-scheme: dark)'

function systemTheme() {
  return typeof window !== 'undefined' && window.matchMedia(DARK_MQ).matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }) {
  const [pref, setPref] = useState(readStoredTheme)
  const [system, setSystem] = useState(systemTheme)

  useEffect(() => {
    const mq = window.matchMedia(DARK_MQ)
    const onChange = (e) => setSystem(e.matches ? 'dark' : 'light')
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const resolved = pref === 'system' ? system : pref

  useEffect(() => {
    document.documentElement.dataset.theme = resolved
  }, [resolved])

  const setTheme = useCallback((next) => {
    setPref(next)
    persistTheme(next)
  }, [])

  const toggle = useCallback(() => {
    setTheme(resolved === 'dark' ? 'light' : 'dark')
  }, [resolved, setTheme])

  const value = useMemo(() => ({ pref, resolved, setTheme, toggle }), [pref, resolved, setTheme, toggle])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
