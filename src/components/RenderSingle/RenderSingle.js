import React, { Component } from "react";
class RenderSingle extends Component {
  componentDidMount = () => {
    this.props.callAPI(
      this.props.elements.gitHub.replace("https://github.com/", "")
    );
  };
  render() {
    return (
      <div className="card singleTextBox">
        {/* {props.callAPI(props.elements.gitHub.replace("https://github.com/", ""))} */}
        <div>
          <img
            className="img-fluid singleImage"
            src={this.props.elements.thumbnail}
            alt={this.props.elements.name}
          />
          <a href={this.props.elements.gitHub}>GitHub</a>{" "}
          {this.props.elements.deployed ? (
            <a href={this.props.elements.deployed}>Deployed</a>
          ) : (
            ""
          )}
          {this.props.elements.video ? (
            <a href={this.props.elements.video}>Video</a>
          ) : (
            <p />
          )}
          <p>{this.props.elements.description}</p>
        </div>
      </div>
    );
  }
}

export default RenderSingle;
