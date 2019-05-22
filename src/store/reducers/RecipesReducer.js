import {
   GET_RECIPES ,
    GET_ONE_RECIPE ,
    SEARCH_RECIPES ,
    SELECT_FAVORITE_RECIPE,
  DELETE_RECIPE ,
  } from "../actions/types";



const initState= {
    recipes:[],
   selection:[]
};


const RecipesReducer =(state =initState, action)=>{
    switch (action.type) {
        case  GET_RECIPES:
        // console.log(state, action.payload)
          return {
            ...state,
            recipes: action.payload,
          
          };
        case  SEARCH_RECIPES:
        // console.log(state, action.payload)
          return {
            ...state,
            recipes: action.payload,
           
          };
        case  GET_ONE_RECIPE:
        // console.log(state, action.payload)
          return {
            ...state,
            recipe:  action.payload
          };
    
        case SELECT_FAVORITE_RECIPE:    
          return {
            ...state,
            selection:action.payload,

            // selection: [{...action.payload}]
            // selection: state.selection.concat(action.payload)
          };

      case  DELETE_RECIPE :
         return {
            ...state,
          selection: state.selection.filter(item => item.recipe_id !== action.payload)
         };
        default:
          return state;
      }
}
export default RecipesReducer;