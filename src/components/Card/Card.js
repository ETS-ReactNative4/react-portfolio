import React from "react";

const Card = props => (
  <div className="card col-xs-12 col-sm-6 col-md-4 projectThumbnail">
    <img className=" img-fluid" src={props.thumbnail} alt={props.name} />
    <div className="card-body">
      <p className="card-text">{props.name}</p>
    </div>
  </div>
);

export default Card;
