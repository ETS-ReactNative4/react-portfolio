import React, { Component } from "react";
import logo from "./d20.png";
import "./App.css";
import importProjects from "./projects.json";
import RenderAll from "./components/RenderAll";

class App extends Component {
  state = {
    focus: "all"
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">How do you want to do this?</h1>
        </header>
        <div className="container">
          {this.state.focus === "all" ? (
            <RenderAll array={importProjects} />
          ) : (
            <p />
          )}
          {/* <RenderAll array={importProjects} /> */}
        </div>
      </div>
    );
  }
}

export default App;
