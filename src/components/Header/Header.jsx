import "./Header.css"
import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

const Header = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
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