import React from "react";
import './App.css';
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Service from "./component/Service"
import Portofolio from "./component/Portofolio";
import Team from "../src/component/Team";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Service />
      <Portofolio />
      <Team />
    </div>
  );
}

export default App;
