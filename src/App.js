import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/Home/Home";
import Recipe from "./components/Recipe/Recipe";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  //  -----------------------------------------------
  // STATE
  //  -----------------------------------------------
  state = {
    recipes: [],
    search: "",
    URL: `https://www.food2fork.com/api/search?key=`,
    API_KEY: API_KEY,

    recipe_id: ""
  };

  //  -----------------------------------------------
  // GET ALL RECIPES WHEN WEBPAGE LOAD
  //  -----------------------------------------------
  async getRecipes() {
    try {
      const data = await fetch(`${this.state.URL}${this.state.API_KEY}`);
      const jsondata = await data.json();

      this.setState({
        recipes: jsondata.recipes
      });
      // console.log(this.state.recipes);
    } catch (err) {
      console.log(err);
    }
  }

  //  -----------------------------------------------
  // GET RECIPES FROM SEARCH WHEN WEBPAGE LOAD
  //  -----------------------------------------------

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  getSearch = async () => {
    const { URL, API_KEY, search } = this.state;
    try {
      const data = await fetch(`${URL}${API_KEY}&q=${search}`);
      const jsondata = await data.json();

      this.setState(() => ({ recipes: jsondata.recipes }));
    } catch (err) {
      console.log(err);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.getSearch();
    this.position();

    this.setState({
      search: ""
    });
  };

  //  -----------------------------------------------
  // GET POSITION OF RECIPES LIST TO SCROLL AFTER SEARCH
  //  -----------------------------------------------

  position = () => {
    const recipeList = document.querySelector("#recipes-list");

    const offsetTop = recipeList.offsetTop;
    window.scrollTo(0, offsetTop + 500);
  };

  // COMPONENTDIDMOUNT --- COMPONENTDIDUPDATE

  componentDidMount = () => {
    this.getRecipes();
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
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar position={this.position} />
          <Switch>
            <Route
              exact
              path="/"
              // component={Home}
              render={props => (
                <Home
                  {...props}
                  recipes={this.state.recipes}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  value={this.state.search}
                />
              )}
            />

            <Route exact path="/:recipe_id" component={Recipe} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
