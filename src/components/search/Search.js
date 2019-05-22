import React, { Component } from "react";
//  TO CONNECT TO REDUX STORE 
import { connect } from "react-redux";
import {getSearch} from "../../store/actions/RecipeAction"

import "../../App.css";

class Search extends Component {

  state={
    search:"",

  }

    //  -----------------------------------------------
  // GET RECIPES FROM SEARCH WHEN WEBPAGE LOAD
  //  -----------------------------------------------

  handleChange = e => {
    this.setState({
      search: e.target.value
      
    });
  };

 

  handleSubmit = e => {
    e.preventDefault();
this.props.getSearch(this.state.search);
this.props.position();
   
//  console.log(this.state.search);

    // this.position();

    this.setState({
      search: ""
    });
  };

  render() {
    // const { value, handleChange, handleSubmit } = this.props;
    return (
      <React.Fragment>
        <form className="input-group"  onSubmit={this.handleSubmit}>
          <div className="input-group-prepend">
            <i className="fas fa-search" />
          </div>
      <label htmlFor="search" hidden>Search</label>
          <input
            name="search"
            value={this.state.search || ""}
            onChange={this.handleChange}
            placeholder="chicken, onion, carrot"
            className="form-control"
          />
        </form>
      </React.Fragment>
    );
  }
}
 

 
  export default connect(null, {getSearch})(Search);
