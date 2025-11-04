import React from 'react'

import PortafolioNav from '../components/PortafolioNav'
import PortadaCardPerfil from '../components/PortadaCardPerfil'
import PortafolioFooter from '../components/PortafolioFooter'
import PortadaCarrouselProyectos from '../components/PortadaCarrouselProyectos'


function Portada() {
  return (
    <div>
          <header>

        </header>
        <nav>
        <PortafolioNav/>
        </nav>
        <main>
        <PortadaCardPerfil/>
        
        <PortadaCarrouselProyectos/>
        
        </main>
        <footer>
        <PortafolioFooter/>
        </footer>
    </div>
  )
}

export default Portada