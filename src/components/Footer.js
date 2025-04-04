import React from "react";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <a href="#inicio" className="boton-arriba" title="Volver arriba">
  <FaArrowUp />
</a>
  <p>© 2025 CodeByAxel · Disponible para colaboraciones · 📬 business@codebyaxel.dev</p>
</footer>
  );
}

export default Footer;