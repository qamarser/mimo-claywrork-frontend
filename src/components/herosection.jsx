import React from 'react'
import { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'
import '../styling css/herosection.css'
import Navbar from './Navbar';

const Herosection = () => {

  const typedElement = useRef(null) //reference to html element 

  const [bgImage, setBgImage] = useState(''); // Store background image URL

  useEffect (()=>{
    // fetch bg image from api with CORS mode
    fetch(import.meta.env.VITE_HERO_IMAGE_API, {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      setBgImage(data.imageUrl);
    })
    .catch((error) => {
      console.error("Error fetching hero image:", error);
      // Set fallback image if API fails
      setBgImage('/default-hero.jpg');
    });
  }, []);


    useEffect(() => {
      if (typedElement.current){    
      const typed = new Typed(typedElement.current, {
        strings:[
          "Crafted with Passion, Designed for You",
          "From Earth to Elegance _Timeless Clay Creations",
          "Elevate Your Space with Handmade Clay Art",
          "Wear It, Love It _Handmade Clay Jewelry & Decor",
        ],
        startDelay:2000,
        typeSpeed: 40,
        backSpeed:20,
        backDelay:4000,
        loop:true
  });

  return()=>{
    typed.destroy(); // clean up on unmount
  };
}
 }, []);


  return (
    <div className='herosection-container'
    style={{
      backgroundImage: bgImage ? `url(${bgImage})` : "url('/default-hero.jpg')",

      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      // color: "white",
      textAlign: "center",
    }}
    >

        <Navbar isHeroSection={true}/>


      {/* Typed text container */}
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <span className='typedelement' ref={typedElement}></span>
      </div>


    </div>
  )
}

export default Herosection
