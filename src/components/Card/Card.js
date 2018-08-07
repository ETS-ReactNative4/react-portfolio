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
            <a href={props.gitHub} target="_blank">
              GitHub
            </a>
            {props.deployed || props.video ? " | " : ""}
            {props.deployed ? (
              <a href={props.deployed} target="_blank">
                Deployed
              </a>
            ) : (
              ""
            )}
            {props.video ? (
              <a href={props.video} target="_blank">
                Video
              </a>
            ) : (
              ""
            )}
            {"  "}
            <i className="fa fa-star" aria-hidden="true" />
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
        <img className="img-fluid" src={props.thumbnail} alt={props.name} />
        <div className="card-body">
          <p>
            <a href={props.gitHub} target="_blank">
              GitHub
            </a>
            {props.deployed || props.video ? " | " : ""}
            {props.deployed ? (
              <a href={props.deployed} target="_blank">
                Deployed
              </a>
            ) : (
              ""
            )}
            {props.video ? (
              <a href={props.video} target="_blank">
                Video
              </a>
            ) : (
              ""
            )}
          </p>
          <h1 className="card-text">{props.name}</h1>

          <p className="techUsed">{props.technologies}</p>
        </div>
      </div>
    )}
  </div>
);

export default Card;
