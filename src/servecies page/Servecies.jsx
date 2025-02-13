import React from 'react';

const Servecies = () => {
  const servicesList = [
    { title: "Service 1", description: "Description of Service 1" },
    { title: "Service 2", description: "Description of Service 2" },
    // Add more services as needed
  ];

  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        {servicesList.map((service, index) => (
          <li key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Servecies;
