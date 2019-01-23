import React, { Component } from "react";
import PostList from "./PostList";
import showcase from "../showcase.jpeg";
import { recipes } from "../tempList";
// import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    posts: recipes
  };

  render() {
    const { posts } = this.state;

    const divStyle = {
      height: "80vh",
      backgroundImage: "url(" + showcase + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    };

    // function HelloWorldComponent() {
    //   return <div style={divStyle}>Hello World!</div>;
    // }

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
                <i className="fa fa-search searchIcon" />
                <input
                  className="searchBox"
                  type="search"
                  name="search"
                  placeholder=" What would you like to cook?"
                />
                <input type="submit" value="Search" className="searchButton" />
              </div>
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
