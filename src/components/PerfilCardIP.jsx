import React from 'react'
import "../styles/perfilCardIP.css";


function PerfilCardIP() {
  return (
    <div>
        <div className='containerTitlePage'>
            <h2 className='titlePage'>Perfil</h2>
        </div>


        <div className='containerNamePerfil'> 
            <h2 className='titleNamePerfil'>Juan Diego Corella Camacho</h2>
            <h4 className='studyNamePerfil'>Programador Full-Stack</h4>
            
        </div>

        <div className='containerInfoMe'>
          <h4 className='title_sobreMi'>Sobre Mí</h4>
            <p className='p_infoMe'>
            Soy un programador Full Stack con una solida formación tanto en el front-end como en el back-end. 
             
             Me apasiona aprender y aplicar nuevas tecnologías para crear soluciones funcionales, intuitivas y eficientes. Tambien me considero una persona detallista, enfocada en la calidad y estable, capaz de trabajar con comunicación y en equipo.
            </p>
        </div>

        <div className='containerTecnologias'>
          <h4 className='titleTecnologias'>Tecnologias</h4>
          <ul className='ulTecnologias'>
            <li className='liTecnologias'>HTML</li>
            <li className='liTecnologias'>CSS</li>
            <li className='liTecnologias'>JavaScript</li>
            <li className='liTecnologias'>React</li>
            <li className='liTecnologias'>Python</li>
            <li className='liTecnologias'>DJango</li>
            <li className='liTecnologias'>Node.js</li>
            <li className='liTecnologias'>MySQL</li>
            <li className='liTecnologias'>(JWT) JSON Web Token</li>
            
          </ul>
        </div>

        <div className='containerHerramientas'>
          <h4 className='titleHerramientas'>Herramientas</h4>
          <ul className='ulHerramientas'>
            <li className='liHerramientas'>Postman</li>
            <li className='liHerramientas'>DJango Admin</li>
            <li className='liHerramientas'>GitHub</li>
            <li className='liHerramientas'>Slack</li>
            <li className='liHerramientas'>Trello</li>
            <li className='liHerramientas'>Bootstrap</li>
            <li className='liHerramientas'>Tailwind</li>
            <li className='liHerramientas'>Figma</li>
            <li className='liHerramientas'>Canva</li>
          </ul>
        </div>


    </div>
  )
}

export default PerfilCardIP