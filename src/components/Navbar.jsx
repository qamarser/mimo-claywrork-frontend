import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styling css/Navbar.css";
import Logo from '../assets/logo.svg';
import { FaShoppingCart, FaUserCircle, FaChevronDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Navbar = ({ isHeroSection = false }) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
      <nav className={`navbar ${isHeroSection ? 'hero-section-navbar' : ''}`}>

        <div className='container'>
          <div className='logo-img'>
            <img src={Logo} alt='logo' />
          </div>

          <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>

            <li className='dropdown'>
              <a onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                Services
                <FaChevronDown className={`dropdown-icon ${isDropdownOpen ? "rotated" : ""}`} />
              </a>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <Link to="/services">All Services</Link>
                  <Link to="#">Keychains</Link>
                  <Link to="#">Consters</Link>
                  <Link to="#">Vases</Link>
                  <Link to="#">Decoration</Link>
                </div>
              )}
            </li>

            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <div className='icons'>
            <button className='cart'>
              <FaShoppingCart />
            </button>
            <button className='profile'>
              <FaUserCircle />
            </button>
          </div>

          <button className='menu-toggle' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <IoMenu />
          </button>
        </div>
      </nav>
  );
};

export default Navbar;
