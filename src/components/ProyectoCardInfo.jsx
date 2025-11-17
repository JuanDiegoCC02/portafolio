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
        "Numb Astro es una aplicación web diseñada para ayudar a los usuarios a desarrollar y mantener nuevos hábitos en su vida cotidiana, combinando motivación, seguimiento visual y una experiencia temática inspirada en el espacio. La plataforma integra un mapa estelar interactivo y un sistema de recompensas (“loot”) que representan el progreso personal como si el usuario estuviera explorando su propio universo interior. Cada hábito cumplido equivale a una nueva estrella descubierta, y cada logro desbloqueado impulsa al usuario a avanzar hacia nuevas constelaciones. Esta dinámica convierte la creación de hábitos en una experiencia lúdica, visual y motivadora, donde el crecimiento personal se refleja como un viaje cósmico.",
     
      descrp1:
        "Implementa Registro e Inicio de Sesión con validación de email, asegurando la autenticidad del usuario en este viaje cosmico.",
      descrp2:
        "El usuario define sus objetivos mediante un formulario de tareas (hábito a cumplir). Dispone de una agenda para registrar, administrar y hacer seguimiento de las tareas, permitiendo la actualización de estado o edición de la información.",
      descrp3:
        "El Mapa Estelar es la representación visual del progreso. Cada tarea completada (hábito positivo) se traduce en una nueva estrella o planeta iluminado, impulsando el avance hacia nuevas constelaciones.",
      descrp4:
        " Por cada avance significativo, el usuario desbloquea un botín de memorias o recompensas simbólicas. Este feedback positivo refuerza la constancia y la generación de hábitos seguros.",
      descrp5:
        "Administración para la pagina la cual cuenta con un sistema de administración dando seguimiento alos usuarios sus habitos y el compriso con estos ademas de brindar un constante mantenimiento y actualizaciones a la paginá web. ",
  
      tecno: "HTML, JavaScript, React, Css ",
      almace: "Db Json, LocalStorage, y Cookies",
    },
    {
      src: homeBE,
      title: "Shared Reading",
      infoPag:
        "Shared Reading es una aplicación web diseñada para facilitar el intercambio de libros físicos entre usuarios, promoviendo la reutilización de ejemplares, el hábito de la lectura y el fortalecimiento de la interacción social en comunidades. La plataforma busca que los libros que ya fueron leídos no queden olvidados en estanterías: en su lugar, circulen y lleguen a nuevas manos donde pueden inspirar, educar y entretener nuevamente.",
      descrp1:
        "Registro / Autenticación: el usuario crea una cuenta con verificación en base a el email.",
      descrp2:
        "Publicacion de un libro: el usuario sube información del libro publicando (título, autor, estado físico, descriipcióny y fotografías).",
      descrp3:
        "Buscar y filtrar: Los usuarios puede buscar por título, autor, género, localidad y estado de disponibilidad del libro. Tambien logrando añadir a una lista personal de libros favoritos.",
      descrp4:
        " Confirmación y seguimiento: tras el intercambio ambos usuarios confirma que se intercambio el libro y se registra ayudando a los administradores a dar seguimiento a estadisitcas.",
      descrp5:
        "Administracion la pagina cuenta con un sistema de administracon dando seguimiento a los usuarios y los intercambios de libros buscando la seguridad la transpariencia y el mantenimiento de la pagina web. ",

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
      <ul>
        <li className="descrLi">{proyecto.descrp1} </li>
        <li className="descrLi">{proyecto.descrp2}</li>
        <li className="descrLi">{proyecto.descrp3}</li>
        <li className="descrLi">{proyecto.descrp4}</li>
        <li className="descrLi">{proyecto.descrp5}</li>
      </ul>

      
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
