import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
 

class Navbar extends Component {
  render() {
    // const { value, handleChange, handleSubmit } = this.props;

    const basketFav = this.props.selection.length;
    // console.log(basketFav);

    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          {/* <a href="/" className="navbar-brand">
            Cooking-Chef
          </a> */}

          {/* <div className="seo">
          <NavLink to={`/user/selection/`}>
          <span>
          {(this.props.selection && this.props.selection.length > 0) && this.props.selection.length }
          </span>
          
          <i className="fas fa-shopping-basket" 
          title= { (basketFav && basketFav >0) ? (`you have ${basketFav} saved recipes`):(`favorite list empty`)}
          aria-label={(basketFav && basketFav >0) ? (`you have ${basketFav} saved recipes`):(`favorite list empty`)}
          aria-hidden="true"
          ></i>
          </NavLink>
          
            <i className="fab fa-twitter-square" />
            <i className="fab fa-pinterest-square" />
            <i className="fab fa-instagram" />
          </div> */}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
// high order compo = withRouter super charging a component
