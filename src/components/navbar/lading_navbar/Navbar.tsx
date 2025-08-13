import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  theme?: string;
}

const Navbar: React.FC<NavbarProps> = ({ theme = "standard" }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Cambiado a <=
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768; // Cambiado a <=
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const handleLinkClick = () => {
      if (isMobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    // Agregar event listeners a los links del menú
    const menuLinks = menuRef.current?.querySelectorAll('a');
    menuLinks?.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
      
      // Limpiar event listeners de los links
      menuLinks?.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, [menuOpen, isMobile]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${theme}`}>
      <button 
        ref={toggleRef}
        className="navbar-toggle" 
        onClick={toggleMenu} 
        aria-label="Menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>
      
      <div className="navbar-logo">
        <span className="logo-primari-text">🍽</span>
        <span className="logo-secundari-text">Logo</span>
      </div>
      
      <ul 
        ref={menuRef}
        className={`navbar-links ${menuOpen ? "active" : ""}`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#location">Location</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      
      <button className="order-btn">Ordenar Ya</button>
    </nav>
  );
};

export default Navbar;