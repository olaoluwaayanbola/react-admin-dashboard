import React from "react";
import TopBar from "../Components/TopBar";
import SideBar from "../Components/SideBar";
import Home from "./Home";
import "../Styles/App.scss";
import UserList from "../Pages/userList/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar></TopBar>
        <div className="container">
          <SideBar className="SideBar"></SideBar>
          <Home></Home>
          <Routes>
            <Route path="/home">
              <UserList></UserList>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
