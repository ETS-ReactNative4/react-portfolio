import React from "react";

const Card = props => (
  <div className="card projectThumbnail">
    <img className=" img-fluid" src={props.thumbnail} alt={props.name} />
    <div className="card-body">
      <h1 className="card-text">{props.name}</h1>
      <a href={props.gitHub}>GitHub</a>{" "}
      {props.deployed ? <a href={props.deployed}>Deployed</a> : <p />}
    </div>
  </div>
);

export default Card;
