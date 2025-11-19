import React from "react";
import { useParams } from "react-router-dom";
import "../styles/proyectoCardInfo.css";

import homeNA from "../imagenesNumbAstro/homeNA.PNG";
import homeBE from "../imagenesBooksExchange/homeBE.PNG";

function ProyectoCardInfo({projectTitle, onClose }) {

  const proyectos = [
    {
      src: homeNA,
      title: "Agenda Numb Astro",
      infoPag:
        "Numb Astro es una aplicación web diseñada para ayudar a los usuarios a desarrollar hábitos...",
      descrp1:
        "Implementa Registro e Inicio de Sesión con validación de email.",
      descrp2:
        "El usuario define sus objetivos mediante un formulario de tareas...",
      descrp3:
        "El Mapa Estelar representa visualmente el progreso del usuario.",
      descrp4:
        "Cada avance desbloquea un botín de recompensas.",
      descrp5:
        "Cuenta con sistema de administración para seguimiento de usuarios.",
      tecno: "HTML, JavaScript, React, CSS",
      almace: "DB Json, LocalStorage y Cookies",
    },
    {
      src: homeBE,
      title: "Shared Reading",
      infoPag:
        "Shared Reading facilita el intercambio de libros físicos...",
      descrp1:
        "Registro y autenticación con validación de email.",
      descrp2:
        "Publicación de un libro con fotos y descripción.",
      descrp3:
        "Filtros por título, autor, género, localidad y estado.",
      descrp4:
        "Confirmación de intercambio y registro para estadísticas.",
      descrp5:
        "Administración con seguimiento de usuarios y libros.",
      github: "https://github.com/JuanDiegoCC02/books-exchange.git",
      tecno: "HTML, JavaScript, React, CSS",
      almace: "DB Json, LocalStorage y Cookies",
    },
  ];

 const proyecto = proyectos.find(p => p.title === projectTitle);

  if (!proyecto) {
   return <h2>Proyecto no encontrado: {projectTitle}</h2>; 
  }

 const handleOutside = (e) => {
    if (e.target.classList.contains("modalOverlay")) {
      onClose();
    }
  };

  return (
    <div className="modalOverlay" onClick={handleOutside}>
      <div className="container-CardInfoProyecto">
        <h2 className="titleInfoProyecto">{proyecto.title}</h2>

        <p className="detallePagInfoProyecto">{proyecto.infoPag}</p>

        <ul>
          <li className="descrLi">{proyecto.descrp1}</li>
          <li className="descrLi">{proyecto.descrp2}</li>
          <li className="descrLi">{proyecto.descrp3}</li>
          <li className="descrLi">{proyecto.descrp4}</li>
          <li className="descrLi">{proyecto.descrp5}</li>
        </ul>

        <ul className="UlProyectoInfo">
          <li className="LiProyectoInfo">Tecnologías: {proyecto.tecno}</li>
          <li className="LiProyectoInfo">Almacenamiento: {proyecto.almace}</li>
        </ul>

        <img className="IMGInfoProyecto" src={proyecto.src} alt={proyecto.title} />

        {proyecto.github && (
          <a className="LinkGithubInfoProyecto" href={proyecto.github} target="_blank" rel="noopener noreferrer">
            Ver en GitHub
          </a>
        )}

        <button className="closeBtnInfoProyecto" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default ProyectoCardInfo;
