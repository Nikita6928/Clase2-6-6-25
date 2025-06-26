import './Main.css'

const Main = () => {
   //Simulando una lista de productos recibida desde una API//
   //Ahora voy a crear el array//

   const producto = [
      {


         lugar: 1,
         nombre: "Los Esteros del Iberá",
         imagen: url("src/assets/paisaje.jpg"),
         precio: 10000,
         descripcion: " Para dos personas, con pensión completa, para 7 días y 6 noches",
         descripcionCompleta: "Excursiones incluidas."
      },

      {
         lugar: 2,
         nombre: "El tren de las nubes",
         imagen: url("src/assets/trenAlasNubes.jpg"),
         precio: 15000,
         descripcion: "Nunca viviste algo igual",
         descripcionCompleta: "En las Termas, los viajeros pueden disfrutar de la tranquilidad y la intimidad, lejos del ruido y del ritmo estresante de las grandes ciudades, en una experiencia vinculada al bienestar y la salud, con todos los servicios necesarios para tener una excelente estadía."
      },

      {

         lugar: 3,
         nombre: "Termas de Fiambalá",
         imagen: url("src/assets/termasDeFiambala.jpg"),
         precio: 2000,
         descripcion: "Es un viaje único y especial que combina sus servicios en dos tramos: Ruta Nacional N°51, con paradas fotográficas en puntos panorámicos, para luego embarcar en la mágica experiencia del Tren a las Nubes, que se manifiesta en todo su esplendor al arribar al imponente viaducto. ",
      },

      {
         lugar: 4,
         nombre: "Las leñas",
         imagen: url("src/assets/lasLeñas.jfif"),
         precio: 2000,
         descripcion: "Es un viaje único y especial que combina sus servicios en dos tramos: Ruta Nacional N°51, con paradas fotográficas en puntos panorámicos, para luego embarcar en la mágica experiencia del Tren a las Nubes, que se manifiesta en todo su esplendor al arribar al imponente viaducto. ",
      },

      /*{
         nombre: "Carpa",
         precio: 2000,
         descripcion: "Para 4 personas, con cubre techo, soporta alertas rojas de tormetas",
         descripcionCompleta: "soporta vientos fuerte,....."
      },

      {
         nombre: "Play station 10",
         precio: 2500,
         descripcion: "Con memoria interna de 1000 gb, etc",
         descripcionCompleta: "Tiempos de carga muy rápidos gracias al SSD, .....",
      },

      {
         nombre: "Impresora 3d",
         precio: 2500,
         descripcion: "Es una máquina que crea objetos tridimensionales a partir de un diseño digital",
         descripcionCompleta: "Las impresoras 3D pueden utilizar una variedad de materiales, como plásticos ABS y PLA, resinas, metales, cerámicas y compuestos.",

      }*/


   ];

   return (
      <main>
         <section className="banner">
            <h1> Viajá por Argentina</h1>
            <h2>El país de los 5 continentes</h2>
         </section>
         <section className="productsList">


            {
               /*El colback es una función que se ejecuta cada vez que pasa algo*/
               producto.map((producto, index) => {
                  return (
                     <>
                        <div className="products">

                           <h2>{producto.lugar}</h2>
                           <img src={producto.imagen} />
                           <h2>{producto.nombre}</h2>
                           <p>{producto.precio}</p>
                           <p>{producto.descripcion}</p>
                           <p><h3>Descripción Completa</h3>{producto.descripcionCompleta}</p>
                           <button>Comprar Paquete</button>
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