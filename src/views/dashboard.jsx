/* No necesito estas importaciones, porque tengo el Layout, tampoco necesito
el fragment, porque todo lo que está dentro del <Layout></Layout> es la propiedad children,que
me va a mostrar todas las vistas.
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"*/

import Layout from "../components/Layout/Layout"
import "../styles/Dashboard.css"
import { useEffect, useState } from "react"

const Dashboard = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    //Creo un estado, para manejar un error
    const [error, setError] = useState(null)
    const [isDisabled, setIsDisabled] = useState(false)


    const handleName = (event) => {
        setName(event.target.value)
    }

    // El manejador del precio
    const handlePrice = (event) => {
        setPrice(Number(event.target.value))
    }
    /*El manejador de la descripción*/
    const handleDescription = (event) => {
        setDescription(event.target.value)
    }


    /*creo que esta función, guarda los datos ingresados por el*/
    const handleSubmit = (event) => {
        event.preventDefault()
        setError("")
        //Si no hay nombre o si no hay precio o si no hay description
        if (!name || !price || !description) {
            setError("Necesita completar los campos")
            useEffect(() => { }, [nombre, Precio, description])
            if (name && price && description) {
                setIsDisabled(false)
            }
            return

        }
        //Necesitas completar los campos

        const newProduct = { name, price, description }

        //Guardar en la base de datos al nuevo producto
        console.log("Nuevo producto:", newProduct)


        //Tomo el setName y lo limpio
        setName("")
        //Tomo el setPrice y lo limpio
        setPrice(0)
        //Tomo el setDescription y tb lo limpio
        setDescription("")
        //Se limpia todo menos ese cerito

    }

    return (

        <Layout>
            <section id="admin-section">
                <h1>Panel de administración</h1>
                <p>Aquí puedes administrar todos tus productos.  Puedes agregar, modificar o borrar
                    lo que deseés
                </p>

                <section className="admin-form-section">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Nombre del producto:</label>
                        <input type="text" name="name" id="name" onChange={handleName} value={name} />

                        <label htmlFor="price">Precio del producto:</label>
                        <input type="number" name="price" id="price" onChange={handlePrice} value={price} />

                        <label htmlFor="description">Descripción del producto:</label>
                        <textarea name="description" id="description" onChange={handleDescription} value={description}></textarea>

                        <button disabled={isDisabled} style={{ backgroundColor: isDisabled && "brown", cursor: isDisabled && "not-allowed" }}>Agregar producto</button>
                        {error && <p style={{ color: "brown" }}>{error}</p>}
                    </form>
                </section>
            </section>
        </Layout >

    )
}
export default Dashboard