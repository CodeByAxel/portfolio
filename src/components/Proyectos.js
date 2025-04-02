import React from "react";
import "./Proyectos.css";

function Proyectos() {
  return (
    <section id="proyectos" className="proyectos">
      <h2>Proyectos</h2>

      <div className="grid-proyectos">
        <div className="proyecto">
          <h3>Proyecto 1</h3>
          <p>Descripción corta del proyecto número 1. Explica qué hace o cuál fue tu objetivo.</p>
          <span>Tecnologías: HTML, CSS, JavaScript</span>
          <a href="https://codebyaxel.dev/proyecto1" target="_blank" rel="noopener noreferrer">
            Ver proyecto
          </a>
        </div>

        <div className="proyecto">
          <h3>Proyecto 2</h3>
          <p>Descripción corta del proyecto número 2. Puede ser una app, landing, juego, etc.</p>
          <span>Tecnologías: React, Tailwind, Firebase</span>
          <a href="https://codebyaxel.dev/proyecto2" target="_blank" rel="noopener noreferrer">
            Ver proyecto
          </a>
        </div>

        {/* Puedes añadir más proyectos aquí */}
        <div className="proyecto">
          <h3>Proyecto 3</h3>
          <p>Descripción corta del proyecto número 2. Puede ser una app, landing, juego, etc.</p>
          <span>Tecnologías: React, Tailwind, Firebase</span>
          <a href="https://codebyaxel.dev/proyecto3" target="_blank" rel="noopener noreferrer">
            Ver proyecto
          </a>
        </div>
        <div className="proyecto">
          <h3>Proyecto 4</h3>
          <p>Descripción corta del proyecto número 2. Puede ser una app, landing, juego, etc.</p>
          <span>Tecnologías: React, Tailwind, Firebase</span>
          <a href="https://codebyaxel.dev/proyecto4" target="_blank" rel="noopener noreferrer">
            Ver proyecto
          </a>
        </div>
        <div className="proyecto">
          <h3>Proyecto 5</h3>
          <p>Descripción corta del proyecto número 2. Puede ser una app, landing, juego, etc.</p>
          <span>Tecnologías: React, Tailwind, Firebase</span>
          <a href="https://codebyaxel.dev/proyecto5" target="_blank" rel="noopener noreferrer">
            Ver proyecto
          </a>
        </div>
        <div className="proyecto">
          <h3>Proyecto 6</h3>
          <p>Descripción corta del proyecto número 2. Puede ser una app, landing, juego, etc.</p>
          <span>Tecnologías: React, Tailwind, Firebase</span>
          <a href="https://codebyaxel.dev/proyecto6" target="_blank" rel="noopener noreferrer">
            Ver proyecto
          </a>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
