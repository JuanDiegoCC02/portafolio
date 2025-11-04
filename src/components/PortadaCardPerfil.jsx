import React from 'react'
import "../styles/PortadaCardPerfil.css";
import ft_Perfil from "../imagenes/Ft Perfil.webp";
import { Link } from 'react-router-dom'
function PortadaCardPerfil() {
  return (
    <div>
        
    <div>

    <div className='containerFtPerfilPortd'>
        <a href="/perfil">
        < img link src={ft_Perfil} alt="Foto perfil"  width={150} height={150} className='FtPerfilPortada'/>
        </a>
    </div>

        <div className='containerCardPerfil'>
            <h2 className='titleName'>Juan Diego Corella Camacho</h2>
            <p className='infoSitePortada'>Programador Full-Stack || DEMO LAB </p>
            <p className='infoSitePortada'>Innovación, Creación y Conexión</p>
        </div>
    </div>

        <div>
            <h4>Bienvenidos!</h4>
        </div>

    </div>
  )
}

export default PortadaCardPerfil