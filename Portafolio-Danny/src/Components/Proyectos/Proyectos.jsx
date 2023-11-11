import './styles.css'
import axios from 'axios';
import { useEffect ,useState } from 'react'

function Proyectos () {
    const [data, Setdata] = useState();

    useEffect(() => {
       
        const apiUrl = 'https://portafolio-production-2b14.up.railway.app/allData';
    
      
        axios.get(apiUrl)
          .then(function (response) {
      
            Setdata(response.data);
          })
          .catch(function (error) {
            
            console.error('Error en la solicitud:', error);
          });
      }, []);

      console.log(data)

return (
    <div id='proyectos' className='container-proyectos-2'>
  
        <div className='title-2'>
            <h2>Proyectos</h2>
            <p>-----------------------</p>
            <div className='description'>
                <p>Bienvenido a la seccion de mis proyectos, Aqui podras encontrar los proyectos mas recientes asi como los repositorios de git hub y los deployen algunos casos </p>
            </div>

        </div>
        <div className='container-cards'>
           {
            data ?  (
                data.map( item => (
                    <div key={item.id} className='cards'>
                    <h1>{`${item.name}`}</h1>
                    <img src={item.img} alt="" />
                    <p>Descripcion</p>
                    <p>{item.description}</p>
                    <a  href={item.linkedin}> <button className='linkedin'>Linkedin</button></a>
                    <a  href={item.repo}>  <button className='linkedin'>-Github-</button></a>
                
                   
                </div>

                ))
               
            ): console.log('Datta 0')
           }
            {/* <div className='cards'>
                <h1>Proyecto 1</h1>
                <img src="https://th.bing.com/th/id/R.e7d262ffbc9d8db3eb67fbf1de26d1cf?rik=EuOjSMLCOIUwaw&pid=ImgRaw&r=0" alt="" />
                <p>Descripcion</p>
            </div>
            <div className='cards'>
                <h1>Proyecto 1</h1>
                <img src="https://th.bing.com/th/id/R.e7d262ffbc9d8db3eb67fbf1de26d1cf?rik=EuOjSMLCOIUwaw&pid=ImgRaw&r=0" alt="" />
                <p>Descripcion</p>
            </div>
            <div className='cards'>
                <h1>Proyecto 1</h1>
                <img src="https://th.bing.com/th/id/R.e7d262ffbc9d8db3eb67fbf1de26d1cf?rik=EuOjSMLCOIUwaw&pid=ImgRaw&r=0" alt="" />
                <p>Descripcion</p>
            </div>
            <div className='cards'>
                <h1>Proyecto 1</h1>
                <img src="https://th.bing.com/th/id/R.e7d262ffbc9d8db3eb67fbf1de26d1cf?rik=EuOjSMLCOIUwaw&pid=ImgRaw&r=0" alt="" />
                <p>Descripcion</p>
            </div>
            <div className='cards'>
                <h1>Proyecto 1</h1>
                <img src="https://th.bing.com/th/id/R.e7d262ffbc9d8db3eb67fbf1de26d1cf?rik=EuOjSMLCOIUwaw&pid=ImgRaw&r=0" alt="" />
                <p>Descripcion</p>
            </div>
            <div className='cards'>
                <h1>Proyecto 1</h1>
                <img src="https://th.bing.com/th/id/R.e7d262ffbc9d8db3eb67fbf1de26d1cf?rik=EuOjSMLCOIUwaw&pid=ImgRaw&r=0" alt="" />
                <p>Descripcion</p>
            </div> */}

        </div>
      


    </div>
)
}

export default Proyectos