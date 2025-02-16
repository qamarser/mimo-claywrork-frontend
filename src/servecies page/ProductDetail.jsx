import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details!", error));
  }, [productId]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.images[0]} alt={product.name} style={{ width: '300px', height: '300px' }} />
      <p>Price: ${product.price}</p>
      <p>Colors: {product.colors.join(', ')}</p>
      {/* Add more product details as needed */}
    </div>
  );
};

export default ProductDetail;
