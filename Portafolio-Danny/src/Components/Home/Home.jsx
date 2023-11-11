import './Styles.css'
import danny from './img/Dany.png'
import html from './icons/html-5.png'
import css from './icons/css-3.png'
import js from './icons/js.png'
import python from './icons/piton.png'
import postgres from './icons/postgre.png'
import visual from './icons/visual-basico.png'
import Proyectos from '../Proyectos/Proyectos'



function Home () {
    return (
        <div id='home' className='container-home'>
          <div className='container-img-danny'>
            <img src={danny} alt="imagen dany" />
          </div>
            <div className='container-name'>
            <h1>Hola Mi nombre es </h1>
            <h2>Daniel Luevano </h2>
            <div className='title'>
            <h1>Skills</h1>
            </div>
            <div className='container-skills'>
           
                <div className='icon'>
            <img src={html} alt="" />
            <img src={js} alt="" />
            <img src={postgres} alt="" />
            <img src={css} alt="" />
            <img src={python} alt="" />
            <img src={visual} alt="" />
                </div>
            

          </div>
          </div>
         
          <div className='container-proyectos'>
            <h1>Mis proyectos</h1>
            <img src="https://th.bing.com/th/id/OIP.a8tQwY6SUtqjE-EV5nYGkgHaFj?pid=ImgDet&rs=1" alt="" />
            <img src="https://www.go-trip.com.mx/images/logogotrip.png" alt="" />
            <img src="https://necdn.sfo2.digitaloceanspaces.com/2020/04/web-designer.jpg" alt="" />
           
            
            <div className='raya'>
                <h1>-------------------------------------------------------</h1>
            </div>
          <div className='container'>
        
            <img src="https://th.bing.com/th/id/OIP.ssKWuuwES24mQz7kFXAotgHaHa?pid=ImgDet&rs=1" alt="" />
            <img src="https://th.bing.com/th/id/OIP.1xzrZMIQL38x12RjvizUWgHaEl?pid=ImgDet&rs=1" alt="" />
            <img src="https://th.bing.com/th/id/R.43f7c442071f42f9a108aa8f626c8c6d?rik=oEqOCKTq%2bF2wMg&pid=ImgRaw&r=0" alt="" />
          
          </div>
          </div>
           
        </div>
        
        
    )

}


export default Home