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
      descrp:
        "Características principales: Temática galáctica y visual inmersiva: La interfaz simula una atmósfera espacial donde los hábitos, logros y rutinas se representan mediante elementos astrales, ofreciendo una experiencia envolvente. Mapa estelar y logros: El usuario puede visualizar su progreso a través de un mapa estelar interactivo, donde cada meta completada ilumina nuevas estrellas o planetas. Sistema de “loot” (recompensas): Por cada avance, el usuario obtiene recompensas simbólicas que refuerzan la constancia y el cumplimiento de objetivos. Gestión y moderación de usuarios: Incluye paneles de administración que permiten controlar registros, roles y actividades, garantizando un entorno ordenado y funcional. Privacidad y seguridad: Implementa validaciones, autenticación y control de acceso para proteger la información personal. Además, cuenta con términos y condiciones claros que regulan el uso responsable de la plataforma. Seguimiento y análisis gráfico: Los usuarios pueden visualizar su evolución mediante gráficos de rendimiento, facilitando el análisis de sus hábitos y el reconocimiento de sus logros.",
      github: "https://github.com/JuanDiegoCC02/Agenda-Numb-Astro.git",
      tecno: "HTML, JavaScript, React, Css ",
      almace: "Db Json, LocalStorage, y Cookies",
    },
    {
      src: homeBE,
      title: "Shared Reading",
      infoPag:
        "Books Exchange es una aplicación web diseñada para facilitar el intercambio de libros físicos entre usuarios, promoviendo la reutilización de ejemplares, el hábito de la lectura y el fortalecimiento de la interacción social en comunidades. La plataforma busca que los libros que ya fueron leídos no queden olvidados en estanterías: en su lugar, circulen y lleguen a nuevas manos donde pueden inspirar, educar y entretener nuevamente.",
      descrp:
        "Registro / Autenticación: el usuario crea una cuenta con verificación básica (email). Publicar un libro: el usuario sube información del libro (título, autor, estado físico, sinopsis, fotografías) y selecciona si lo ofrece en trueque, préstamo o donación. Buscar y filtrar: otros usuarios buscan por título, autor, género, localidad o estado del libro. Favoritos: los usuarios guardan libros en favoritos. Contacto y acuerdo: la plataforma facilita la comunicación segura entre usuarios para acordar el intercambio. Confirmación y seguimiento: tras el intercambio, ambas partes confirman recepción; esto alimenta reputaciones y estadísticas de uso.",
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
