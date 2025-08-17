// Imports de imágenes standard/alegre
import food1 from "../../assets/img/alegre/fast_food_1.png";
import food2 from "../../assets/img/alegre/fast_food_2.png";
import food3 from "../../assets/img/alegre/fast_food_3.png";
import food4 from "../../assets/img/alegre/fast_food_4.png";
// Imports de imágenes formal
import foodFormal1 from "../../assets/img/formal/no_background_1.png";
import foodFormal2 from "../../assets/img/formal/no_background_2.png";
import foodFormal3 from "../../assets/img/formal/no_background_3.png";
import foodFormal4 from "../../assets/img/formal/no_background_4.png";

export interface DishData {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export const dishDataByTheme = {
  // arreglo standard
  standard: [
    {
      id: "standard-1",
      title: "Pizza tres quesos",
      description: "Deliciosa pizza hecha al horno con un toque de amor",
      price: "Q128",
      imageUrl: food1,
    },

    {
      id: "standard-2",
      title: "Hamburguesa doble",
      description: "Deliciosa Hamburguesa doble hecha con un toque de amor",
      price: "Q200",
      imageUrl: food2,
    },

    {
      id: "standard-3",
      title: "Tacos al pastor",
      description: "Deliciosos tacos al pastor hechos con un toque de amor",
      price: "Q25",
      imageUrl: food3,
    },

    {
      id: "standard-4",
      title: "Pastel de cereza",
      description: "Delicioso pastel de cereza hecho con un toque de amor",
      price: "Q55",
      imageUrl: food4,
    },
  ],

  // arreglo urbano
  urban: [
    {
      id: "urban-1",
      title: "Pizza tres quesos",
      description: "Deliciosa pizza hecha al horno con un toque de amor",
      price: "Q128",
      imageUrl: food1,
    },

    {
      id: "urban-2",
      title: "Hamburguesa doble",
      description: "Deliciosa Hamburguesa doble hecha con un toque de amor",
      price: "Q200",
      imageUrl: food2,
    },

    {
      id: "urban-3",
      title: "Tacos al pastor",
      description: "Deliciosos tacos al pastor hechos con un toque de amor",
      price: "Q25",
      imageUrl: food3,
    },

    {
      id: "urban-4",
      title: "Pastel de cereza",
      description: "Delicioso pastel de cereza hecho con un toque de amor",
      price: "Q55",
      imageUrl: food4,
    },
  ],

  // arreglo formal
  formal: [
    {
      id: "formal-1",
      title: "Paella",
      description: "Deliciosa paella hecha con un toque de amor",
      price: "Q128",
      imageUrl: foodFormal1,
    },

    {
      id: "formal-2",
      title: "Sopa de mariscos",
      description: "Deliciosa sopa de mariscos hecha con un toque de amor",
      price: "Q200",
      imageUrl: foodFormal2,
    },

    {
      id: "formal-3",
      title: "Estofado de carne",
      description: "Delicioso estofado de carne hecho con un toque de amor",
      price: "Q25",
      imageUrl: foodFormal3,
    },

    {
      id: "formal-4",
      title: "Lasagna al forno",
      description: "Deliciosa lasagna al forno hecha con un toque de amor",
      price: "Q55",
      imageUrl: foodFormal4,
    },
  ],

  // arreglo alegre
  alegre: [
    {
      id: "alegre-1",
      title: "Pizza tres quesos",
      description: "Deliciosa pizza hecha al horno con un toque de amor",
      price: "Q128",
      imageUrl: food1,
    },

    {
      id: "alegre-2",
      title: "Hamburguesa doble",
      description: "Deliciosa Hamburguesa doble hecha con un toque de amor",
      price: "Q200",
      imageUrl: food2,
    },

    {
      id: "alegre-3",
      title: "Tacos al pastor",
      description: "Deliciosos tacos al pastor hechos con un toque de amor",
      price: "Q25",
      imageUrl: food3,
    },

    {
      id: "alegre-4",
      title: "Pastel de cereza",
      description: "Delicioso pastel de cereza hecho con un toque de amor",
      price: "Q55",
      imageUrl: food4,
    },
  ],
};

export const getDishDataByTheme = (theme: string): DishData[] => {
  return (
    dishDataByTheme[theme as keyof typeof dishDataByTheme] ||
    dishDataByTheme.standard
  );
};
