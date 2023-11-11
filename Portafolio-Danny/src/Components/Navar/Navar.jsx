import './Styles.css'
import portafolio from './img/portafolio.png'
import { NavLink } from 'react-router-dom'

function Navar () {
    return (
        <div className='container-nav'>
            <div className='logo'>
            <a href='#home' className='button-logo'> <img  src={portafolio} alt="Logo" /></a>
            </div>
            <nav className='navar'>
               <ul>
                <li> <a href="#home">Home</a></li>
                <li> <a href="#proyectos">Proyectos</a></li>
                <li> <a href="#contacto">Contacto</a></li>
                <li> <a href="#sobremi">Sobre mi</a></li>
               </ul>

            </nav>
        </div>
    )

}


export default Navar