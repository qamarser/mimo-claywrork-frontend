import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './home page/Home'
import About from './about-contact/About'
import Contact from './about-contact/Contact'
import Servecies from './servecies page/servecies'
import Login from './components/login'
import Footer from './components/footer'
import Herosection from './components/herosection.jsx'


// New implementation
function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  )
}

// seperate layout component to control what appears on each page
const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return(
    <>
    {!isHomePage && <Navbar />} {/* Show Navbar on all pages except home */}

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Servecies />} />
        <Route path='/login' element={<Login />} />
    </Routes>

    <Footer />  {/* Footer appears on all pages */}
    </>
  )
}

export default App
