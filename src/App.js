import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Interests from  './components/Interests'
import './styles/style.scss'



const App = () => {
  return <>
  <Nav />
  <Home />
  <About />
  <Projects />
  <Interests />
  <Footer />
  </>
  
}

export default App