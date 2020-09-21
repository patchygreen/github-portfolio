import React from "react";
import Profile from "./Profile";
import Header from "../components/Header/Header";
import logo from "../GitHub-Mark-Light-64px.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Profile />
    </div>
  );
}

export default App;
