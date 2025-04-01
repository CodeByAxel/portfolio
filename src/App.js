import React from "react";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Inicio />
      <SobreMi />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;