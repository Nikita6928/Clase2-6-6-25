

import "../styles/Home.css"
/*import Header from '../components/Header/Header.jsx'*/


function Home() {


  return (
    <>
 <header>
  <nav>
    <ul>
      <li><a href="#"></a>Inicio</li>
      <li><a href="/admin">Panel del administrador</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </nav>
 </header>

 <main>
  <section className="banner">
 <h1>Bienvenidos a la tienda</h1>
 <h2>Los mejores precios de la ciudad</h2>
  </section>

  <section className="productsList">
   <div>
    <h2>Bicicleta</h2>
    <p>Precio:1000</p>
    <p>20 cambios, cuadro de aluminio,disponible en todos los rodados</p>
    <button>Comprar</button>
   </div>

   <div>
    <h2>Computadora</h2>
    <p>Precio:3000</p>
    <p>Windows 11 instalado, paquete office con licencia, 16 de menoria Ram</p>
    <button>Comprar</button>
   </div>

<div>
    <h2>Silla Gamer</h2>
    <p>Precio:2000</p>
    <p>Tapizado de eco-cuerina, altura regulable, fácil de limpiar</p>
    <button>Comprar</button>
   </div>

  </section>
 </main>

 <footer>
  <p>Sitio creado por Nikita Pizarro Cortés</p>
 </footer>

</>
  )
}

export default Home
