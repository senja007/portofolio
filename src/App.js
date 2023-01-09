import React from "react";
import './App.css';
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Service from "./component/Service"
import Portofolio from "./component/Portofolio";
import Team from "../src/component/Team";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Service />
      <Portofolio />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
