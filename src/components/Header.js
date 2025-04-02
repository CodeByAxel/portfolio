import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">CodeByAxel</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobremi">Sobre mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="/cv-codebyaxel.pdf" target="_blank" rel="noopener noreferrer"  onClick={(e) => e.stopPropagation()}>CV</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;