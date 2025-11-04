
import { Link } from 'react-router-dom'
import "../styles/PerfilNavOptions.css";



function PNav() {


const handleEmail= ()=> {
    const email = "dcorella2324@gmail.com"
    const subject = "Consulta redireccionada del portafolio."
    const body = "Hola, quisiera saber más sobre  tu trabajo."

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank"); // open email 
}  



  return (
    <div>
            <div className=''>   
                <ul className='ulNavOptions'>
                    
                    <li className='liNavOptions'><button onClick={handleEmail}>Email</button></li>
                    
                </ul>
            </div>
            
        </div>
  )
}

export default PNav