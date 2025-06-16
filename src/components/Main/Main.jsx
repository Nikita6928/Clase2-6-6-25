import './Main.css'

const Main = () => {
   //Simulando una lista de productos recibida desde una API//
   //Ahora voy a crear el array//

   const producto = [
      {
         nombre: "Bicicleta",
         precio: 1000,
         descripcion: " 20 cambios,cuadro de alumninio, disponible en todos los rodados",
         descripcionCompleta: "Diseño aeródinamico, cuadro ligero,etc."
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
            <h1>Bienvenidos a la tienda</h1>
            <h2>Los mejores precios de la ciudad</h2>
         </section>

         <section className="productsList">
            {/*
            <div className="products">
               <h2>Bicicleta</h2>
               <p>Precio:1000</p>
               <p>20 cambios, cuadro de aluminio,disponible en todos los rodados</p>
               <button>Comprar</button>
            </div>

            <div className="products">
               <h2>Computadora</h2>
               <p>Precio:3000</p>
               <p>Windows 11 instalado, paquete office con licencia, 16 de menoria Ram</p>
               <button>Comprar</button>
            </div>

            <div className="products">
               <h2>Silla Gamer</h2>
               <p>Precio:2000</p>
               <p>Tapizado de eco-cuerina, altura regulable, fácil de limpiar</p>
               <button>Comprar</button>
            </div>
            
            <div className="products">
                           <h2>Carpa</h2>
                           <p>Precio:2000</p>
                           <p>Para 4 personas, con cubre techo, soporta alertas rojas de tormetas </p>
                           <button>Comprar</button>
                        </div>

                        <div className="products">
                           <h2>Play station 10</h2>
                           <p>Precio:2500</p>
                           <p>Con memoria interna de 1000 gb, etc</p>
                           <button>Comprar</button>
                        </div>
            
            
            */
            }

            {
               /*El colback es una función que se ejecuta cada vez que pasa algo*/
               producto.map((producto, index) => {
                  return (
                     <>
                        <div className="products">
                           <h2>{producto.nombre}</h2>
                           <p>{producto.precio}</p>
                           <p>{producto.descripcion}</p>
                           <p>{producto.descripcionCompleta}</p>
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