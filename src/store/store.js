 

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// import {loadState, saveState} from "./localStorage";
// const initialState = {};

const middleware = [thunk];

 

function saveToLocalStorage(state){
  try{
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state" , serializedState)
  }catch(e){
    console.log(e);
  }
}


function loadFromLocalStorage(){
  try{
    const serializedState = localStorage.getItem("state");
    if(serializedState === null) return undefined;
    return JSON.parse(serializedState)

  }catch(e){
    console.log(e);
    return undefined;
  }
}


const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);


 
const persistedState = loadFromLocalStorage(); 

const store = createStore(
  rootReducer, 
  persistedState,
  // initialState, 
  enhancer);


  
  store.subscribe(()=>{
    saveToLocalStorage(store.getState())
  })
  

export default store;