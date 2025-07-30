import { useEffect, useState } from 'react'
import { db } from "../../config/firebase"
import { collection, getDocs, doc } from 'firebase/firestore'
import { Link } from "react-router-dom"
import './Main.css'

const Main = () => {

   const [productos, setProductos] = useState([])
   const [error, setError] = useState(null)
   const [user, setUser] = useState(true)

   const fetchingProduct = async () => {
      const productosRef = collection(db, "productos")

      const snapshot = await getDocs(productosRef)
      const docs = snapshot.docs.map((doc) => doc.data())
      console.log(docs)
      setProductos(docs)

   }




   //Ahora voy a crear el array,que pasa si comento todo este array?//

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
   ]
   useEffect(() => {
      //fetchingProduct()
   }, [])


   return (
      <main>
         <section className="banner">
            <h1> Viajá por Argentina</h1>
            <h2>El país de los 5 continentes</h2>
         </section>

         <section className="productsList">
            {

               producto.map((producto, index) => {
                  return (
                     <>

                        <div className="products">

                           <h2>{producto.nombre}</h2>
                           <img src={producto.imagen} alt={"imagen del producto" + producto.imagen} />
                           <h2>Precio con descuento 20 % -</h2>{producto.precio}
                           <h3>Descripción</h3>{producto.descripcion}
                           <h3>Descripción Completa</h3>{producto.descripcionCompleta}
                           {
                              user && <div className='user_buttons'>
                                 <button>Actualizar</button>
                                 <button>Borrar</button>
                              </div>
                           }
                           <p><button>Comprar Paquete</button></p>

                        </div >
                     </>
                  )

               })

            }
         </section>
      </main >

   )

}

export default Main