
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling css/CategoryList.css';  // Import CSS file

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(import.meta.env.VITE_CATEGORIES_API || 'https://mimo-claywrork-backend.onrender.com/api/categories', {
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
      .then((data) => setCategories(data))
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setCategories([{ _id: '1', name: 'Featured Products' }]);
      });

  }, []);

  useEffect(() => {
    categories.forEach((category) => {
      fetch(import.meta.env.VITE_PRODUCTS_API || `https://mimo-claywrork-backend.onrender.com/api/products/category/${category._id}`, {
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
          if (Array.isArray(data)) {
            setProductsByCategory((prev) => ({
              ...prev,
              [category._id]: data
            }));
          } else {
            console.error(`Invalid data for category ${category._id}`, data);
            setProductsByCategory((prev) => ({
              ...prev,
              [category._id]: []
            }));
          }
        })
        .catch((error) => {
          console.error(`Error fetching products for category ${category._id}`, error);
          setProductsByCategory((prev) => ({
            ...prev,
            [category._id]: []
          }));
        });

    });
  }, [categories]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="category-container">
      {categories.map((category) => (
        <div key={category._id} className="category-section">
          <h1 className="category-titlee" id={category.name}  >{category.name}</h1>
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
