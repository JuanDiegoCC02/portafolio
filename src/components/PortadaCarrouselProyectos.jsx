  import React, { useState } from 'react'
  import { Link } from 'react-router-dom'
  import "../styles/portadaCarrusel.css";
  import homeBE from "../imagenesBooksExchange/homeBE.PNG";
  import homeNA from "../imagenesNumbAstro/homeNA.PNG";

  function PortadaCarrouselProyectos() {
    const cardsProyectos = [
      { src: homeNA, title: "Agenda Numb Astro", desc: "Aplicación tipo agenda para organizar rutinas y hábitos." },
      { src: homeBE, title: "Books Exchange", desc: "Plataforma web para intercambio de libros entre usuarios." }
    ];

    
    const [index, setIndex] = useState(0);
  
    
    const nextSlide = () => {
      setIndex((prevIndex) =>
        prevIndex === cardsProyectos.length - 1 ? 0 : prevIndex + 1
      );
    };

    const prevSlide = () => {
      setIndex((prevIndex) =>
        prevIndex === 0 ? cardsProyectos.length - 1 : prevIndex - 1
      );
    };

    const { src, title, desc } = cardsProyectos[index];

    return (
      <div className="allDivCarrousel">
        <div className="containerCardCarrousel">
        <Link to="/proyectosPage">
          <img className='imgCardCarrousel' src={src} alt={title} />
        </Link>
          <h3 className='titleCardCarrousel'>{title}</h3>
          <p className='descCardCarrousel'>{desc}</p>
        </div>

        <div className="divCarrousel-buttons">
          <button className='btnLeft' onClick={prevSlide}>⬅️</button>
          <button className='btnRight' onClick={nextSlide}>➡️</button>
        </div>
      </div>
    );
  }

  export default PortadaCarrouselProyectos;
