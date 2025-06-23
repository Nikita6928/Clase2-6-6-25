/* Ya no es necesario estas importaciones, porque ahora tengo el componente Layout
EL fragmen, tampoco es nedesario, porque tengo el elemento padre, el Layout.
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"*/

import Layout from "../components/Layout/Layout"
import "../styles/Register.css"


const Register = () => {
    return (

        <Layout>
            <section id="register-section">
                <h1>Regístrate</h1>
                <form>
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" name="email" id="email" />

                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" name="password" id="passwoord" />
                    <button>Registrarse</button>
                </form>

            </section>
        </Layout>

    )
}
export default Register