import React, { Component } from "react";

import axios from "axios";
import showcase from "../../showcase.jpeg";

import ImageResults from "../image-results/ImageResults";

class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: `https://www.food2fork.com/api/search`,
    apiUrl_details: `https://www.food2fork.com/api/get?key=`,

    API_KEY: `129ebdcf3f99a485fca36c622dc88df0`,
    recipes: [],
    id: ""
  };

  // https://www.food2fork.com/api/search?key={API_KEY}&q=${searchText}
  onTextChange = e => {
    const val = e.target.value;
    this.setState(
      {
        //look @ whatever the name is in txtField
        // want to set dearch text in state to whatever the value is

        // important that the name match the state name
        // state = ->  searchText
        // <TextField name="searchText"
        // [e.target.name]: e.target.value
        [e.target.name]: val
      },
      () => {
        if (val === "") {
          this.setState({
            recipes: []
          });
        } else {
          axios
            .get(
              `${this.state.apiUrl}?key=${this.state.API_KEY}&q=${
                this.state.searchText
              }`
            )
            .then(res =>
              this.setState({
                recipes: res.data.recipes
              })
            )
            .catch(err => console.log(err));
        }
      }
    );
  };

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);

    this.setState({ recipes });
  };
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    // assign to local storage
    localStorage.setItem("recipes", recipes);
  };
  render() {
    const divStyle = {
      height: "80vh",
      backgroundImage: "url(" + showcase + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    };
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div
              className="showcase w-100 d-flex flex-column align-items-center justify-content-center"
              style={divStyle}
            >
              <h1>find a recipe</h1>

              <div className="searchContainer">
                <input
                  name="searchText"
                  value={this.state.searchText}
                  onChange={this.onTextChange}
                  placeholder=" What would you like to cook?"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <ImageResults recipes={this.state.recipes} />
          </div>
        </div>

        {/* {this.state.recipes.length > 0 ? (
          <ImageResults recipes={this.state.recipes} />
        ) : null} */}
      </React.Fragment>
    );
  }
}
export default Search;
