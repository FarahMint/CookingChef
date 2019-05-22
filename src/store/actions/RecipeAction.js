
import {
    GET_RECIPES ,
    SEARCH_RECIPES ,
    GET_ONE_RECIPE ,
    SELECT_FAVORITE_RECIPE ,
   DELETE_RECIPE 
   } from "../actions/types";
 const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

export const getRecipes = () => async (dispatch, getState) => {
 let jsondata ;
    try {
      

        const data = await fetch(`https://www.food2fork.com/api/search?key=${REACT_APP_API_KEY}`);
          jsondata = await data.json();
     
     
      dispatch({
          type:GET_RECIPES,
          payload:jsondata
      })

    } catch (err) {
      console.log(err);
    }
 
    
  };


  /** GET ONE RECIPE  */

export const getOneRecipe = (id) => async (dispatch, getState) => {

 

    try {

      const data = await fetch(`https://www.food2fork.com/api/get?key=${REACT_APP_API_KEY}&rId=${id}`);
      const jsondata = await data.json();
     
      dispatch({
          type:  GET_ONE_RECIPE ,
          payload: jsondata.recipe 
      })

    } catch (err) {
      console.log(err);
    }
    
  };
  /** SELECT RECIPE  */

export const getFavoriteRecipe = (recipeFav) => async (dispatch, getState) => {

  // get current state from recipe selected and selection
  const {selection}= getState().recipe
  const {recipe}= getState().recipe

  // filter arr selection to avoid add dup
  let selectFav= selection.filter(itemFav => itemFav.recipe_id !==recipe.recipe_id);

  //  console.log("before add selection:" ,selectFav);

  //  add to selection arr after filering out dup
   recipeFav =selectFav.concat(recipeFav);

  //  console.log("after add selection:" ,recipeFav)
    
 
      dispatch({
          type: SELECT_FAVORITE_RECIPE ,
       payload: recipeFav
      
      })  
  };
export const removeFavorite = (id) => async (dispatch, getState) => {
      dispatch({
          type: DELETE_RECIPE ,
       payload:id
      
      })  
  };

// SEARCH RECIPES
export const getSearch= ( search) => async dispatch =>{
  
  try {
    
    const data = await fetch(`https://www.food2fork.com/api/search?key=${REACT_APP_API_KEY}&q=${search}`);
    const jsondata = await data.json();
    console.log(jsondata );

    dispatch({
        type:   SEARCH_RECIPES  ,
        payload: jsondata
    })

  
  } catch (err) {
    console.log(err);
  }
};


