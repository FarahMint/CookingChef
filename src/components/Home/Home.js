import React, { Component } from "react";
import PropTypes from 'prop-types';

  import showcase from "../../showcase.jpeg";

 import { Link } from "react-router-dom";
   import Search from "../search/Search";
//  TO CONNECT TO REDUX STORE 
  import { connect } from "react-redux";
  import {getRecipes} from "../../store/actions/RecipeAction"

 import "./home.css"

 class Home extends Component {

   //  -----------------------------------------------
  // GET POSITION OF RECIPES LIST TO SCROLL AFTER SEARCH
  //  -----------------------------------------------

  position = () => {
    const recipeList = document.querySelector("#recipes-list");

    const offsetTop = recipeList.offsetTop;
    window.scrollTo(0, offsetTop + 500);
  };

  componentDidMount() {
  this.props.getRecipes();
  }

  render() {
 
    const divStyle = {
      height: "70vh",

      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(" +
        showcase +
        ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    };

  const { recipes } = this.props.recipes;
 
    return (
     
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div
              className="showcase w-100 col-xs-12 col-sm-12 col-md-12 d-flex justify-content-center align-items-center"
              style={divStyle}
            >
               <Search
                position ={this.position}/>  
            </div>
          </div>
        </div>

        <div
          className="container container__recipes-list">
 
          <h2 className="title__recipes-list">recipes and guides...</h2>

         
          <div className="row">
            {recipes && recipes.map(item => {
              return (
                <div
                  className="col-sm-12 col-md-6 col-lg-4"
                  key={item.recipe_id}
                >
                  <div
                    className="mx-auto"
                    style={{ width: "18rem" }}
                    id="recipes-list"
                  >
                    <div className="content mt-3 mb-3 gallery-item">
                      <Link to={`/${item.recipe_id}`}>
                        {item.title > 17 ? (
                          <h1 className="card-title">{item.title}</h1>
                        ) : (
                          (item.title = `${item.title.substring(0, 17)}...`)
                        )}

                        <img
                          className="responsive-img rounded  mx-auto gallery-item__img"
                          src={item.image_url}
                          alt={item.title}
                          style={{ width: "250px", height: "250px" }}
                        />
                      </Link>
                      <a
                        className="sub__title"
                        href={item.publisher_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        provided by :{item.publisher}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> 
        </div>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  getRecipes:  PropTypes.func,
  recipes: PropTypes.array,
    };



const mapStateToProps= (state)=>{

  return{
    recipes : state.recipe.recipes
  }
}

  export default connect(mapStateToProps, {getRecipes})(Home);
 