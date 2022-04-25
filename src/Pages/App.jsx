import React from "react";
import TopBar from '../Components/TopBar'
import SideBar from "../Components/SideBar";
import Home from "./Home";
import '../Styles/App.scss'
function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <div className="container">
        <SideBar className="SideBar"></SideBar>
        <Home className="Home">dnfgn</Home>
      </div>
    </div>
  );
}

export default App;
