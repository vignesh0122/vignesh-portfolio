import { useEffect, useRef } from 'react'
import { useLens } from '../../hooks/useLens.js'
import { useTheme } from '../../hooks/useTheme.js'
import { useMotionPrefs } from '../../hooks/useMotionPrefs.js'
import './PointerField.css'

/**
 * Canvas dot grid. Dots near the (spring-smoothed) pointer lift, brighten, and are pushed
 * outward. On touch devices a slow autonomous drift replaces the pointer. Paused when offscreen.
 */
export function PointerField() {
  const canvasRef = useRef(null)
  const { lensId } = useLens()
  const { resolved } = useTheme()
  const { reduced, touch, narrow } = useMotionPrefs()

  useEffect(() => {
    if (reduced) return undefined
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    const parent = canvas.parentElement

    const state = {
      w: 0,
      h: 0,
      dpr: Math.min(window.devicePixelRatio || 1, 2),
      spacing: narrow ? 34 : 28,
      dots: [],
      target: { x: -9999, y: -9999 },
      pointer: { x: -9999, y: -9999 },
      hasPointer: false,
      t: 0,
      raf: 0,
      visible: true,
      color: '',
    }

    const readColor = () => {
      state.color = getComputedStyle(document.documentElement).getPropertyValue('--dot').trim() || '#888'
    }

    const build = () => {
      const r = parent.getBoundingClientRect()
      state.w = r.width
      state.h = r.height
      canvas.width = Math.floor(state.w * state.dpr)
      canvas.height = Math.floor(state.h * state.dpr)
      canvas.style.width = `${state.w}px`
      canvas.style.height = `${state.h}px`
      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0)
      const dots = []
      const s = state.spacing
      const offX = (state.w % s) / 2
      const offY = (state.h % s) / 2
      for (let y = offY; y < state.h; y += s) {
        for (let x = offX; x < state.w; x += s) dots.push({ x, y })
      }
      state.dots = dots
      if (!state.hasPointer) {
        state.target.x = state.w * 0.7
        state.target.y = state.h * 0.4
      }
    }

    const draw = () => {
      const { w, h, dots, pointer, target } = state
      // spring toward target
      pointer.x += (target.x - pointer.x) * 0.12
      pointer.y += (target.y - pointer.y) * 0.12
      if (!state.hasPointer || touch) {
        state.t += 0.006
        target.x = w * (0.5 + 0.35 * Math.cos(state.t))
        target.y = h * (0.45 + 0.3 * Math.sin(state.t * 1.3))
      }
      ctx.clearRect(0, 0, w, h)
      const radius = Math.min(w, h) * 0.32
      const base = resolved === 'dark' ? 0.18 : 0.22
      ctx.fillStyle = state.color
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i]
        const dx = d.x - pointer.x
        const dy = d.y - pointer.y
        const dist = Math.hypot(dx, dy)
        const k = Math.max(0, 1 - dist / radius)
        const ease = k * k * (3 - 2 * k)
        const push = ease * 14
        const nx = dist > 0 ? dx / dist : 0
        const ny = dist > 0 ? dy / dist : 0
        const size = 1 + ease * 2.2
        ctx.globalAlpha = base + ease * 0.75
        ctx.beginPath()
        ctx.arc(d.x + nx * push, d.y + ny * push, size, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    const loop = () => {
      if (!state.visible) return
      draw()
      state.raf = requestAnimationFrame(loop)
    }

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect()
      state.target.x = e.clientX - r.left
      state.target.y = e.clientY - r.top
      state.hasPointer = true
    }
    const onLeave = () => {
      state.hasPointer = false
    }

    const io = new IntersectionObserver(([entry]) => {
      state.visible = entry.isIntersecting && document.visibilityState === 'visible'
      cancelAnimationFrame(state.raf)
      if (state.visible) state.raf = requestAnimationFrame(loop)
    })
    const onVis = () => {
      state.visible = document.visibilityState === 'visible'
      cancelAnimationFrame(state.raf)
      if (state.visible) state.raf = requestAnimationFrame(loop)
    }
    const ro = new ResizeObserver(build)

    readColor()
    // Re-read once the lens/theme CSS has definitely applied.
    const colorTimer = setTimeout(readColor, 50)
    build()
    io.observe(canvas)
    ro.observe(parent)
    document.addEventListener('visibilitychange', onVis)
    parent.addEventListener('pointermove', onMove)
    parent.addEventListener('pointerleave', onLeave)
    state.raf = requestAnimationFrame(loop)

    return () => {
      clearTimeout(colorTimer)
      cancelAnimationFrame(state.raf)
      io.disconnect()
      ro.disconnect()
      document.removeEventListener('visibilitychange', onVis)
      parent.removeEventListener('pointermove', onMove)
      parent.removeEventListener('pointerleave', onLeave)
    }
  }, [reduced, touch, narrow, lensId, resolved])

  if (reduced) return <div className="pointer-field pointer-field--static" aria-hidden="true" />
  return <canvas ref={canvasRef} className="pointer-field" aria-hidden="true" />
}
