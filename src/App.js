import React , { Component } from "react";
 
 
import SideNav from "./components/Navside/SideNav"
import Toolbar from "./components/Toolbar/Toolbar"
import BackDrop from "./components/Backdrop/BackDrop"

import Home from "./components/Home/Home";
import Recipe from "./components/Recipe/Recipe";
import FavoriteSelection from "./components/FavoriteSelection/FavoriteSelection";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
//  TO CONNECT TO REDUX STORE 
import { connect } from "react-redux";

import PropTypes from 'prop-types';

class App extends Component {
  state ={
     sideNavOpen: false,
  }


// *********** NAVBAR ***********
 toggleNavHandler = ()=>{
  this.setState((prevState)=>({
    sideNavOpen: !prevState.sideNavOpen,
  }))
};

backdropHandler = () =>{
  this.setState({
    sideNavOpen: false
  })
};



  render(){
  // let sideNav;
  let backdrop;

if(this.state.sideNavOpen){

   backdrop =   <BackDrop 
   backdropHandler={this.backdropHandler} />;
}

    return (   
      <BrowserRouter>
        <div className="App">
        <div className="wrapper">
        <Toolbar 
        toggleNavHandler ={this.toggleNavHandler}
        selection={this.props.selection}/>
      
      <SideNav 
   show= {this.state.sideNavOpen}
    toggleNavHandler ={this.toggleNavHandler }  
   selection={this.props.selection}/>;
        
        {backdrop}

        <main style={{marginTop:"64px"}}>
          
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
            <Route 
            exact
             path="/user/selection/" 
             render={props => (
              <FavoriteSelection
                {...props}
              />
            )}
            />
          </Switch>
        </main>

          </div>
          <Footer />
        </div>
      </BrowserRouter>
    
    );
  }
  }

 App.propTypes = {
  sideNavOpen: PropTypes.bool,
  recipe: PropTypes.object,
  selection: PropTypes.array,
  };


  const mapStateToProps= (state)=>{
    return{  
      recipe: state.recipe.recipe,
      selection:state.recipe.selection
    }
  }

export default connect(mapStateToProps)(App);
