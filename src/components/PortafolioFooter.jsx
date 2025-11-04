import React from 'react'
import cv from "../icons/cv.png";
import email from "../icons/email.png";
import github from "../icons/github.png";
import likedin from "../icons/linkedin.png";
import "../styles/pagFooter.css";


function PortafolioFooter() {
  const handleEmail= ()=> {
    const email = "dcorella2324@gmail.com"
    const subject = "Consulta redireccionada del portafolio."
    const body = "Hola, quisiera saber más sobre  tu trabajo."

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank"); // open email 
}  

  return (

    <div className='allContainerFooter'>
        <ul className='ulFooter'>
            <li className='liFooter'><a href="https://www.linkedin.com/in/juan-diego-corella-camacho-a543ba1a9/" target="_blank" rel="noopener noreferrer">
             <img className='iconFooter' src={likedin} width={45} height={45} alt="likedinIcon" /> 
            </a></li>

            <li className='liFooter'><a href="https://github.com/JuanDiegoCC02" target="_blank" rel="noopener noreferrer">
             <img className='iconFooter' src={github} width={45} height={45}  alt="githubIcon" />
            </a></li>

            <li className='liNavOptions'>
             <img className='iconFooter' src={email} width={45} height={45}  alt="emailIcon" onClick={handleEmail} />
            </li>

            <li><a  href="public/CV JDiego.pdf"  target="_blank"  rel="noopener noreferrer">
             <img className='iconFooter' src={cv}  width={45} height={45} alt="cvIcon" />
            </a></li>
        </ul>
    </div>

  )
}

export default PortafolioFooter