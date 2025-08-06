import React from "react";
import "./GlassCard.css";

interface GlassCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  time?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({
  title,
  description,
  // price,
  imageUrl,
  time = "25 Mins",
}) => {
  return (
    <div className="glass-card">
      <img src={imageUrl} alt={title} className="glass-image" />

      <div className="glass-content">
        <h2>{title}</h2>
        <span className="glass-time">⏱ {time}</span>
        <p>{description}</p>
        <div className="glass-footer">
          {/* <span className="glass-price">${price}</span>
          <button className="glass-button">Add to Cart ➕</button> */}
        </div>
      </div>
    </div>
  );
};

export default GlassCard;