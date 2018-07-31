import React from "react";

const Card = props => (
  <div>
    {props.featured === true ? (
      <div className="card featuredThumbnail">
        <div className="featuredImg">
          <img
            className="img-fluid"
            src={props.thumbnail}
            alt={props.name}
            onClick={() => {
              props.changeFocus(props);
            }}
          />
        </div>
        <div className="card-body">
          <p>
            <a href={props.gitHub}>GitHub</a>
            {props.deployed || props.video ? " | " : ""}
            {props.deployed ? <a href={props.deployed}>Deployed</a> : ""}
            {props.video ? <a href={props.video}>Video</a> : ""}
          </p>
          <div
            onClick={() => {
              props.changeFocus(props);
            }}
          >
            <h1 className="card-text">{props.name}</h1>
            <p className="techUsed">{props.technologies}</p>
          </div>
        </div>
      </div>
    ) : (
      <div className="card projectThumbnail">
        <img className=" img-fluid" src={props.thumbnail} alt={props.name} />
        <div className="card-body">
          <p>
            <a href={props.gitHub}>GitHub</a>
            {props.deployed || props.video ? " | " : ""}
            {props.deployed ? <a href={props.deployed}>Deployed</a> : ""}
            {props.video ? <a href={props.video}>Video</a> : ""}
          </p>
          <h1 className="card-text">{props.name}</h1>

          <p className="techUsed">{props.technologies}</p>
        </div>
      </div>
    )}
  </div>
);

export default Card;
