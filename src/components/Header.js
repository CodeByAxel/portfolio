import React from "react";
import "./Header.css";
const handleScroll = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
function Header() {
  return (
    
    <header className="header">
      <div className="logo">CodeByAxel</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#inicio" onClick={() => handleScroll("inicio")}>Inicio</a></li>
          <li><a href="#sobremi" onClick={() => handleScroll("sobremi")}>Sobre mí</a></li>
          <li><a href="#proyectos" onClick={() => handleScroll("proyectos")}>Proyectos</a></li>
          <li><a href="/cv-codebyaxel.pdf" target="_blank" rel="noopener noreferrer"  onClick={(e) => e.stopPropagation()}>CV</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;