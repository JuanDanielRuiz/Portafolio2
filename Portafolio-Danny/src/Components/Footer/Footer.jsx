import './styles.css'
import facebook from './icons/facebook-icon-logo-svgrepo-com.svg'
import instagram from './icons/icons8-instagram.gif'
import linkedin from './icons/icons8-linkedin-circled.gif'
import github from './icons/icons8-github (1).gif'


const Footer = () => {
    return (
       
            <footer > 
                <div class="container-footer">
                <div class="social-icons">
                    <div class="icons-footer">
                        <a href="https://github.com/JuanDanielRuiz">
                            <img src={github} alt="Imagen de presentacion de Danny Ruiz"></img>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100093584599138&sk=about_work_and_education">
                            <img src={facebook} alt="Imagen de presentacion de Danny Ruiz"></img>
                        </a>
                        <a href="https://www.instagram.com/danielruizdeveloper/">
                            <img src={instagram} alt="Imagen de presentacion de Danny Ruiz"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/danny-ruiz-9b7a24175/">
                            <img src={linkedin} alt="Imagen de presentacion de Danny Ruiz"></img>
                        </a>
                    </div>

                  
                    </div>
                <div class="bio">
                    <h2>Soy Juan Daniel Luevano Ruiz,</h2>
                        <p> un desarrollador backend apasionado y experimentado. Mi objetivo es crear soluciones tecnologicas solidas y eficientes. Me especializo en el desarrollo de aplicaciones web y en la implementacion de bases de datos. Estoy comprometido en optimizar procesos y mejorar la experiencia del usuario. Contactame para colaborar en tu proximo proyecto</p>
                    </div>
                </div>
            </footer>
         
        

    )
}


export default Footer
