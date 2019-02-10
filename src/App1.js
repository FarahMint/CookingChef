import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/Home/Home";
import Recipe from "./components/Recipe/Recipe";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    search: "",
    amount: 15,
    apiUrl: `https://www.food2fork.com/api/search?key=`,
    API_KEY: API_KEY,
    recipes: [],
    id: ""
  };

  async getRecipes() {
    try {
      const data = await fetch(`${this.state.apiUrl}${this.state.API_KEY}`);
      const jsondata = await data.json();

      this.setState({
        recipes: jsondata.recipes
      });
      // console.log(this.state.recipes);
    } catch (err) {
      console.log(err);
    }
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  getSearch = async () => {
    const { apiUrl, API_KEY, search } = this.state;
    try {
      const data = await fetch(`${apiUrl}${API_KEY}&q=${search}`);
      const jsondata = await data.json();

      this.setState({
        recipes: jsondata.recipes
      });
      // console.log(this.state.recipes);
    } catch (err) {
      console.log(err);
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    this.getSearch();
  };

  componentDidMount = () => {
    // this.getRecipes();
    // const json = localStorage.getItem("recipes");
    // const recipes = JSON.parse(json);
    // this.setState({ recipes });
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
          <NavBar
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            value={this.state.search}
          />
          <Switch>
            <Route
              exact
              path="/"
              // component={Home}
              render={props => <Home {...props} recipes={this.state.recipes} />}
            />
            {/* TODO- to keep the search bar when render one particular recipe -> try render method used for route home above and check the props we get transfer to recipe coponent */}
            {/* <Route exact path="/:recipe_id" component={Recipe} /> */}
            <Route
              exact
              path="/:recipe_id"
              render={props => (
                <Recipe {...props} recipes={this.state.recipes} />
              )}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
