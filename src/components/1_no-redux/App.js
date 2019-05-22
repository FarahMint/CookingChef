import React  from "react";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/Home/Home";
import Recipe from "./components/Recipe/Recipe";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";


const App =()=> {

  //     -----------------------------------------------
  // GET ALL RECIPES WHEN WEBPAGE LOAD
  //  -----------------------------------------------
  // async getRecipes() {
  //   try {
  //     const data = await fetch(`${this.state.URL}${REACT_APP_API_KEY}`);
  //     const jsondata = await data.json();

  //     this.setState({
  //       recipes: jsondata.recipes
  //     });
  //     // console.log(this.state.recipes);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  //  -----------------------------------------------
  // GET RECIPES FROM SEARCH WHEN WEBPAGE LOAD
  //  -----------------------------------------------

  // handleChange = e => {
  //   this.setState({
  //     search: e.target.value
  //   });
  // };

  // getSearch = async () => {
  //   const { URL, search } = this.state;
  //   try {
  //     const data = await fetch(`${URL}${REACT_APP_API_KEY}&q=${search}`);
  //     const jsondata = await data.json();

  //     this.setState(() => ({ recipes: jsondata.recipes }));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.getSearch();
  //   this.position();

  //   this.setState({
  //     search: ""
  //   });
  // };

  //  -----------------------------------------------
  // GET POSITION OF RECIPES LIST TO SCROLL AFTER SEARCH
  //  -----------------------------------------------

  // const position = () => {
  //   const recipeList = document.querySelector("#recipes-list");

  //   const offsetTop = recipeList.offsetTop;
  //   window.scrollTo(0, offsetTop + 500);
  // };

    return (   
      <BrowserRouter>
        <div className="App">
          <NavBar
          //  position={position()} 
           />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                />
              )}
            />

            {/* <Route exact path="/:recipe_id/" 
             component={Recipe} 
            /> */}
            <Route 
            exact
             path="/:recipe_id/" 
             render={props => (
              <Recipe
                {...props}
              />
            )}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    
    );
  }

export default App;
