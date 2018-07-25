import Card from "../../components/Card";
import React from "react";

const renderArr = props => (
  <div className="row">
    {props.array.map((currVal, index) => {
      return (
        <Card
          key={currVal.name}
          thumbnail={currVal.thumbnail}
          name={currVal.name}
        />
      );
    })}
    {}
  </div>
);

export default renderArr;
