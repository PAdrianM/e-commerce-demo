import { useEffect, useState } from "react";
import "./ThemeToggle.css"; // puedes usar tus estilos aquí

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
      {theme === "dark" ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
    </button>
  );
};

export default ThemeToggle;