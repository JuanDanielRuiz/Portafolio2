import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navar from './Components/Navar/Navar';
import Home from './Components/Home/Home';
import Proyectos from './Components/Proyectos/Proyectos';
import Contacto from './Components/Contacto/Contacto';
import Sobremi from './Components/Sobre-mi/Sobre-mi';
import Footer from './Components/Footer/Footer';

function App() {
 

  return (
    <div className='root'>
  <Navar/>
  <Home/>   
  <Proyectos/>
  <Contacto/>
  <Sobremi/>
  <Footer/>
    </div>
  )
}

export default App
