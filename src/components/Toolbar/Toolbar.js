import React from 'react'
import "./toolbar.css";
import {  NavLink } from "react-router-dom";
import ToggleButton from "../Navside/ToggleButton"
import NavLinksMenu from "../NavLinksMenu/NavLinksMenu";

const Toolbar=props=> {
    return (
       <header className="toolbar">
           <nav className="toolbar__nav d-flex align-items-center">
              
                 <ToggleButton
                 className="toolbar__toggleBtn"
                  toggleNavHandler={props.toggleNavHandler}/>
              
               <div className="toolbar__logo">
               
               <NavLink to="/">
            Cooking-Chef
          </NavLink>
               </div>
               <div className="spacer"/>
               <div className="toolbar__nav-items">
                   <NavLinksMenu  selection={props.selection}/>
               </div>
           </nav>
       </header> 
    )
}


export default  Toolbar;