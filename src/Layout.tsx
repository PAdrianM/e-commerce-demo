import React, { useEffect, useState } from "react";
import "./Theme.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/lading_navbar/Navbar";
import { ThemeContext } from "../src/contexts/ThemeContext";

interface LayoutProps {
  theme?: "standard" | "urban" | "formal" | "alegre";
  withImage?: boolean;
}

// Mapeo entre tema general y clase navbar
const themeToNavbarClass: Record<string, string> = {
  urban: "urban-iconic",
  alegre: "alegre-waves",
  formal: "natural",
  standard: "standard",
};

const Layout: React.FC<LayoutProps> = ({
  theme = "formal",
  withImage = false,
}) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    document.body.className = ""; // limpiar clases
    document.body.classList.add(`${currentTheme}-theme`); // agregar tema general
    if (withImage) {
      document.body.classList.add("bg-image"); // fondo opcional
    }
  }, [currentTheme, withImage]);

  // Función para cambiar tema dinámicamente
  const changeTheme = (
    newTheme: "standard" | "urban" | "formal" | "alegre"
  ) => {
    setCurrentTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      <div className="layout-container">
        <header>
          <Navbar theme={themeToNavbarClass[currentTheme]} />
          {/* Botones para cambiar tema - solo para demo */}
          <div
            style={{
              position: "fixed",
              top: "10px",
              right: "10px",
              zIndex: 1000,
            }}
          >
            <button onClick={() => changeTheme("standard")}>Standard</button>
            <button onClick={() => changeTheme("urban")}>Urban</button>
            <button onClick={() => changeTheme("formal")}>Formal</button>
            <button onClick={() => changeTheme("alegre")}>Alegre</button>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
