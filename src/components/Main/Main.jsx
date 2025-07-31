import { useEffect, useState } from 'react'
import { db } from "../../config/firebase"
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import './Main.css'

const Main = () => {

   const [productos, setProductos] = useState([])
   const [error, setError] = useState(null)
   //Simulación de usuario conectado
   //const [user, setUser] = useState(true)

   //Traer estado del usuario del contexto
   const { user } = useAuth()


   const fetchingProducts = async () => {
      const productosRef = collection(db, "productos")

      const snapshot = await getDocs(productosRef)
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setProductos(docs)
   }



   /*
    const producto = [
       {
          id: 1,
          nombre: "Los Esteros del Iberá",
          imagen: "src/assets/imagenes/losEsterosDelIbera.jfif",
          precio: 10000,
          descripcion: " Para dos personas, con pensión completa, para 7 días y 6 noches",
          descripcionCompleta: "Excursiones incluidas.",
          sku: "esterIb-1"
       },
 
       {
          id: 2,
          nombre: "El tren de las nubes",
          imagen: "src/assets/imagenes/trenAlasNubes.jfif",
          precio: 15000,
          descripcion: "Nunca viviste algo igual",
          descripcionCompleta: "En las Termas, los viajeros pueden disfrutar de la tranquilidad y la intimidad, lejos del ruido y del ritmo estresante de las grandes ciudades, en una experiencia vinculada al bienestar y la salud, con todos los servicios necesarios para tener una excelente estadía.",
          sku: "treNub-2",
       },
 
       {
 
          id: 3,
          nombre: "Termas de Fiambalá",
          imagen: "src/assets/imagenes/termasDeFiambala.jfif",
          precio: 2000,
          descripcion: "Es un viaje único y especial.",
          descripcionCompleta: "combina sus servicios en dos tramos: Ruta Nacional N°51, con paradas fotográficas en puntos panorámicos, para luego embarcar en la mágica experiencia del Tren a las Nubes, que se manifiesta en todo su esplendor al arribar al imponente viaducto. ",
          sku: "terFiam-3",
       },
 
       {
          id: 4,
          nombre: "Las leñas",
          imagen: "src/assets/imagenes/lasLeñas.jfif",
          precio: 2000,
          descripcion: "En pleno corazón de la Cordillera de los Andes, en la provincia de Mendoza",
          descripcionCompleta: " A tan sólo 1.200 km de Buenos Aires, se encuentra el centro de ski número 1 de América Latina: Las Leñas.",
          sku: "lasle-4",
       },
    ]*/


   useEffect(() => {
      fetchingProducts()
   }, [])

   const handleDeleteProduct = async (id) => {
      try {
         if (confirm("Estás seguro de que deseas borrar el producto")) {
            await deleteDoc(doc(db, "productos", id))
            setProductos(productos.filter(p => p.id !== id))
         }
      } catch (error) {
         console.log(error)
         setError("Error al borrar el producto")
      }
   }
   return (
      <main>
         <section className="banner">
            <h1> Viajá por Argentina</h1>
            <h2>El país de los 5 continentes</h2>
         </section>

         <section className="productList">
            {
               error && <p>{error}</p>
            }
            {
               productos.length == 0 && !error && <p>No hay productos disponibles</p>
            }
            {

               productos.map((producto) => {
                  return (
                     <div className="product">
                        <h2>{producto.name}</h2>
                        <p>${producto.price}</p>
                        <p>{producto.description}</p>
                        {


                           user && <>
                              <div>
                                 {producto.createdAt && <p>Producto creado:{new Date(producto.createdAt).toLocaleString()}</p>}
                                 {producto.createdAt !== producto.updateAt && <p><strong>Ultima actualización:</strong> {new Date(producto.updateAt).toLocaleString()}</p>}
                              </div>


                              <div className="user-buttons">
                                 <Link to={`/editar-producto/${producto.id}`}>Editar producto</Link>
                                 <button onClick={() =>
                                    handleDeleteProduct(producto.id)}>Borrar</button>
                              </div>
                           </>
                        }
                        <button>Comprar</button>
                     </div >

                  )

               })

            }
         </section>
      </main >

   )

}

export default Main