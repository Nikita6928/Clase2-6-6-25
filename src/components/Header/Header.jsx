import "./Header.css"
import { Link } from "react-router-dom"
import { useState } from "react"

const Header = () => {
  const [user, setUser] = useState(true)

  const handleLogout = () => {
    setUser(false)
  }
  return (
    <header>
      <nav>
        <ul>
          {
            user && <>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/admin">Panel del administrador</Link></li>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </>
          }
          {
            !user && <>
              <li><Link to="/registro">Registro</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header