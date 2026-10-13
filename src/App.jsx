import { useMemo } from 'react'
import { useLens } from './hooks/useLens.js'
import { useTheme } from './hooks/useTheme.js'
import { useHighlight } from './hooks/useHighlight.js'
import { useHotkeys } from './hooks/useHotkeys.js'
import { SkipLink } from './components/layout/SkipLink.jsx'
import { TopBar } from './components/layout/TopBar.jsx'
import { LensWipe } from './components/layout/LensWipe.jsx'
import { Footer } from './components/layout/Footer.jsx'
import { Hero } from './components/hero/Hero.jsx'
import { Timeline } from './components/timeline/Timeline.jsx'
import { Projects } from './components/projects/Projects.jsx'
import { Skills } from './components/skills/Skills.jsx'
import { Publications } from './components/publications/Publications.jsx'
import { Contact } from './components/contact/Contact.jsx'

function App() {
  const { setLens } = useLens()
  const { toggle } = useTheme()
  const { clear } = useHighlight()

  const hotkeys = useMemo(
    () => ({
      1: () => setLens('ai'),
      2: () => setLens('cloud'),
      3: () => setLens('research'),
      t: toggle,
      T: toggle,
      Escape: clear,
    }),
    [setLens, toggle, clear],
  )
  useHotkeys(hotkeys)

  return (
    <>
      <SkipLink />
      <TopBar />
      <LensWipe />
      <main id="main">
        <Hero />
        <Timeline />
        <Projects />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
