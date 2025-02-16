import React, { useEffect, useState } from 'react';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/api/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories!", error));
  }, []);

  useEffect(() => {
    categories.forEach((category) => {
      fetch(`http://localhost:3000/api/products/category/${category._id}`)  // Corrected API endpoint
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data)) {  // Ensure data is an array
            setProductsByCategory((prev) => ({
              ...prev,
              [category._id]: data
            }));
          } else {
            console.error(`Invalid data for category ${category._id}`, data);
          }
        })
        .catch((error) => console.error(`Error fetching products for category ${category._id}`, error));
    });
  }, [categories]);

  return (
    <div>
      
      <ul>
        {categories.map((category) => (
          <li key={category._id}>
            {category.name}:
            <ul>
              {Array.isArray(productsByCategory[category._id]) ? (
                productsByCategory[category._id].map((product) => (
                  <li key={product._id}>{product.name}</li>
                ))
              ) : (
                <li>No products found.</li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
