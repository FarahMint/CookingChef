import React from 'react'
import { Link } from "react-router-dom";
 

const Button=(props)=> {

    const button_value =  props.selection.some(selection => selection.recipe_id === props.recipe.recipe_id);
   

    const addToFav = !button_value ?(<button 
        className="btn btn-success mt-1"
       onClick={props.favoriteSelection}>add to favorite</button>)
  :
  (
      <Link to="/user/selection/">
  <button 
    className="btn btn-success favorite mt-1">back to your favorite list</button></Link>)


    return(
            addToFav
    )

}

export default Button; 