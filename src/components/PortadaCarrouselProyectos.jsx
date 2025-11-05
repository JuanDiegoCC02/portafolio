import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/portadaCarrusel.css"
import homeBE from "../imagenesBooksExchange/homeBE.PNG"
import homeNA from "../imagenesNumbAstro/homeNA.PNG"

function PortadaCarrouselProyectos() {
  const proyectos = [
    { src: homeNA, title: "Agenda Numb Astro", desc: "Aplicación tipo agenda para organizar rutinas y hábitos." },
    { src: homeBE, title: "Books Exchange", desc: "Plataforma web para intercambio de libros entre usuarios." }
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === proyectos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? proyectos.length - 1 : prevIndex - 1
    );
  };

  const { src, title, desc } = proyectos[index];

  return (
    <div className="portadaAllCarousel">
      <div className="portadaCarousel-card">
        <Link to="/proyectosPage">
          <img className="portadaCarousel-image" src={src} alt={title} />
        </Link>
        <div className="portadaCarousel-text">
          <h3 className="portadaCarousel-title">{title}</h3>
          <p className="portadaCarousel-description">{desc}</p>
        </div>
      </div>

      <div className="portadaCarousel-controls">
        <button className="portadaCarousel-btn prev" onClick={prevSlide}>⬅️</button>
        <button className="portadaCarousel-btn next" onClick={nextSlide}>➡️</button>
      </div>
    </div>
  );
}

export default PortadaCarrouselProyectos;
