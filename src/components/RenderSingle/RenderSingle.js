import React from "react";
const RenderSingle = props => (
  <div className="card singleTextBox">
    {props.callAPI(props.elements.gitHub.replace("https://github.com/", ""))}

    <div>
      <img
        className="img-fluid singleImage"
        src={props.elements.thumbnail}
        alt={props.elements.name}
      />
      <a href={props.elements.gitHub}>GitHub</a>{" "}
      {props.elements.deployed ? (
        <a href={props.elements.deployed}>Deployed</a>
      ) : (
        ""
      )}
      {props.elements.video ? <a href={props.elements.video}>Video</a> : <p />}
      <p>{props.elements.description}</p>
    </div>
  </div>
);
export default RenderSingle;
