import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Layout from "../components/Layout/Layout"
import "../styles/Login.css"
import { useEffect, useState } from "react"

//import { useState, useEffect } from "react"


const Login = () => {
    //Creo los estados para manejar el correo, nombre y clave
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    return (

        <Layout>
            <section id="login-section">
                <h1>Login</h1>
                <form>
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" name="email" id="email" onChange={handleEmail} />

                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" name="password" id="passwoord" onChange={handlePassword} />
                    <button>Ingresar</button>
                </form>

            </section>
        </Layout>
    )
}
export default Login