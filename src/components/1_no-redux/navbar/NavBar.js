import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import "../../App.css";

class Navbar extends Component {
  render() {
    // const { value, handleChange, handleSubmit } = this.props;

    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Cooking-Chef
          </a>

          <div className="seo">
            <i className="fab fa-twitter-square" />
            <i className="fab fa-pinterest-square" />
            <i className="fab fa-instagram" />
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
// high order compo = withRouter super charging a component
