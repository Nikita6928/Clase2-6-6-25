import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Layout from "../components/Layout/Layout"
import "../styles/Login.css"
import { useState } from "react"


const Login = () => {

}


return (
    /*
        <Layout>
            <h1>Login</h1>
            <form>
                <label htmlFor="name="></label>
                <input type="text" name="name" placeholder="Ingresá tu nombre de usuario" />
                <button>Ingresar</button>
            </form>
        </Layout>
 
    </>*/



    <Layout>
        <section id="login-section">
            <h1>Login</h1>
            <form>
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="password">Contraseña:</label>
                <input type="password" name="password" id="passwoord" />
                <button>Ingresar</button>
            </form>

        </section>
    </Layout>
}
)

export default Login