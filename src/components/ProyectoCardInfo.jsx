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
        "Numb Astro es una aplicación web diseñada para ayudar a los usuarios a desarrollar y mantener nuevos hábitos en su vida cotidiana, combinando motivación, seguimiento visual y una experiencia temática inspirada en el espacio. La plataforma integra un mapa estelar interactivo y un sistema de recompensas (“loot”) que representan el progreso personal como si el usuario estuviera explorando su propio universo interior. Cada hábito cumplido equivale a una nueva estrella descubierta, y cada logro desbloqueado impulsa al usuario a avanzar hacia nuevas constelaciones. Esta dinámica convierte la creación de hábitos en una experiencia lúdica, visual y motivadora, donde el crecimiento personal se refleja como un viaje cósmico.",
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
      github: "https://github.com/JuanDiegoCC02/Agenda-Numb-Astro.git"
    },
    {
      src: homeBE,
      title: "Shared Reading",
      infoPag:
        "Shared Reading es una aplicación web diseñada para facilitar el intercambio de libros físicos entre usuarios, promoviendo la reutilización de ejemplares, el hábito de la lectura y el fortalecimiento de la interacción social en comunidades. La plataforma busca que los libros que ya fueron leídos no queden olvidados en estanterías: en su lugar, circulen y lleguen a nuevas manos donde pueden inspirar, educar y entretener nuevamente.",
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
