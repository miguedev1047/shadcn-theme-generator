import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@/features/providers/theme-provider'
import App from '@/App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider
      defaultTheme='dark'
      storageKey='vite-ui-theme'
    >
      <App />
    </ThemeProvider>
  </StrictMode>
)
