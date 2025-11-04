import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Portada from '../pages/Portada';
import Perfil from '../pages/Perfil';

import ProyectoInfo from '../pages/ProyectoInfo';
import ProyectosPage from '../pages/ProyectosPage';

function Routing() {
  return (
    <div>

        <Router>
            <Routes>
                <Route path= '/' element = {<Portada/>}/>
                <Route path= '/perfil' element = {<Perfil/>}/>
               <Route path="/proyectosPage" element={<ProyectosPage/>} />
               <Route path="/proyectosInfo/:id" element={<ProyectoInfo/>} />
            </Routes>
        </Router>

    </div>
  )
}

export default Routing