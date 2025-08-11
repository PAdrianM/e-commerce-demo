import React, { useEffect } from "react";
import "./Theme.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/lading_navbar/Navbar";

interface LayoutProps {
  theme?: "standard" | "urban" | "formal" | "alegre";
  withImage?: boolean;
}

// Mapeo entre tema general y clase navbar
const themeToNavbarClass: Record<string, string> = {
  urban: "urban-iconic", // o urban-gradient, urban-iconic
  alegre: "alegre-waves", // o alegre-sunset, alegre-burst
  formal: "natural",
  standard: "standard",
};

const Layout: React.FC<LayoutProps> = ({
  theme = "urban",
  withImage = false,
}) => {
  useEffect(() => {
    document.body.className = ""; // limpiar clases
    document.body.classList.add(`${theme}-theme`); // agregar tema general
    if (withImage) {
      document.body.classList.add("bg-image"); // fondo opcional
    }
  }, [theme, withImage]);

  return (
    <div className="layout-container">
      <header>
        <Navbar theme={themeToNavbarClass[theme]} />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;