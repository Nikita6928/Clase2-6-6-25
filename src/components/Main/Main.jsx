import './Main.css'

const Main =()=> {
    //Simulando una lista de productos recibida desde una API//
    //Ahora voy a crear el array//

    const products[ 
       {
        nombre:Bicicleta,
        precio:1000,
        descripcion: 20 cambios,cuadro de alumninio, disponible en todos los rodados,
       },

       {
        nombre:Computadora
        precio:3000,
        descripcion:Windows 11 instalado, paquete office con licencia, 16 de menoria Ram
       },

       {
        nombre:Silla gamer
        precio:2000,
        descripcion:Tapizado de eco-cuerina, altura regulable, fácil de limpiar
       }

       
    ];                                                  

    return(
     <main>
  <section className="banner">
 <h1>Bienvenidos a la tienda</h1>
 <h2>Los mejores precios de la ciudad</h2>
  </section>

  <section className="productsList">
    
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

  </section>
 </main>

    )

}

export default Main