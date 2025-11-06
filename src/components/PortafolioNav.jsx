import React from 'react'
import "../styles/PortadaNav.css";

import { NavLink } from 'react-router-dom'

function PortafolioNav() {

  return (
        
      <div className='containerNavPortada'>
        <ul className='ulNavPortada'>
          <li className='liNavPortada'><NavLink className='linkNavPortada' to="/">Portada</NavLink></li>
          <li className='liNavPortada'><NavLink className='linkNavPortada' to="/perfil">Perfil</NavLink></li>
          <li className='liNavPortada'><NavLink className='linkNavPortada' to="/proyectosPage">Proyectos</NavLink></li>

        </ul>
      </div>
      
  )
}

export default PortafolioNav