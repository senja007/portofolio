import React from "react";
import NavBar from "./component/NavBar";
import Service from "./component/Service"
import './App.css';
import Portofolio from "./component/Portofolio";
import Home from "./component/Home";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Service />
      <Portofolio />
    </div>
  );
}

export default App;
