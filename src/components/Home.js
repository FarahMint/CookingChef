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
    details: recipeDetails,
    text: "",
    suggestionSelect: false
  };

  handleChange = e => {
    const userInput = e.target.value;
    let search = [];
    // console.log(this.state.details);
    const { details } = this.state;

    if (userInput.length > 0) {
      let regex = new RegExp(`^${userInput}`, "i");

      // const recipeSelected = details.map( item => <RecipeSelected key={item.id} item ={item}/>)
      // TITLE FILTER
      search = details
        .map(recipe => recipe.title)
        .sort()
        .filter(item => regex.test(item));
    }

    this.setState(() => ({
      search,
      text: userInput
    }));
  };

  suggestionSelected = value => {
    // updatestate
    this.setState(() => ({
      text: value,
      // when user select an item empty the array
      search: []
    }));
  };

  displaySuggestion = () => {
    const { search } = this.state;
    // console.log(search);
    if (search.length > 0) {
      return (
        <ul className="suggestionBox">
          {search.map((item, index) => (
            // suggestionSelected fire when click

            <li key={index} onClick={() => this.suggestionSelected(item)}>
              {item}
            </li>
          ))}
        </ul>
      );
    }
  };

  // render recipe selected
  // const recipeSelected = details.map( item => <PostList  key={item.id} item ={item} posts={posts} />)

  // return ({recipeSelected})

  // function RecipeSelected(props){return(<div>..{props.item.image} ....</div>)}

  render() {
    const { posts, details, search, text } = this.state;

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
              <Search
                details={details}
                search={search}
                text={text}
                handleChange={this.handleChange}
                suggestionSelected={this.suggestionSelected}
                displaySuggestion={this.displaySuggestion}
              />

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
