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
        <div>
          <img
            className="img-fluid singleImage"
            src={this.props.elements.thumbnail}
            alt={this.props.elements.name}
          />
          <a className="singleLink" href={this.props.elements.gitHub}>
            GitHub
          </a>{" "}
          {/* conditional for the deployed link */}
          {this.props.elements.deployed ? (
            <a className="singleLink" href={this.props.elements.deployed}>
              Deployed
            </a>
          ) : (
            ""
          )}
          {/* conditional for the video link */}
          {this.props.elements.video ? (
            <a className="singleLink" href={this.props.elements.video}>
              Video
            </a>
          ) : (
            <p />
          )}
          {/* the description */}
          <p>{this.props.elements.description}</p>
          {/* the api results */}
          <div className="apiResults">
            <p className="resultsHeader">Five most recent commits: </p>
            {this.props.results.map(currVal => {
              return (
                <p key={currVal.commit.committer.date}>
                  {currVal.commit.committer.date.split("T")[0]}:{" "}
                  {currVal.commit.message}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default RenderSingle;
