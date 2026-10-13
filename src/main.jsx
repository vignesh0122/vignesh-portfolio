import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'motion/react'
import { LensProvider } from './context/LensProvider.jsx'
import { ThemeProvider } from './context/ThemeProvider.jsx'
import { HighlightProvider } from './context/HighlightProvider.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <LensProvider>
          <HighlightProvider>
            <App />
          </HighlightProvider>
        </LensProvider>
      </ThemeProvider>
    </MotionConfig>
  </StrictMode>,
)
