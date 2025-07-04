import { useEffect, useState } from 'react'
import './Main.css'


const Main = () => {
   //Simulando una lista de productos recibida desde una API//
   //Ahora voy a crear el array//

   const producto = [
      {

         nombre: "Los Esteros del Iberá",
         imagen: "src/assets/imagenes/losEsterosDelIbera.jfif",
         precio: 10000,
         descripcion: " Para dos personas, con pensión completa, para 7 días y 6 noches",
         descripcionCompleta: "Excursiones incluidas.",
      },

      {
         id: 2,
         nombre: "El tren de las nubes",
         imagen: "src/assets/imagenes/trenAlasNubes.jfif",
         precio: 15000,
         descripcion: "Nunca viviste algo igual",
         descripcionCompleta: "En las Termas, los viajeros pueden disfrutar de la tranquilidad y la intimidad, lejos del ruido y del ritmo estresante de las grandes ciudades, en una experiencia vinculada al bienestar y la salud, con todos los servicios necesarios para tener una excelente estadía.",
      },

      {

         id: 3,
         nombre: "Termas de Fiambalá",
         imagen: "src/assets/imagenes/termasDeFiambala.jfif",
         precio: 2000,
         descripcion: "Es un viaje único y especial.",
         descripcionCompleta: "combina sus servicios en dos tramos: Ruta Nacional N°51, con paradas fotográficas en puntos panorámicos, para luego embarcar en la mágica experiencia del Tren a las Nubes, que se manifiesta en todo su esplendor al arribar al imponente viaducto. ",
      },

      {
         id: 4,
         nombre: "Las leñas",
         imagen: "src/assets/imagenes/lasLeñas.jfif",
         precio: 2000,
         descripcion: "En pleno corazón de la Cordillera de los Andes, en la provincia de Mendoza",
         descripcionCompleta: " A tan sólo 1.200 km de Buenos Aires, se encuentra el centro de ski número 1 de América Latina: Las Leñas.",
      },
   ]






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
                           <p><h2>Precio con descuento 20 % -</h2>{producto.precio}</p>
                           <p><h3>Descripción</h3>{producto.descripcion}</p>
                           <p><h3>Descripción Completa</h3>{producto.descripcionCompleta}</p>
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