import React from "react";
import "./SobreMi.css";
import { FaCode, FaHeadphones, FaDumbbell, FaBook } from "react-icons/fa6";




function SobreMi() {
  return (
    <section id="sobremi" className="sobremi">
      <div className="intro">
        <h2>Sobre mí</h2>
        <p>
          Mi camino en la programación comenzó con curiosidad y ganas de crear cosas desde cero.
          Poco a poco fui aprendiendo HTML, CSS, JavaScript y ahora React, con el objetivo de
          convertirme en un Full-Stack Developer. Me apasiona resolver problemas, aprender cada día
          y construir proyectos útiles y bonitos.
        </p>
      </div>

      <div className="contenedores">
        <div className="contenedor">
          <h3>Datos personales</h3>
          <ul>
            <li><strong>fecha de nacimiento:</strong> 27 de mayo del 2001</li>
            <li><strong>Teléfono:</strong> +34 722 728 114</li>
            <li><strong>Email:</strong> axelortiz.mesa@gmail.com</li>
            <li><strong>Dirección:</strong> Madrid, España</li>
          </ul>
        </div>

        <div className="contenedor">
  <h3>Intereses</h3>
  <div className="intereses">
    <div className="interes">
      <FaDumbbell className="icono-interes" />
      <p>Practico calistenia</p>
    </div>
    <div className="interes">
      <FaCode className="icono-interes" />
      <p>Me gusta programar</p>
    </div>
    <div className="interes">
      <FaHeadphones className="icono-interes" />
      <p>Escuchar música</p>
    </div>
    <div className="interes">
      <FaDumbbell className="icono-interes" />
      <p>Hacer ejercicio</p>
    </div>
    <div className="interes">
      <FaBook className="icono-interes" />
      <p>Leer</p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}

export default SobreMi;
