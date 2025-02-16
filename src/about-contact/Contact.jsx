import React from 'react'
import { useEffect, useState } from 'react'
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
   const [data, setData] = useState(null);
   useEffect(() => {
    console.log("Fetching from:", import.meta.env.VITE_CONTACT_TEXT_API);
    fetch(import.meta.env.VITE_CONTACT_TEXT_API)
      .then((response) => {
        console.log("Response status:", response.status);
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data);
      })
      .catch((error) => console.error("Error fetching contact data:", error));
  }, []);
  

  return (
    <div className='contact-container'id="contact">
      <div className='text-container'>
        {data ? (
        <>
        <h2>{data.title}</h2>
        <p className='text-1'>{data.text1}</p>
        <p className='text-2'>{data.text2}</p>
        <p className='text-3'>{data.text3}</p>
        </>
        ) : (
          <p>Loading...</p>
)}

      <div className='mail'>
        <CiMail className='contact-icon'/>
        <p>joyaaboujaoude627@gmail.com</p>
      </div>

      <div className='phone-no'>
      <IoCallOutline className='contact-icon'/>
      <p>+961 71606968</p>
      </div>
      </div>
    </div>
  )
}

export default Contact
