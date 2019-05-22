import React from 'react';

import "./sideNav.css"

import NavLinksMenu from "../NavLinksMenu/NavLinksMenu"


const  SideNav= props=> {

  let drawerClasses= ["side__nav"];
 

 if(props.show){
   drawerClasses=["side__nav open"];
 }


    return (
        <nav  className={drawerClasses}>
                <div className="close-side-nav">
                <button 
                type="button"
                onClick={props.toggleNavHandler }
                aria-label="close side-bar navigation"
                aria-hidden="true">
                <i className="fa fa-times"></i></button>
            
                </div>
      
      <NavLinksMenu selection={props.selection}  onClick={ props.toggleNavHandler }/>
      
 
  </nav>
    )
}
export default SideNav;