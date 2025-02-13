import React, { useState } from 'react';
import "../styling css/Navbar.css";
import Logo from '../assets/logo.svg';
import { FaShoppingCart, FaUserCircle, FaChevronDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
      <nav className='navbar'>
        <div className='container'>

          <div className='logo'>
            <img src={Logo} alt='logo' />
          </div>

          <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <li><a href='Home.jsx'>Home</a></li>
            <li><a href='About.jsx'>About</a></li>

            <li className='dropdown'>
              <a onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                Services
                <FaChevronDown className={`dropdown-icon ${isDropdownOpen ? "rotated" : ""}`} />
              </a>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <a href='#'>Keychains</a>
                  <a href='#'>Consters</a>
                  <a href='#'>Vases</a>
                  <a href='#'>Decoration</a>
                </div>
              )}
            </li>

            <li><a href='Contact.jsx'>Contact</a></li>
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
