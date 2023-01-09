import React from "react";
import './App.css';
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Service from "./component/Service"
import Portofolio from "./component/Portofolio";

import Team from "../src/component/Team";
import Home from "./component/Home";
import Contact from "./component/Contact";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Service />
      <Portofolio />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
