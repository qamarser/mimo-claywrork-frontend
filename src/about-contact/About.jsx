import React from 'react'
import { useEffect, useState } from 'react'
import './About.css'
import Rectangle from "../assets/Rectangle.svg"
import Contact from './Contact'


const About = () => {
  const [data, setData] = useState(null);

  useEffect (()=>{
    fetch(import.meta.env.VITE_ABOUT_DATA_API, {
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
    .then((data) => setData(data))
    .catch((error) => {
      console.error("Error fetching about data:", error);
      // Set fallback data if API fails
      setData({
        image: '/default-about.jpg',
        description: 'Discover our passion for clay craftsmanship...'
      });
    });
  }, []);


  return (
    <div className='about-container' id="about">
      {data ? (
        <>
        <img src={data.image} alt='about' className='about-image'/>
        <p className='about-description'>{data.description}</p>
        </>
      ) :(
        <p>Loading...</p>
      )
    }
      
     <div className='rectangle'>
      <img src={Rectangle} alt='rectangle' />

     </div>
     <Contact/>
    </div>
 
  )
}

export default About
