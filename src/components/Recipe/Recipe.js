import React, { Component } from "react";
import PropTypes from 'prop-types';

 import Button from "./Button";


//  TO CONNECT TO REDUX STORE 
import { connect } from "react-redux";
import {getOneRecipe,  getFavoriteRecipe} from "../../store/actions/RecipeAction"

import "./recipe.css";

class Recipe extends Component {

  componentDidMount = () => {
   const id = this.props.match.params.recipe_id;
  this.props.getOneRecipe(id);

  };

 

  favoriteSelection =()=>{
    this.props.getFavoriteRecipe(this.props.recipe);
   this.props.history.push("/user/selection/")
  }
  render() {
 

    return (
      <React.Fragment>
      
 {this.props.recipe && (
      <div className="card">
             <div className="row mt-3 ">
                <div className="col-12 d-flex justify-content-around align-items-center ">
                  <h2 className="center card-title py-4 order-2">{this.props.recipe.title}</h2>
                </div>
              </div>

              <div className="row my-3 d-flex">
               <div className="col-sm-12 col-md-6">
                 <img
                   src={this.props.recipe.image_url}
                   alt={this.props.recipe.title}
                   className="responsive-img rounded w-55"
                   style={{
                    width: "15.63rem",
                    height: "15.63rem"
                   }}
                 />
                 <p>
                   <a
                     className="sub__title"
                     href={this.props.recipe.publisher_url}
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     Published by :{this.props.recipe.publisher}
                   </a>
                 </p>
               </div>

               <div className="ingredients-card list-group col-sm-12 col-md-6">
               <p className="list-group-item">{this.props.recipe.ingredients}</p>
               <div className="d-flex justify-content-around align-items-center">
               <a
                 href={this.props.recipe.source_url}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="btn btn-warning publisher mt-1"
               >
                 publisher website
               </a>
               <Button
              selection={this.props.selection}
              recipe={this.props.recipe}
              favoriteSelection={this.favoriteSelection}
              /> 

                 
             </div>
             </div>
          </div>
        </div>  )}
      </React.Fragment>
    );
  }
}

Recipe.propTypes = {
  getOneRecipe:  PropTypes.func,
  getFavoriteRecipe:  PropTypes.func,
  recipe: PropTypes.object,
  selection: PropTypes.array,
  };



const mapStateToProps= (state)=>{
  return{  
    recipe: state.recipe.recipe,
    selection:state.recipe.selection,
   
  }
}

  export default connect(mapStateToProps, {getOneRecipe, getFavoriteRecipe})(Recipe);