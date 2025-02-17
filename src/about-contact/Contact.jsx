import React from 'react'
import { useEffect, useState } from 'react'
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import "./contact.css"

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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(import.meta.env.VITE_REQUESTS_SUBMIT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        console.log("Form Submitted Successfully");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        console.error("Submission Failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className='contact-container' >
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

      <div className="contact-form">
        <h2 id="contact" >Get in Touch</h2>
        <p>You can reach us anytime</p>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Phonenumber(Optional)</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Contact
