import React from 'react'
import ProyectoCardInfo from '../components/ProyectoCardInfo'
import PortafolioNav from '../components/PortafolioNav'
import PortafolioFooter from '../components/PortafolioFooter'

function ProyectoInfo() {
  return (
      <div>
      <header></header>
      <nav> <PortafolioNav/> </nav>
      <main> <ProyectoCardInfo/> </main>
      <footer> <PortafolioFooter/> </footer>
    </div>
  )
}

export default ProyectoInfo