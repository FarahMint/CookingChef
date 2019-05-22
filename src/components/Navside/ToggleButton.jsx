import React from 'react'
import "./toggleButton.css"
const ToggleButton=props=> {
    return (
        <div className="toolbar_toogle-button">
        <button className="toggle-button"
        onClick= {props.toggleNavHandler}>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>    
        </button>
      
    </div>
    )
}
export default ToggleButton;