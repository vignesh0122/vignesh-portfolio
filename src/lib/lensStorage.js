import { DEFAULT_LENS, QUERY_LENS, STORAGE_LENS, STORAGE_THEME } from './constants.js'
import { LENS_IDS } from '../data/lenses.js'

const isLens = (v) => LENS_IDS.includes(v)

export function readLensFromUrl() {
  if (typeof window === 'undefined') return null
  const v = new URLSearchParams(window.location.search).get(QUERY_LENS)
  return isLens(v) ? v : null
}

export function readStoredLens() {
  try {
    const v = localStorage.getItem(STORAGE_LENS)
    return isLens(v) ? v : null
  } catch {
    return null
  }
}

export function readInitialLens() {
  if (typeof document !== 'undefined' && isLens(document.documentElement.dataset.lens)) {
    return document.documentElement.dataset.lens
  }
  return readLensFromUrl() ?? readStoredLens() ?? DEFAULT_LENS
}

export function persistLens(lens) {
  try {
    localStorage.setItem(STORAGE_LENS, lens)
  } catch {
    /* storage unavailable */
  }
  const url = new URL(window.location.href)
  url.searchParams.set(QUERY_LENS, lens)
  window.history.replaceState(window.history.state, '', url)
  document.documentElement.dataset.lens = lens
}

export function readStoredTheme() {
  try {
    const v = localStorage.getItem(STORAGE_THEME)
    return v === 'light' || v === 'dark' ? v : 'system'
  } catch {
    return 'system'
  }
}

export function persistTheme(pref) {
  try {
    if (pref === 'system') localStorage.removeItem(STORAGE_THEME)
    else localStorage.setItem(STORAGE_THEME, pref)
  } catch {
    /* storage unavailable */
  }
}
