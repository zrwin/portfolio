import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience'

function App() {
  return(

      <>
        <Navbar/> 
        <Home/>
        <Projects/>
        <Experience/>
        <Contact/>
        <Footer/>          
      </>
    )
  
}

export default App
