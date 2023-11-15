import React, { useState } from 'react';
import './ProductCard.scss';

const ProductCard = ({ url, title, user, description, id }:any) => {
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e:any) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = -(clientX - left - width / 2) / 20; 
    const y = -(clientY - top - height / 2) / 20;

    setParallaxOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setParallaxOffset({ x: 0, y: 0 });
  };

 
  return (
    <div
      className="product-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `scale(1.05) translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
      }}
    >
      <img src={url} alt={title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
