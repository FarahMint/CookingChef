import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";
import Recipe from "./components/Recipe/Recipe";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/:recipe_id" component={Recipe} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
