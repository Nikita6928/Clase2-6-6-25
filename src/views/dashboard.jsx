/* No necesito estas importaciones, porque tengo el Layout, tampoco necesito
el fragment, porque todo lo que está dentro del <Layout></Layout> es la propiedad children,que
me va a mostrar todas las vistas.
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"*/

import Layout from "../components/Layout/Layout"
import { useEffect, useState } from "react"
import { db } from "../config/firebase"
import { collection, addDoc, doc } from "firebase/firestore"
import "../styles/Dashboard.css"
import { Link, useNavigate } from "react-router-dom"

const Dashboard = () => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    //Creo un estado, para manejar un error
    const [error, setError] = useState(null)
    const [isDisabled, setIsDisabled] = useState(true)
    const [message, setMessage] = useState("")
    const [success, setSuccess] = useState(false)

    const navigate = useNavigate()

    //Referencia a la colección de productos en firestore
    const productosRef = collection(db, "productos")

    //Función para agregar un producto en firestore
    const createProduct = async (productData) => {
        const createdAt = Date.now()
        const updateAt = Date.now()

        console.log(createdAt, updateAt)
        try {
            const productRef = await addDoc(productosRef, productData)
            return productRef
        } catch (error) {
            console.log("Error al cargar el producto")

        }
    }
    //Manejadores para los inputs del formulario
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

    //Manejador del envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault()
        setError("")
        setSuccess(false)


        //Validaciones. Si no hay nombre o si no hay precio o si no hay description
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

        //Creo el objeto para el nuevo producto
        const newProduct = { name, price, description }
        //Guardar en la base de datos al nuevo producto
        //Esta función es asyncrona
        try {
            await createProduct(newProduct)
            setMessage("Producto agregado con éxito")
            setName("")
            setPrice(0)
            setDescription("")
            //Validar envío con éxito para mostrar link de dirección al home
            setSuccess(true)

        } catch (error) {
            setError(error.message)
        }

    }

    useEffect(() => {

        if (name && price && description) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }


    }, [name, price, description])

    return (

        <Layout>
            <section id="admin-section">
                <h1>Panel de administración</h1>
                <p>Aquí puedes administrar todos tus productos.  Puedes agregar, modificar o borrar
                    lo que deseés</p>

                <section className="admin-form-section">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Nombre del producto:</label>
                        <input type="text" name="name" id="name" onChange={handleName} value={name} />

                        <label htmlFor="price">Precio del producto:</label>
                        <input type="number" name="price" id="price" onChange={handlePrice} value={price} />

                        <label htmlFor="description">Descripción del producto:</label>
                        <textarea name="description" id="description" onChange={handleDescription} value={description}></textarea>

                        <button disabled={isDisabled}>Agregar producto</button>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        {message && <p style={{ color: "green" }}>{message}</p>}
                        {success && <Link to={"/"}>Ir a home</Link>}

                    </form>
                </section>
            </section>
        </Layout>

    )
}

export default Dashboard
