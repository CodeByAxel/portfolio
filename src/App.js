import React from "react";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Skills from "./components/Skills";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Footer from "./components/Footer";
import "./App.css";
import MatrixBackground from "./components/MatrixBackground";

function App() {
  return (
    <div className="App">
      <MatrixBackground />
      <Header />
      <Inicio />
      <Skills />
      <SobreMi />
      <Proyectos />
      <Footer />
    </div>
  );
}

export default App;