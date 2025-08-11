// import GlassCard from "../../components/cards/glass_card/GlassCard";
import Banner from "../../components/banner/Banner";
import firstImgBanner from "../../assets/img/banner_images/first_demo_banner.png";
import secondImgBanner from "../../assets/img/banner_images/second_demo_banner.png";
import thirdImgBanner from "../../assets/img/banner_images/third_demo_banner.png";

const Home = () => {
  return (
    <>
      {/* <GlassCard
        title="Delicious Pasta"
        description="A classic Italian dish with a rich tomato sauce."
        price="12.99"
        imageUrl="https://i.pinimg.com/736x/7b/5a/04/7b5a04efbf87dce7fef293f051992efe.jpg"
      /> */}

      {/* Banner simple */}
      <Banner
        titleMain="Restaurant"
        titleSub="Ecommerce Demo "
        restaurantDescription="Un producto de tejido digital"
        images={[firstImgBanner, secondImgBanner, thirdImgBanner]}
        onMenuClick={() => console.log("Ir al menú")}
      />

      {/* Banner con carousel */}
      {/* <Banner
        titleMain="Our New"
        titleSub="Restaurant"
        images={imagesMultiple}
        onMenuClick={handleMenuClick}
      /> */}
    </>
  );
};

export default Home;
