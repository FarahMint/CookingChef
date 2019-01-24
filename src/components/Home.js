import React, { Component } from "react";
import PostList from "./PostList";
import Search from "./Search";
import showcase from "../showcase.jpeg";
import { recipeDetails } from "../tempDetails";
import { recipes } from "../tempList";
// import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    search: [],
    posts: recipes,
    details: recipeDetails
  };

  // searchforIngredients = () => {
  //   this.state.details.map(item => {
  //     // console.log(item.ingredients);
  //     const ingredients = item.ingredients;
  //     // console.log(ingredients);
  //     return ingredients.filter(i => {
  //       // console.log(i);
  //       return i;
  //     });
  //   });
  // };

  render() {
    const { posts, details, search } = this.state;

    // console.log(details);

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
              <Search details={details} search={search} />

              {/* {this.searchforIngredients()} */}
              {/* <div className="searchContainer">
                <i className="fa fa-search searchIcon" />
                <input
                  className="searchBox"
                  type="search"
                  name="search"
                  placeholder=" What would you like to cook?"
                />
                <input type="submit" value="Search" className="searchButton" />
              </div> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col col-lg-12 mt-5">
              <PostList posts={posts} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
