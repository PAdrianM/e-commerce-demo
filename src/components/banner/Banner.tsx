import React, { useState } from "react";
import "./Banner.css";

interface BannerProps {
  titleMain: string;
  titleSub?: string;
  restaurantDescription?: string;
  images: string[];
  onMenuClick: () => void;
}


const Banner: React.FC<BannerProps> = ({ titleMain, titleSub, restaurantDescription, images, onMenuClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 1) {
    // Banner simple
    return (
      <div className="banner single" style={{ backgroundImage: `url(${images[0]})` }}>
        <div className="banner-content">
          <h1 className="title-main">{titleMain}</h1>
          {titleSub && <h2 className="title-sub">{titleSub}</h2>}
          {restaurantDescription && <p>{restaurantDescription}</p>}
          <button onClick={onMenuClick}>Ver Menú</button>
        </div>
      </div>
    );
  }

  // Banner con carousel
  return (
    <div className="banner carousel">
      <div className="banner-image" style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>
      <div className="banner-content">
        <h1 className="title-main">{titleMain}</h1>
        {titleSub && <h2 className="title-sub">{titleSub}</h2>}
        <button onClick={onMenuClick}>Ver Menú</button>
      </div>
      <div className="banner-controls">
        <button onClick={prevImage}>&lt;</button>
        <button onClick={nextImage}>&gt;</button>
      </div>
    </div>
  );
};

export default Banner;
