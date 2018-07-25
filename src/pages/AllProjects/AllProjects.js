import Card from "../../components/Card";
import importProjects from "../../projects.json";
import React from "react";

const AllProjects = props => (
  <div className="row">
    {importProjects.map((currVal, index) => {
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

export default AllProjects;
