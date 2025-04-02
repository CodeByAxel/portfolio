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
          <a href="https://x.com/CodeByAxel" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a href="https://www.linkedin.com/in/axel-ortiz-4a2240194/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/34722728114" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Inicio;