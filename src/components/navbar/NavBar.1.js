import React from "react";
// import { NavLink, withRouter } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Search from "../search/Search";

const Navbar = props => {
  // console.log(props);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          Cooking-Chef
        </a>
        <div className="seo d-flex ">
          <Search
            name="search"
            value={props.search}
            handleChange={props.handleChange}
            placeholder=" What would you like to cook?"
          />

          <i className="fab fa-twitter-square" />
          <i className="fab fa-pinterest-square" />
          <i className="fab fa-instagram" />
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
// high order compo = withRouter super charging a component
