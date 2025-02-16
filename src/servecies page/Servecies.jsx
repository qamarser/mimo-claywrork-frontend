import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling css/CategoryList.css';  // Import CSS file

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});
  const navigate = useNavigate();

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
    navigate(`/product/${productId}`);
  };

  return (
    <div className="category-container">
      {categories.map((category) => (
        <div key={category._id} className="category-section">
          <h1 className="category-title">{category.name}</h1>
          <div className="products-grid">
            {Array.isArray(productsByCategory[category._id]) ? (
              productsByCategory[category._id].map((product) => (
                <div key={product._id} className="product-item" onClick={() => handleProductClick(product._id)}>
                  <img src={product.images[0]} alt={product.name} className="product-image" />
                  <p className="product-price">${product.price}</p>
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;