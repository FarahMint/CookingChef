import React, { Component } from "react";
import "../../App.css";

class Search extends Component {
  render() {
    const { value, handleChange, handleSubmit } = this.props;
    return (
      <React.Fragment>
        <form className="input-group" onSubmit={handleSubmit}>
          <div className="input-group-prepend">
            <i className="fas fa-search" />
          </div>

          <input
            name="search"
            value={value}
            onChange={handleChange}
            placeholder="  chicken, onion, carrot"
            className="form-control"
          />
        </form>
      </React.Fragment>
    );
  }
}
export default Search;
