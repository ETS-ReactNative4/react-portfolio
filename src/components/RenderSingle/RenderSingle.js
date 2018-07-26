import React from "react";

const RenderSingle = props => (
  <div>
    <img
      className=" img-fluid"
      src={props.elements.thumbnail}
      alt={props.elements.name}
    />{" "}
  </div>
);
export default RenderSingle;
