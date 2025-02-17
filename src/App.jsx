import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './homepage/home';
import About from './about-contact/About'
import Contact from './about-contact/Contact'
import CategoryList from './servecies page/Servecies'
import Login from './components/login'
import Footer from './components/Footer'

import ProductDetail from './servecies page/ProductDetail'



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
        <Route path='/services' element={<CategoryList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:productId' element={<ProductDetail />} />
        

  </Routes>

       
       


    <Footer />  {/* Footer appears on all pages */}
    </>
  )
}

export default App
