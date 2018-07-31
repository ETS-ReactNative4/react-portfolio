import React, { Component } from "react";
class RenderSingle extends Component {
  componentDidMount = () => {
    this.props.callAPI(
      this.props.elements.gitHub.replace("https://github.com/", "")
    );
  };
  normaliseDate = dateString => {
    let dateArr = this.props.reverseArr(dateString.split("-"));
    console.log(this.props.reverseArr(dateArr));
    let newDate = dateArr.reduce((accum, currVal, index) => {
      return `${accum}-${currVal}`;
    });
    return newDate;
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
          <div className="singleLink">
            <a href={this.props.elements.gitHub}>GitHub</a>{" "}
            {this.props.elements.deployed || this.props.elements.video
              ? " | "
              : ""}
            {/* conditional for the deployed link */}
            {this.props.elements.deployed ? (
              <a href={this.props.elements.deployed}>Deployed</a>
            ) : (
              ""
            )}
            {/* conditional for the video link */}
            {this.props.elements.video ? (
              <a href={this.props.elements.video}>Video</a>
            ) : (
              ""
            )}
          </div>
          {/* the tech used */}
          <p className="techUsed">{this.props.elements.technologies}</p>
          {/* description */}
          <p className="description">{this.props.elements.description}</p>
          {/* the api results */}
          <div className="singleText">
            <p className="resultsHeader">Five most recent commits: </p>
            {this.props.results.map(currVal => {
              return (
                <p key={currVal.commit.committer.date}>
                  {this.normaliseDate(
                    currVal.commit.committer.date.split("T")[0]
                  )}: {currVal.commit.message}
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
