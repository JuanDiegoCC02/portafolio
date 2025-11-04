import React from 'react'
import PerfilCardIP from '../components/PerfilCardIP'
import PortafolioNav from '../components/PortafolioNav'
import PortafolioFooter from '../components/PortafolioFooter'

function Perfil() {
  return (
    <div>
        <header>

        </header>
        <nav>
          <PortafolioNav/>
        </nav>
        <main>
          <PerfilCardIP/>
        </main>
        <footer>
        <PortafolioFooter/>
        </footer>
    </div>
  )
}

export default Perfil