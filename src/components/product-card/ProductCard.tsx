import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ url, title, user, description, id }:any) => {
  return (
    <div className="product-card">
      <img src={url} alt={title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
