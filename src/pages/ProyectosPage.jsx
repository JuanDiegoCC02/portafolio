import React from 'react'
import PortafolioNav from '../components/PortafolioNav'
import PortafolioFooter from '../components/PortafolioFooter'
import CarrouselProyectosPage from '../components/CarrouselProyectosPage'

function ProyectosPage() {
  return (
   <div>
      <header></header>
      <nav> <PortafolioNav/> </nav>
      <main> <CarrouselProyectosPage/> </main>
      <footer> <PortafolioFooter/> </footer>
    </div>
  )
}

export default ProyectosPage