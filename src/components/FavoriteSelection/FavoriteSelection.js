import React from 'react';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeFavorite} from "../../store/actions/RecipeAction";

import "./favoriteSelection.css";

const FavoriteSelection=(props)=> {

  return (
    <React.Fragment>
      
      { (props.selection && props.selection.length > 0 )? <h1 className="text-capitalize">your selection</h1> :  <h1>Select your favorite recipes</h1>}
      <div className="d-flex flex-wrap  justify-content-around">
    {props.selection &&  props.selection.map(item=> {
  return (
  
    <div className="card my-3" key={item.recipe_id}>
      <h2 className="center card-title">
      {/* {item.title} */}
      {item.title > 17 ? (
                          item.title
                        ) : (
                          (item.title = `${item.title.substring(0, 20)}..`)
                        )}
      
      </h2>
          <button 
            className="btn btn-warning close mt-1"
            aria-label="Delete" 
            onClick={()=>props.removeFavorite(item.recipe_id)}>
            <i className="fa fa-times" 
             title="Remove this recipe from your favorite?"  aria-hidden="true"
         
             ></i></button>
              <img
                  src={item.image_url}
                  alt={item.title}
                  title={item.title}
                  aria-label={item.title}
                  className="responsive-img rounded w-55"
                  style={{
                    width: "15.63rem",
                    height: "15.63rem"
                  }}
                />
                <div  className="d-flex justify-content-between">
            <Link to="/">
              <button 
              className="btn btn-primary mt-1" aria-label="All Recipes">
              All Recipes</button>
            </Link>
            <Link to={`/${item.recipe_id}`}>
              <button 
              className="btn btn-success mt-1"  aria-label="Recipe Details" >Recipe details</button>
            </Link>
        </div>
        </div>
      )}
      )}  
   </div>
    </React.Fragment>
    )}

   FavoriteSelection.propTypes = {
    removeFavorite:  PropTypes.func,
      selection: PropTypes.array,
      };

const mapStateToProps= (state)=>{
  return{  
    selection:state.recipe.selection
  }
}

  export default connect(mapStateToProps,{removeFavorite} )( FavoriteSelection);