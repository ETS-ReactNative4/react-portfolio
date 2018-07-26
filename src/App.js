import React, { Component } from "react";
import logo from "./d20.png";
import "./App.css";
import importProjects from "./projects.json";
import RenderAll from "./components/RenderAll";
import RenderFeatured from "./components/RenderFeatured";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import API from "./utils/API";

class App extends Component {
  state = {
    focus: "all",
    sort: "default"
  };
  callAPI = gitHubCode => {
    API.gitCommits(gitHubCode).then(res => {
      console.log(res.data);
    });
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
  componentDidMount = () => {
    // this.callAPI();
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
              callAPI={this.callAPI}
            />
          ) : (
            ""
          )}
          {/* render all projects */}
          {this.state.focus === "all" ? (
            <RenderAll array={importProjects} callAPI={this.callAPI} />
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
