import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";

interface BannerProps {
  titleMain: string;
  titleSub?: string;
  restaurantDescription?: string;
  images: string[];
  onMenuClick: () => void;
}

const Banner: React.FC<BannerProps> = ({ titleMain, titleSub, restaurantDescription, images, onMenuClick }) => {

const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    speed: 800,
  };

  // Caso 1: Imagen única
  if (images.length === 1) {
    return (
      <div
        className="banner-single"
        style={{ backgroundImage: `url(${images[0]})` }}
      >
        <div className="banner-overlay">
          <h1 className="banner-title">{titleMain}</h1>
          {titleSub && <h2 className="banner-sub">{titleSub}</h2>}
          {restaurantDescription && <p className="banner-desc">{restaurantDescription}</p>}
          <button className="banner-btn" onClick={onMenuClick}>
            Ver Menú
          </button>
        </div>
      </div>
    );
  }

  // Caso 2: Carousel
  return (
    <div className="banner-carousel">
      <Slider {...sliderSettings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <div
              className="banner-slide"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="banner-overlay">
                <h1 className="banner-title">{titleMain}</h1>
                {titleSub && <h2 className="banner-sub">{titleSub}</h2>}
                {restaurantDescription && <p className="banner-desc">{restaurantDescription}</p>}
                <button className="banner-btn" onClick={onMenuClick}>
                  Ver Menú
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
