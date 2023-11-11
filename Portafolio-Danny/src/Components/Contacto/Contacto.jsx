import './styles.css'
import React, { useState } from 'react';
import axios from 'axios';
import formulario from './icons/checklist.png'

function Contacto () {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const msg = {
          nombre: formData.name,
          email: formData.email,
          phone: formData.phone,
          Empresa: 'Default',
          mensaje: formData.message

        }
        await axios.post('https://portafolio-production-2b14.up.railway.app/email', msg);
        alert('Mensaje Enviado con exito')

        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',

        })
        console.log(msg); 
      };
    
    return (
        <div id='contacto' className='container-contacto'>
        
            <div className='container-1'>
                <h1>Contactame</h1>
                <img src={formulario} alt="" />

            </div>
            <div className='container-2'>
                <h1>Envia un Mensaje:</h1>
                <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Correo :- </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </div>
      <button  className='enviar' type="submit">Enviar</button>
    </form>

            </div>
        </div>
    )
}

export default Contacto