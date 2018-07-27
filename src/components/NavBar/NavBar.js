import React from "react";
const NavBar = props => (
  <div className="container">
    <div className="row">
      {props.focus === "featured" ? (
        <h3 className="col-xs-12 col-md-4 focus">Featured Projects</h3>
      ) : (
        <h3
          onClick={() => props.changeFocus("featured")}
          className="col-xs-12 col-md-4 navPill "
        >
          Featured Projects
        </h3>
      )}
      {props.focus === "all" ? (
        <h3 className="col-xs-12 col-md-4 focus">All Projects</h3>
      ) : (
        <h3
          onClick={() => props.changeFocus("all")}
          className="col-xs-12 col-md-4 navPill"
        >
          All Projects
        </h3>
      )}{" "}
      {props.focus === "about" ? (
        <h3 className="col-xs-12 col-md-4 focus">About Me</h3>
      ) : (
        <h3
          onClick={() => props.changeFocus("about")}
          className="col-xs-12 col-md-4 navPill"
        >
          About Me
        </h3>
      )}
    </div>
  </div>
);
export default NavBar;
