import React from "react";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Skills from "./components/Skills";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
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