import React, { Component } from "react";
import logo from "./d20.png";
import "./App.css";
import importProjects from "./projects.json";
import RenderAll from "./components/RenderAll";
import RenderFeatured from "./components/RenderFeatured";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    focus: "all",
    sort: "default"
  };
  changeFocus = newFocus => {
    this.setState({ focus: newFocus });
  };
  reverseArr = array => {
    let dump = [];
    for (let i = array.length - 1; i >= 0; i--) {
      dump.push(array[i]);
    }
    return dump;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">How do you want to do this?</h1>
          <br />
          <NavBar focus={this.state.focus} changeFocus={this.changeFocus} />
        </header>
        <div className="container">
          {/* render only featured projects */}
          {this.state.focus === "featured" ? (
            <RenderFeatured
              array={this.reverseArr(importProjects)}
              sort={this.state.sort}
            />
          ) : (
            ""
          )}
          {/* render all projects */}
          {this.state.focus === "all" ? (
            <RenderAll array={importProjects} sort={this.state.sort} />
          ) : (
            ""
          )}
          {/* render about me/contact */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
