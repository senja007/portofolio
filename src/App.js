import React from "react";
import NavBar from "./component/NavBar";
import Service from "./component/Service"
import './App.css';
import Portofolio from "./component/Portofolio";
import Team from "./component/Team";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Service />
      <br />
      <Portofolio />
      <br />
      <Team />
    </div>
  );
}

export default App;
