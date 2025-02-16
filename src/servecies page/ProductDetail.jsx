import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styling css/ProductDetail.css'; // Import the CSS file

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details!", error));
  }, [productId]);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    alert(`Added ${quantity} ${product.name} to cart`);

  };

  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="product-detail">
        <div className='photos'>
        <img src={product.images[0]} alt={product.name} />
        </div>


        <div className='details'>
        <h1>{product.name}</h1>
        <p className="price">Price: ${product.price}</p>
        <p className="colors">Colors:<br></br> {product.colors.join(', ')}</p>
        <div className="quantity-select">
        <label htmlFor="quantity"></label>
        <select id="quantity" value={quantity} onChange={handleQuantityChange}>
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    </div>
  );
};

export default ProductDetail;
