import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portada from '../pages/Portada';
import Perfil from '../pages/Perfil';

import ProyectosPage from '../pages/ProyectosPage';

function Routing() {
  return (
    <div>
      {/* basename para GitHub Pages */}
      <Router basename="/portafolio">
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/proyectosPage" element={<ProyectosPage />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
