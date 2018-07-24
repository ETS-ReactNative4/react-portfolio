import React from "react";

const Img = props => (
  <div>
    {props.name}
    <img src={require(`${props.thumbnail}`)} />
  </div>
);

export default Img;
