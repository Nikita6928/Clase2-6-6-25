import "./index.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './router/Router'
import { AuthProvider } from "./context/AuthContext"
/*import Home from './views/Home.jsx'*/


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <Router />
    </AuthProvider>

  </StrictMode>,
)
