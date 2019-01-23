import React, { Component } from "react";
import { recipeDetails } from "../tempDetails";
// import {axios} from 'axios';
import Ingredients from "./Ingredients";
import { Link } from "react-router-dom";
import "./Post.css";

class Post extends Component {
  state = {
    recipe: recipeDetails,
    id: null
  };

  componentDidMount() {
    // react router give extra info attach to route
    // console.log(this.props);
    // so inside router we can identify what the route parameter is.
    //Then inside compo we know which element (post) to look at and grab using an http request
    let id = this.props.match.params.recipe_id;
    // console.log(id);

    // axios.get(`api${id}`)
    // when this is complete -> then we want to upadate the state
    // .then(res =>{
    //   this.setState({
    //     recipe:res.data // NOT DATA CHECK JSON RES FORMAT
    //   })
    //   // LOGOUT RES TO CHECK FORMAT
    //   console.log(res)
    // })
    this.setState({
      id: id
    });
  }
  render() {
    // console.log(this.props);
    // console.log(this.state);

    // const { id } = this.props;

    const { recipe, id } = this.state;
    // const {
    //   publisher,
    //   ingredients,
    //   source_url,
    //   recipe_id,
    //   image_url,
    //   title
    // } = this.state.recipe;

    const recipeDetails = recipe.filter(i => {
      return i.recipe_id === id;
    });
    // console.log(recipeDetails);

    return (
      // <div className="card">
      <div className="row mt-3">
        {recipeDetails.map(item => {
          return (
            <React.Fragment key={item.recipe_id}>
              <div className="col-12 d-flex justify-content-around align-items-center ">
                <h4 className="center card-title py-4 order-2">{item.title}</h4>{" "}
                <i className="fas fa-heart   order-3" />
                <i className="fas fa-bookmark  order-4" />
                <Link to="/">
                  <i className="far fa-arrow-alt-circle-left order-1" />
                </Link>
              </div>
              <div className="col-sm-12 col-md-6">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="responsive-img rounded w-55"
                  style={{
                    width: "450px",
                    height: "450px"
                  }}
                />
                <p className="mb-2  sub__title">publisher: {item.publisher}</p>
              </div>
              <div className="col-sm-12 col-md-6 d-flex flex-end">
                <Ingredients
                  id={item.recipe_id}
                  ingredients={item.ingredients}
                />
              </div>
            </React.Fragment>
          );
        })}
      </div>
      // </div>
    );
  }
}

export default Post;
