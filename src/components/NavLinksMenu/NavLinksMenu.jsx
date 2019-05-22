import React from 'react';
import {  NavLink } from "react-router-dom";

import "./navLinksMenu.css"
import IconNav from "../Icon/IconNav";
const  NavLinksMenu=(props)=> {
    const pathname = window.location.pathname;
    return (
        <React.Fragment>
                <ul  
          className="d-flex justify-content-center"
          onClick={ props.toggleNavHandler }>
          <NavLink to="/" className={ pathname === '/' ? 'selected' : '' }>
            <li>Recipes list</li>
            </NavLink>
          <NavLink to="/user/selection/" className={ pathname === '/user/selection/' ? 'selected' : '' }>
         <IconNav 
         selection={props.selection}/>
            </NavLink>         
          </ul>


        </React.Fragment>
    )
}
export default NavLinksMenu;