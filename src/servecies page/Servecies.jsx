import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});
  const navigate = useNavigate();  // Initialize navigation hook

  useEffect(() => {
    fetch('http://localhost:3000/api/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories!", error));
  }, []);

  useEffect(() => {
    categories.forEach((category) => {
      fetch(`http://localhost:3000/api/products/category/${category._id}`)
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data)) {
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

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);  // Navigate to product detail page
  };

  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>
            <h3>{category.name}</h3>
            <ul>
              {Array.isArray(productsByCategory[category._id]) ? (
                productsByCategory[category._id].map((product) => (
                  <li key={product._id} onClick={() => handleProductClick(product._id)} style={{ cursor: 'pointer' }}>
                    <img src={product.images[0]} alt={product.name} style={{ width: '100px', height: '100px' }} />
                    <p>{product.name}</p>
                  </li>
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
