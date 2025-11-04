import React from 'react'
import "../styles/PortadaNav.css";

import { Link } from 'react-router-dom'

function PortafolioNav() {

  return (
        
      <div className='containerNavPortada'>
        <ul className='ulNavPortada'>
          <li className='liNavPortada'><Link className='linkNavPortada' to="/">Portada</Link></li>
          <li className='liNavPortada'><Link className='linkNavPortada' to="/perfil">Perfil</Link></li>
          <li className='liNavPortada'><Link className='linkNavPortada' to="/proyectosPage">Proyectos</Link></li>

        </ul>
      </div>
      
  )
}

export default PortafolioNav