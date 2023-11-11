import './styles.css'
import img from './img/Dany.png'

function Sobremi () {
    return (
        <div id='sobremi' className='container-sobre-mi'>
            <div className='title-sobremi'>
                <h2>Mi Historia</h2>
                <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
                <img src={img} alt="danny" />
            </div>
            <div className='texto-sobremi'>
                <p>
¡Hola! Soy Juan Daniel Luevano Ruiz, un apasionado y experimentado desarrollador backend. Estoy aquí para ayudarte a crear soluciones tecnológicas sólidas y eficientes. Si estás buscando optimizar tus procesos y mejorar la experiencia del usuario, ¡has llegado al lugar indicado! Contáctame y hablemos sobre tu próximo proyecto.</p>
                <p>Soy un profesional con amplios conocimientos en ciberseguridad, comprometido a proteger la información y los sistemas contra amenazas y ataques cibernéticos. Mis habilidades y experiencia incluyen: análisis de riesgos y evaluación de vulnerabilidades, implementación de medidas de seguridad y políticas de cumplimiento, configuración y administración de firewalls y sistemas de detección de intrusiones, monitoreo y análisis de registros de seguridad para detectar actividades sospechosas, educación y concienciación en ciberseguridad para usuarios y equipos, respuesta a incidentes y manejo de situaciones de seguridad. Mi objetivo es garantizar la integridad, confidencialidad y disponibilidad de sistemas y datos, y trabajar de manera proactiva para anticipar y mitigar posibles vulneraciones de seguridad. Me mantengo actualizado en las últimas amenazas y tendencias en ciberseguridad para adaptarme y proteger de manera efectiva los activos digitales. Si necesitas consejos o soluciones en ciberseguridad, no dudes en contactarme.</p>
            </div>
            <a href='https://drive.google.com/file/d/15nK4pYRRhdLtHWdjviYhtEDtUmZUcjx_/view'><button className='cv' >CV DOWNLOAD</button></a>
            

        </div>
    )
}

export default Sobremi