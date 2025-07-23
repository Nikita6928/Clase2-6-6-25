import { link } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import { useState } from "react"

const EDitViajes = () => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [sku, setSku] = useState("")


    const handleName = (event) => {
        setName(event.target.value)
    }

    const handlePrice = (event) => {
        setPrice(number(event.target.value))
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleSku = (e) => {
        setSku(e.target.value)
    }

    //Manejador del envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault()
        setError("")

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

        //Tomo el setName y lo limpio
        setName("")
        //Tomo el setPrice y lo limpio
        setPrice(0)
        //Tomo el setDescription y tb lo limpio
        setDescription("")

        useEffect(() => {
            [name, price, description]
            if (name && price && description)
                setIsDisabled(false)
        },)
    }

    return (
        <Layout>
            <section id="admin-section">
                <h1>Panel de Administración</h1>
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


                        <button disabled={isDisabled} style={{ backgroundColor: isDisabled && "green", cursor: isDisabled && "not-allowed" }}>Agregar producto</button>
                        {error && <p style={{ color: "brown" }}>{error}</p>}
                        {message && <p style={{ color: grey }}>{message}</p>}
                        {sucess && <link to={"/"}>Ir a home</link>}

                    </form>
                </section>
            </section>
        </Layout>

    )
}
export { EDitViajes }
