import React, { Component } from "react";
import "./App.css";
import importProjects from "./projects.json";
import RenderAll from "./components/RenderAll";
import RenderFeatured from "./components/RenderFeatured";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import API from "./utils/API";
import RenderSingle from "./components/RenderSingle";
import AboutMe from "./components/AboutMe";

class App extends Component {
  state = {
    focus: "all",
    sort: "default",
    apiResult: []
  };

  callAPI = gitHubCode => {
    // takes in a github project, in the form "user/project"
    API.gitCommits(gitHubCode).then(res => {
      // console.log(res.data);
      this.setState({ apiResult: res.data.slice(0, 5) });
    });
  }; // sets the state equal to the results

  changeFocus = newFocus => {
    // tkaes in a string
    this.setState({ focus: newFocus });
    window.scrollTo(0, 0);
  }; // changes the state to render a different component

  reverseArr = array => {
    // takes in an array as an argument
    let dump = [];
    for (let i = array.length - 1; i >= 0; i--) {
      dump.push(array[i]);
    }
    return dump;
  }; // returns the reverse, without affecting the original array

  handleScroll = () => {
    let navbar = document.getElementById("mainNav");
    const sticky = navbar.offsetTop;
    if (!this.state.stickyPos) {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        this.setState({ stickyPos: sticky });
      }
      return;
    }
    if (window.pageYOffset < this.state.stickyPos) {
      navbar.classList.remove("sticky");
      this.setState({ stickyPos: false });
    }
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    return (
      <div className="App">
        {/* <img src="./assets/images/Beach.jpg" alt="beach" /> */}
        <h1 id="navName">Marcus Hilaire</h1>

        <div id="mainNav">
          <NavBar focus={this.state.focus} changeFocus={this.changeFocus} />
          {typeof this.state.focus === "object" ? (
            <h3 className="focusedProject">
              <i
                onClick={() => this.changeFocus("featured")}
                className="fa fa-arrow-left fa-lg"
                aria-hidden="true"
              />
              {`  ${this.state.focus.name}`}
            </h3>
          ) : (
            ""
          )}
        </div>

        <div className="container" id="content">
          {/* render only featured projects */}
          {this.state.focus === "featured" ? (
            <RenderFeatured
              array={this.reverseArr(importProjects)}
              changeFocus={this.changeFocus}
            />
          ) : (
            ""
          )}
          {/* render all projects */}
          {this.state.focus === "all" ? (
            <RenderAll array={importProjects} changeFocus={this.changeFocus} />
          ) : (
            ""
          )}
          {/* render about me/contact */}
          {this.state.focus === "about" ? <AboutMe /> : ""}
          {/* render single project */}
          {typeof this.state.focus === "object" ? (
            // this.serveComponent(this.state.focus)
            <RenderSingle
              elements={this.state.focus}
              callAPI={this.callAPI}
              results={this.state.apiResult}
              reverseArr={this.reverseArr}
            />
          ) : (
            ""
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
