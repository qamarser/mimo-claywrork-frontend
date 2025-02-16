import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './home page/Home'
import About from './about-contact/About'
import Contact from './about-contact/Contact'
import CategoryList from './servecies page/Servecies'
import Login from './components/login'
import Footer from './components/footer'
import ProductDetail from './servecies page/ProductDetail'


function App() {

  return (
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<CategoryList />} />
        <Route path='/login' element={<Login />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>

        <Footer/>
    </Router>
  )
}

export default App
