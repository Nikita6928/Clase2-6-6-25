

import "./Home.css"

function Home() {
 

  return (
    <>
  
   <header>
    <nav>
      <ul>
        <li><a href="#"></a>Inicio</li>
        <li><a href="/admin"></a>Panel de administrador</li>
        <li><a href="/login"></a>Login</li>
      </ul>
    </nav>
   </header>
   <main>
    <section className="banner">
    <h1>Bienvenidos a la tienda</h1>
    <h2>Los mejores precios de la ciudad</h2>
    </section>
    <section className="productList">
<div className="products">
  <h2>Bicicleta</h2>
  <p>Precio: 1000</p>
  <p>20 cambios, cuadro de aluminio,disponible en todos los rodados</p>
  <button>Comprar</button>
</div>

<div className="products">
  <h2>Computadora</h2>
  <p>Precio: 3000</p>
  <p>Windows 11 instalado, paquete office con licencia,16 de memoria ram </p>
  <button>Comprar</button>
</div>

<div className="products">
  <h2>Silla gamer</h2>
  <p>Precio: 2000</p>
  <p>Tapizado de eco-cuerina, altura regulable, fácil de limpiar</p>
  <button>Comprar</button>
</div>
    </section>
   </main>
   <footer>
    <p>Sitio desarrollado por Nikita Pizarro Cortés</p>
   </footer>
   </>
  )
}

export default Home
