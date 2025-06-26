import './Main.css'

const Main = () => {
   //Simulando una lista de productos recibida desde una API//
   //Ahora voy a crear el array//

   const producto = [
      {


         imagen: "paisaje2.jpg",
         nombre: "Los Eteros del Iberá",
         precio: 10000,
         descripcion: " Para dos personas, con pensión completa, para 7 días y 6 noches",
         descripcionCompleta: "Excursiones incluidas."
      },

      {
         nombre: "Computadora",
         precio: 3000,
         descripcion: "Windows 11 instalado, paquete office con licencia, 16 de menoria Ram",
         descripcionCompleta: "Dispositivos de almacenamiento,...."
      },

      {
         nombre: "Silla gamer",
         precio: 2000,
         descripcion: "Tapizado de eco-cuerina, altura regulable, fácil de limpiar",
      },

      {
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

      }


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


                           <h3><img src="assets/paisaje.jpg" />{producto.imagen}</h3>
                           <h2>{producto.nombre}</h2>
                           <p>{producto.precio}</p>
                           <p>{producto.descripcion}</p>
                           <p><h3>Descripción Completa</h3>{producto.descripcionCompleta}</p>
                           <button>Comprar</button>
                        </div>


                     </>
                  )

               })

            }
         </section>
      </main>

   )

}

export default Main