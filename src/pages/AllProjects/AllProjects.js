// import Img from "../../components/Img";
import importProjects from "../../projects.json";
// import imageTest from "../../assets/images/projectThumbnails/Burger.jpg";
import React, { Component } from "react";

class AllProjects extends Component {
  state = {
    // projects=[]
  };
  intitializeState = () => {
    // importProjects.
  };
  componentDidMount() {
    // this.intitializeState();
    console.log(importProjects);
  }
  render() {
    return (
      <div>
        <p>hello</p>
        {importProjects.map((currVal, index) => {
          return (
            <img
              key={currVal.name}
              src={currVal.thumbnail}
              name={currVal.name}
            />
          );
          // return <p>{currVal.name}</p>;
        })}
        {}
      </div>
    );
  }
}

export default AllProjects;
