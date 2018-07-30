import React from "react";

const Card = props => (
  <div className="card projectThumbnail">
    {/* {console.log(props.techgnologies)} */}
    <img
      className=" img-fluid"
      src={props.thumbnail}
      alt={props.name}
      onClick={() => {
        props.changeFocus(props);
      }}
    />
    <div className="card-body">
      <h1 className="card-text">{props.name}</h1>
      <p>
        <a href={props.gitHub}>GitHub</a>
        {props.deployed || props.video ? " | " : ""}
        {props.deployed ? <a href={props.deployed}>Deployed</a> : ""}
        {props.video ? <a href={props.video}>Video</a> : ""}
      </p>
      <p>{props.technologies}</p>
    </div>
  </div>
);

export default Card;
