import React, { useRef, useEffect } from 'react';
import './ProductCard.scss';

const ProductCard = ({ url, title }: any) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (!cardRef.current) return;

      const card = cardRef.current;
      const cardRect = card.getBoundingClientRect();
      const offsetX = (e.clientX - cardRect.left) / cardRect.width - 0.5;
      const offsetY = (e.clientY - cardRect.top) / cardRect.height - 0.5;

      card.style.transform = `translate(${offsetX * 20}px, ${offsetY * 20}px)`;
    };

    const handleMouseLeave = () => {
      if (!cardRef.current) return;

      const card = cardRef.current;
      card.style.transform = 'translate(0, 0)';
    };

    if (cardRef.current) {
      cardRef.current.addEventListener('mousemove', handleMouseMove as any);
      cardRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener('mousemove', handleMouseMove as any);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        cardRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="product-card" ref={cardRef}>
      <img src={url} alt={title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
