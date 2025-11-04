import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/proyectoCardInfo.css";

import homeNA from "../imagenesNumbAstro/homeNA.PNG";
import homeBE from "../imagenesBooksExchange/homeBE.PNG";

function ProyectoCardInfo() {

  const proyectos = [
     {
      src: homeNA,
      title: "Numb Astro",
      infoPag:
        "Pagina Web de Intercambio de Libros para usuarios de distintas comunidades con validaciones y autentificaciones.",
      descrp:
        "Aplicación web tipo agenda para organizar rutinas y hábitos, con creación de tareas, opción de editarlas, marcarlas o eliminarlas además de contar con un seguimiento diario.",
      github: "https://github.com/JuanDiegoCC02/Agenda-Numb-Astro.git",
      tecno: "HTML, JavaScript, React, Css ",
      almace: "Db Json, LocalStorage, y Cookies",
    },
    {
      src: homeBE,
      title: "Shared Reading",
      infoPag:
        "Pagina Web de Intercambio de Libros para usuarios de distintas comunidades con validaciones y autentificaciones.",
      descrp:
        "Proyecto sobre una Pagina Web de intercambio de libros en busca de darle una segunda vida a los libros, además de incentivar a la lectura.",
      github: "https://github.com/JuanDiegoCC02/books-exchange.git",
      tecno: "HTML, JavaScript, React, CSS ",
      almace: "Db Json, LocalStorage y Cookies",
    },
   
  ];

  //  Obtener id de la URL
  const { id } = useParams();
  const proyecto = proyectos[id]; // usa el i como id

  if (!proyecto) {
    return <h2>Proyecto no encontrado</h2>;
  }

  return (
    <div>
        <div>proyecto</div>
    <div className="container-CardInfoProyecto">
      <h2 className="titleInfoProyecto">{proyecto.title}</h2>
     
      <p className="detallePagInfoProyecto">{proyecto.infoPag}</p>
      <p className="descInfoProyecto">{proyecto.descrp}</p>
      <ul className="UlProyectoInfo">
        <li className="LiProyectoInfo">Tecnologias: {proyecto.tecno}</li>
        <li className="LiProyectoInfo">Almacenamiento: {proyecto.almace}</li>
      </ul>
       <img className="IMGInfoProyecto" src={proyecto.src} alt={proyecto.title} />
        <a className="LinkGithubInfoProyecto" href={proyecto.github} target="_blank" rel="noopener noreferrer"> Ver en GitHub</a>
      
    </div>
    </div>
  );
}

export default ProyectoCardInfo;
