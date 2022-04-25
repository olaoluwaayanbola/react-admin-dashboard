import React from "react";
import TopBar from '../Components/TopBar'
import SideBar from "../Components/SideBar";
import '../Styles/App.scss'

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <div className="container">
        <SideBar></SideBar>
      </div>
    </div>
  );
}

export default App;
