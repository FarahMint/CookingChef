import React from "react";
import "./Post.css";

export default function Ingredients(props) {
  // console.log(props);
  return (
    <div className="ingredients-card list-group">
      <ul>
        {props.ingredients.map((item, index) => {
          return (
            <li className="list-group-item" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
