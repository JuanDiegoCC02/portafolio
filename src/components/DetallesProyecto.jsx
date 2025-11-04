import React from 'react'
import { useParams } from "react-router-dom";
import books_Exchange from "../imagenes/Books Exchange.PNG";
import numb_Astro from "../imagenes/Numb Astro.PNG";

const proyectos = [
  {
    id: "1",
    src: numb_Astro,
    title: "Numb Astro",
    desc: "App de rutinas y hábitos...",
    github: "null",
    tecno: "React, JS, CSS",
    almace: "LocalStorage, Cookies"
  },
  {
    id: "2",
    src: books_Exchange,
    title: "Shared Reading",
    desc: "Plataforma para intercambio de libros...",
    github: "https://github.com/JuanDiegoCC02/books-exchange.git",
    tecno: "React, JS, CSS",
    almace: "LocalStorage, Cookies"
  }
];

function DetallesProyecto() {
  const { id } = useParams(); // 👈 trae el "1" o "2" de la URL
  const proyecto = proyectos.find((p) => p.id === id);

  if (!proyecto) return <p>Proyecto no encontrado</p>;

  return (
    <div>
      <h2>{proyecto.title}</h2>
      <img src={proyecto.src} alt={proyecto.title} />
      <p>{proyecto.desc}</p>
      <ul>
        <li>Tecnologías: {proyecto.tecno}</li>
        <li>Almacenamiento: {proyecto.almace}</li>
      </ul>
      {proyecto.github !== "null" && (
        <a href={proyecto.github} target="_blank" rel="noopener noreferrer">
          Ver en GitHub
        </a>
      )}
    </div>
  );
}

export default DetallesProyecto;
