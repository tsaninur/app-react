import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/app-react">  {/* Set basename for GitHub Pages */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
