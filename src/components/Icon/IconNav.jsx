import React from 'react'
 import "./iconNav.css"
const IconNav= (props) => {

    const basketFav = props.selection.length;
    return (
        <React.Fragment>
                <li>recipes saved 
                <span className="recipe__basket">
          <i className="fas fa-shopping-basket" 
          title= { (basketFav && basketFav >0) ? (`you have ${basketFav} saved recipes`):(`favorite list empty`)}
          aria-label={(basketFav && basketFav >0) ? (`you have ${basketFav} saved recipes`):(`favorite list empty`)}
          aria-hidden="true"
          ></i>
             
          {(props.selection && props.selection.length > 0) && props.selection.length }
          </span> 
          
             </li>
        </React.Fragment>
    )
}
export default  IconNav