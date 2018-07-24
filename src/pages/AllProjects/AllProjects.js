import Img from "../../components/Img";
import projects from "../../assets/projects.json";
import React, { Component } from "react";

class allProjects extends Component {
  render() {
    return (
      <div>
        {projects.map(element => {
          <Img thumbnail={element.thumbnail} />;
        })}
      </div>
    );
  }
}

export default allProjects;
