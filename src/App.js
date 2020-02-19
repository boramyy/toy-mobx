import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import SuperMarket from "./components/superMarket/SuperMarket";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <SuperMarket />
    </div>
  );
}

export default App;
