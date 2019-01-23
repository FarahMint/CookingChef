import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  // console.log(props);

  // To redirect page
  // setTimeout(() => {
  //   props.history.push("/");
  // }, 3000);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          Cooking-Chef
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
// high order compo = withRouter super charging a component
