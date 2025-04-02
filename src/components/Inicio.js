import React from "react";
import "./Inicio.css";
import { FaGithub, FaLinkedin, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

function Inicio() {
  return (
    <section className="inicio" id="inicio">
      <div className="contenido">
        <h1>Axel Ortiz</h1>
        <p>Full-Stack Junior</p>
        <div className="iconos">
          <a href="https://github.com/CodeByAxel" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://x.com/TU_USUARIO" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a href="https://www.linkedin.com/in/TU_USUARIO/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/34TUNUMERO" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Inicio;