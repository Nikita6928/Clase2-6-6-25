/* No necesito estas importaciones, porque tengo el Layout, tampoco necesito
el fragment, porque todo lo que está dentro del <Layout></Layout> es la propiedad children,que
me va a mostrar todas las vistas.
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"*/

import Layout from "../components/Layout/Layout"
import "../styles/Dashboard.css"
import { useEffect, useState } from "react"
import { db } from "../config/firebase"
import { collection, addDoc } from "firebase/firestore"

const Dashboard = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    //Creo un estado, para manejar un error
    const [error, setError] = useState(null)
    const [isDisabled, setIsDisabled] = useState(false)
    const [message, setMessage] = useState("")
    //Creo el estado para el nuevo producto
    const productosRef = collection(db, "productos")

    const createProduct = async (productData) => {
        try {
            const productosRef = await addDoc(productosRef, productData)
            return productosRef
        } catch (error) {
            console.log("Error al cargar el producto")

        }
    }

    const handleName = (event) => {
        setName(event.target.value)
    }

    // El manejador del precio
    const handlePrice = (event) => {
        setPrice(Number(event.target.value))
    }
    /*El manejador de la descripción*/
    const handleDescription = async (event) => {
        setDescription(event.target.value)
    }


    /*creo que esta función, guarda los datos ingresados por el*/
    const handleSubmit = async (event) => {
        event.preventDefault()
        setError("")
    }
    //Si no hay nombre o si no hay precio o si no hay description
    if (!name || !price || !description) {
        setError("Necesita completar los campos")
        return
    }
    //Valido que el nombre no tenga menos de dos caracteres
    if (name.length < 2) {
        setError("El nombre debe tener un largo mínimo de 2 caracteres.")
        return
    }
    //Valido el valor que el precio sea mayor de cero
    if (price < 0) {
        setError("debes agregar un precio mayor a 0")
        return
    }
    useEffect(() => { }, [name, price, description])
    if (name && price && description) {
        setIsDisabled(false)
    }


    const newProduct = { name, price, description }
    //Guardar en la base de datos al nuevo producto
    createProduct(newProduct)
    /*console.log("Nuevo producto:", newProduct)
    setProductos([...productosRef, newProduct])
    localStorage.setItem("productos", JSON.stringify([...productos, newProduct]))*/


    //Tomo el setName y lo limpio
    setName("")
    //Tomo el setPrice y lo limpio
    setPrice(0)
    //Tomo el setDescription y tb lo limpio
    setDescription("")




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
                        {message && <p style={{ color: green }}>{message}</p>}
                    </form>
                </section>
            </section>
        </Layout>

    )
}
export default Dashboard