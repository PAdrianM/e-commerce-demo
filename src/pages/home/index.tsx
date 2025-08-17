// import GlassCard from "../../components/cards/glass_card/GlassCard";
import Banner from "../../components/banner/Banner";
import firstImgBanner from "../../assets/img/banner_images/first_demo_banner.png";
import secondImgBanner from "../../assets/img/banner_images/second_demo_banner.png";
import thirdImgBanner from "../../assets/img/banner_images/4_demo_banner.png";
import DishSection from "../../components/cards/top_dish_card/DishSection";
import { useTheme } from "../../contexts/ThemeContext";

const Home = () => {
  const { currentTheme } = useTheme();
  return (
    <>
      {/* Banner simple */}
      <Banner
        titleMain="RESTAURANT"
        titleSub="DEMO"
        restaurantDescription="Un producto de tejido digital"
        images={[firstImgBanner, secondImgBanner, thirdImgBanner]}
        onMenuClick={() => console.log("Ir al menú")}
      />

      <div style={{ display: "flex", gap: "16px" }}>
        <DishSection theme={currentTheme} />
      </div>
    </>
  );
};

export default Home;
