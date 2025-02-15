import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './home page/Home'
import About from './about-contact/About'
import Contact from './about-contact/Contact'
import Servecies from './servecies page/servecies'
import Login from './components/login'
import Footer from './components/footer'


function App() {

  return (
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Servecies />} />
        <Route path='/login' element={<Login />} />
        </Routes>

        <Footer/>
    </Router>
  )
}

export default App
