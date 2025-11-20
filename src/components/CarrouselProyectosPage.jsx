import React, { useState } from 'react'; 
import "../styles/proyectosPagCarrousel.css";
import proximosProyectos from "../imagenes/proximosProyectos.PNG";

import homeBE from "../imagenesBooksExchange/homeBE.PNG";
import formBooksBE from "../imagenesBooksExchange/formBooksBE.PNG";
import newBooksBE from "../imagenesBooksExchange/newBooksBE.PNG";
import favBooksBE from "../imagenesBooksExchange/favBooksBE.PNG";
import contactUsBE from "../imagenesBooksExchange/contactUsBE.PNG";

import homeNA from "../imagenesNumbAstro/homeNA.PNG";
import contactUsNA from "../imagenesNumbAstro/contactUsNA.PNG";
import taskFormNA from "../imagenesNumbAstro/taskFormNA.PNG";
import taskAgendaNA from "../imagenesNumbAstro/taskAgendaNA.PNG";
import starMapNA from "../imagenesNumbAstro/starMapNA.PNG";
import starLootNA from "../imagenesNumbAstro/starLootNA.PNG";
import profileNA from "../imagenesNumbAstro/profileNA.PNG";
import AdminUsersGet from "../imagenesNumbAstro/AdminUsersGet.PNG";
import UsersChart from "../imagenesNumbAstro/UsersChart.PNG";
import AdminTasks from "../imagenesNumbAstro/AdminTasks.PNG";
import ProyectoCardInfo from './ProyectoCardInfo';




const cardsProyectos = [
  {
    src: homeNA,
    title: "Agenda Numb Astro",
    desc: "Aplicación web tipo agenda para organizar rutinas y hábitos, con creación de tareas, opción de editarlas, marcarlas o eliminarlas además de contar con un seguimiento diario.",
    github: "https://github.com/JuanDiegoCC02/Agenda-Numb-Astro.git",
    tecno: "HTML, JavaScript, React, Css ",
    almace: "Db Json, LocalStorage, y Cookies",
    secondaryImgs: [
      { src: homeNA, alt: "NA principal" }, 
      { src: contactUsNA, alt: "NA captura 3" },
      { src: taskFormNA, alt: "NA captura 4" },
      { src: taskAgendaNA, alt: "NA captura 5" },
      { src: starMapNA, alt: "NA captura 6" },
      { src: starLootNA, alt: "NA captura 7" },
      { src: profileNA, alt: "NA captura 8" },

      { src: AdminUsersGet, alt: "NA captura Admin" },
      { src: UsersChart, alt: "NA captura Admin" },
      { src: AdminTasks, alt: "NA captura Admin" },
    ]
  },
  {
    src: homeBE,
    title: "Shared Reading",
    desc: "Shared Reading es una plataforma web de intercambio de libros construida con React que conecta a los amantes de la lectura. Siendo nuestro objetivo darle una nueva vida a esos libros que ya leíste, fomentando la lectura y promoviendo la interacción social entre los lectores a través de la cultura del compartir.",
     github: "https://github.com/JuanDiegoCC02/books-exchange.git",
     tecno: "HTML, JavaScript, React, CSS ",
     almace: "Db Json, LocalStorage y Cookies",
    secondaryImgs: [
      { src: homeBE, alt: "BE principal" }, 
      { src: formBooksBE, alt: "BE captura 1" },
      { src: newBooksBE, alt: "BE captura 2" },
      { src: favBooksBE, alt: "BE captura 3" },
      { src: contactUsBE, alt: "BE captura 4" },
    ]
  },

  {
    src: proximosProyectos,
    title: "Proximo Proyecto en Desarrollo",
    desc: "Plataforma web en desarrollo proximos avances.",
     github: "https://github.com/JuanDiegoCC02",
     tecno: "en desarrollo...",
     almace: "en desarrollo...",
    secondaryImgs: [
      { src: proximosProyectos, alt: "Mas proyectos proximamente" }, 
    
    ]
  }
];


function CarrouselProyectosPage() {

 const [mainIndex, setMainIndex] = useState(0);

 const [secondaryIndex, setSecondaryIndex] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);
  
  const [selectedProjectTitle, setSelectedProjectTitle] = useState(null); 

  const openModal = () => {
    setSelectedProjectTitle(cardsProyectos[mainIndex].title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProjectTitle(null);
  };
  

  const nextMainSlide = () => {
    setMainIndex((prevIndex) => (
      prevIndex === cardsProyectos.length - 1 ? 0 : prevIndex + 1
    ));
    setSecondaryIndex(0); 
  };

  const prevMainSlide = () => {
    setMainIndex((prevIndex) => (
      prevIndex === 0 ? cardsProyectos.length - 1 : prevIndex - 1
    ));
    setSecondaryIndex(0); 
  };

  const aloneProject = cardsProyectos[mainIndex];

 

  const nextSecondarySlide = () => {
    setSecondaryIndex((prevIndex) => (
      prevIndex === aloneProject.secondaryImgs.length - 1 ? 0 : prevIndex + 1
    ));
  };

  const prevSecondarySlide = () => {
    setSecondaryIndex((prevIndex) => (
      prevIndex === 0 ? aloneProject.secondaryImgs.length - 1 : prevIndex - 1
    ));
  };

  return (
    <div>

    <div className='containerTitleProyectos'> <h4 className='titleProyectosTCarrousel'>Proyectos</h4> </div>

    <div className="divAllCarrousel">

      <div className="proyecto1CardsCarrouselContainer">
        <img className='imgCardProyecto'  onClick={openModal} src={aloneProject.secondaryImgs[secondaryIndex].src} alt={aloneProject.secondaryImgs[secondaryIndex].alt} />
       
        <button className='btnImgLeft' onClick={prevSecondarySlide}> ⬅️ </button>
        <button className='btnImgRight' onClick={nextSecondarySlide}> ➡️ </button>
      </div>

  
      <div className="pryectos2CardsCarrouselContainer">
        <div className="containerCardCarrousel">
          <img className='imgCardProyectos'  src={aloneProject.src} alt={aloneProject.title}  />
          <h3 className='titleCardProyectos'>{aloneProject.title}</h3>
          <p className='descCardProyectos'>{aloneProject.desc}</p>
          <ul className='ulCardProyectos'>
            <li className='liTecnoProyectos'>Tecnologias: {aloneProject.tecno}</li>
            <li className='liAlmaceProyectos'>Almacenamiento: {aloneProject.almace}</li>
          </ul>
          <a className='linkGitProyectos' href= {aloneProject.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            
        </div>

        <div className="divButtonsCarrpuselProyectos">
          <button className='btnLeft' onClick={prevMainSlide}> ⬅️ Proyecto Anterior </button>
          <button className='btnRight' onClick={nextMainSlide}> Proyecto Siguiente ➡️ </button>
        </div>
      </div>
      
        {modalOpen && selectedProjectTitle && (
        <ProyectoCardInfo projectTitle={selectedProjectTitle} onClose={closeModal} />
      )}
     
  
    </div>
    </div>
  );
}

export default CarrouselProyectosPage;