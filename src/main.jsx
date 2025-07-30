import "./index.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './router/Router'
import { AuthContext } from "./context/AuthContext"
/*import Home from './views/Home.jsx'*/


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <Router />
    </AuthContext>
  </StrictMode>
)
