import React from "react";
import "./TopDishCard.css";

interface TopDishCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

const TopDishCard: React.FC<TopDishCardProps> = ({
  title,
  description,
  price,
  imageUrl
}) => {
  return (
    <div className="top-dish-card">
      <img src={imageUrl} alt={title} className="dish-image" />
      <div className="dish-content">
        <h3 className="dish-title">{title}</h3>
        <p className="dish-description">{description}</p>
        <span className="dish-price">{price}</span>
      </div>
    </div>
  );
};

export default TopDishCard;
