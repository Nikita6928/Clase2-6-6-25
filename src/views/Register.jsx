/* Ya no es necesario estas importaciones, porque ahora tengo el componente Layout
EL fragmen, tampoco es nedesario, porque tengo el elemento padre, el Layout.
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"*/

import { useState, useEffect } from "react"
import Layout from "../components/Layout/Layout"
import "../styles/Register.css"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../config/firebase"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


const Register = () => {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEMail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [message, setMessage] = useState("")

    const navigate = useNavigate()
    const { register } = useAuth()

    //El manejador del evento name
    const handleName = (event) => {
        setName(event.target.value)
    }
    //El manejador del evento apellido
    const handleSurname = (event) => {
        setSurname(event.target.value)
    }
    //El manejador del correo
    const handleEmail = (event) => {
        setEMail(event.target.value)
    }
    //El manejador de la contraseña
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    //El manejador para el mensaje al usuario
    const handleMessage = (event) => {
        setMessage(event.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setMessage(null)

        if (!email || !password) {
            setError("Debes completar los campos...")
            return
        }
        //Intentar registrar o guardar un usuario. Se utiliza try y catch, cuando la función es async
        try {
            await register(email, password)
            setMessage("Usuario registrado con éxito....")
            setEMail("")
            setPassword("")
            setTimeout(() => {
                setMessage("Redirigiendo al Home...")
            }, 2000)
            setTimeout(() => {
                navigate("/")
            }, 3000)
        } catch (error) {
            setError(error.message)
        }



    }

    return (
        <Layout>
            <section id="register-section">
                <h1>Regístrate</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Ingresa tu nombre</label>
                    <input type="text" name="name" id="name" onChange={handleName} />
                    <label htmlFor="surname">Ingresa tu apellido</label>
                    <input type="text" name="name" id="surname" onChange={handleSurname} />
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) =>
                            setEMail(e.target.value)} />


                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) =>
                            setPassword(e.target.value)
                        } />
                    <button>Registrarse</button>
                </form>
                <h5 className="error-message">{error}</h5>
                <h5 className="success-message">{message}</h5>
            </section>
        </Layout>
    )

}
export default Register