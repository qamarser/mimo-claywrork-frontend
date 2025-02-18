import React from 'react'
import { useState } from 'react';
import Logo from '../assets/Logo.svg';

import { IoLogoInstagram } from "react-icons/io";
import { TbBrandFacebook } from "react-icons/tb";
import { PiTiktokLogo } from "react-icons/pi";
import Chevronsup from "../assets/Chevronsup.svg";
import "../styling css/Footer.css";


const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="footer">
    <div className='footer-container '>
       <div className='logo'>
           <img src={Logo} alt='logo' />
       </div>

       <div className='middle'>
       <p className='footer-text'>Follow us on social media!</p>

      <div className='footer-icons'>
        <button className='insta btn icon'>
          <IoLogoInstagram />
        </button>

        <button className='facebook btn icon'>
          <TbBrandFacebook />
          </button>

          <button className='tiktok btn icon'>
            <PiTiktokLogo />
          </button>
       </div>
    </div>
    <div className='right'>
       <div className='back-to-top'>
        <button className='btn back-to-top-button'>
          <img src={Chevronsup} alt='backtotop'
          onClick={scrollToTop}
          />
        </button>
       </div>
       <div className='footer-copyright'>
       © 2025 Mimo's Clay Works
        </div>
    </div>
    </div>
    </div>
  )
}

export default Footer;
