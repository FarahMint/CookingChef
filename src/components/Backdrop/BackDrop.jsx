import React from 'react';
import "./backDrop.css"

const  BackDrop =(props)=> {
    return (
        <div className="backdrop"
        onClick={props.backdropHandler}/>
            
   
    )
}
export default BackDrop;