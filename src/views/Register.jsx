/* Ya no es necesario estas importaciones, porque ahora tengo el componente Layout
EL fragmen, tampoco es nedesario, porque tengo el elemento padre, el Layout.
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"*/

import { useState } from "react"
import Layout from "../components/Layout/Layout"
import "../styles/Register.css"


const Register = () => {

    const [name, setName] = useState("")
    const [email, setEMail] = useState("")
    const [passwoord, setPassword] = useState("")

    //El controlado del evento name
    const handleName = (event) => {
        setName(event.target.value)
    }
    //El manejador del correo
    const handEmail = (event) => {
        setEMail(event.target.value)
    }
    //El manejador de la contraseña
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    return (
        <Layout>
            <section id="register-section">
                <h1>Regístrate</h1>
                <form>
                    <label htmlFor="name">Ingresa tu nombre</label>
                    <input type="text" name="name" id="name" onChange={handleName} />
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" name="email" id="email" onChange={handEmail} />

                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" name="password" id="passwoord" onChange={handlePassword} />
                    <button>Registrarse</button>
                </form>

            </section>
        </Layout>
    )

}
export default Register