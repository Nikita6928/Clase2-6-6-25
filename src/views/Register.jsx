/* Ya no es necesario estas importaciones, porque ahora tengo el componente Layout
EL fragmen, tampoco es nedesario, porque tengo el elemento padre, el Layout.
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"*/

import { useState, useEffect } from "react"
import Layout from "../components/Layout/Layout"
import "../styles/Register.css"


const Register = () => {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEMail] = useState("")
    const [passwoord, setPassword] = useState("")
    //Estado para el mensaje al usuario registrado
    const [message, setMessage] = useState("")
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
    useEffect(() => {
        if (name && surname && email && password && message) {
            setMessage('Felicitaciones¡¡¡ te has registrado perfectamente')
        } else {
            setMessage('Te falta rellenar algún campo requerido o algún error')
        }
    })
    return (
        <Layout>
            <section id="register-section">
                <h1>Regístrate</h1>
                <form>
                    <label htmlFor="name">Ingresa tu nombre</label>
                    <input type="text" name="name" id="name" onChange={handleName} />
                    <input type="text" name="name" id="surname" onChange={handleSurname} />
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" name="email" id="email" onChange={handleEmail} />


                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" name="password" id="password" onChange={handlePassword} />
                    <button>Registrarse</button>
                    <h2>{handleMessage}</h2>
                </form>

            </section>
        </Layout>
    )

}
export default Register