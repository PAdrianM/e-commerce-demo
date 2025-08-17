import React from "react";
import TopDishCard from "./TopDishCard";
import { getDishDataByTheme } from "../../../data/dishData/DishData";

interface DishSectionProps {
  theme: string;
}

const DishSection: React.FC<DishSectionProps> = ({ theme }) => {
  const dishData = getDishDataByTheme(theme);

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      {dishData.map((dish) => (
        <TopDishCard
          key={dish.id}
          title={dish.title}
          description={dish.description}
          price={dish.price}
          imageUrl={dish.imageUrl}
        />
      ))}
    </div>
  );
};

export default DishSection;
