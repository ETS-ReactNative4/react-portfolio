import React, { Component } from "react";
import logo from "./d20.png";
import "./App.css";
import importProjects from "./projects.json";
import RenderArr from "./components/RenderArr";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <RenderArr array={importProjects} />
        </div>
      </div>
    );
  }
}

export default App;
