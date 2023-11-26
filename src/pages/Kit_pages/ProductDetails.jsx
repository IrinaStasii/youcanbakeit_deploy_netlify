import React from "react";
import { useParams } from 'react-router-dom';

function ProductDetails({ products }) {
  const { id } = useParams();
  const product = products.find(product => product.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default ProductDetails;
