import React, { Component } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

class Recipe extends Component {
  state = {
    recipe: [],
    id: "",
    apiUrl_details: `https://www.food2fork.com/api/get?key=`,
    // https://www.food2fork.com/api/get?key=${API_KEY}&rId=35382
    API_KEY: `129ebdcf3f99a485fca36c622dc88df0`
  };

  getSelectedRecipe = () => {
    let id = this.props.match.params.recipe_id;
    console.log(this.props.match.params.recipe_id);

    this.setState({ id });

    axios
      .get(
        `${this.state.apiUrl_details}${this.state.API_KEY}&rId=${
          this.props.match.params.recipe_id
        }`
      )
      .then(res =>
        this.setState({
          recipe: res.data.recipe
        })
      )
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    this.getSelectedRecipe();
    // const json = localStorage.getItem("recipe");
    // const recipe = JSON.parse(json);
    // this.setState({ recipe });
  };

  componentDidUpdate = () => {
    const recipe = JSON.stringify(this.state.recipe);
    // assign to local storage
    localStorage.setItem("recipe", recipe);
  };

  render() {
    const {
      title,
      publisher,
      publisher_url,
      image_url,
      ingredients
    } = this.state.recipe;
    console.log(this.state.recipe);
    const display = () => {
      return (
        <div>
          <Link to="/">
            <i className="far fa-arrow-alt-circle-left order-1" />
          </Link>
          <div className="card">
            <div className="row mt-3 ">
              <div className="col-12 d-flex justify-content-around align-items-center ">
                <h2 className="center card-title py-4 order-2">{title}</h2>
              </div>
            </div>
            <div className="row mt-3 d-flex">
              <div className="col-sm-12 col-md-6">
                <img
                  src={image_url}
                  alt={title}
                  className="responsive-img rounded w-55"
                  style={{
                    width: "450px",
                    height: "450px"
                  }}
                />
                <p>
                  <a
                    className="sub__title"
                    href={publisher_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Published by :{publisher}
                  </a>
                </p>
              </div>
              <div className="ingredients-card list-group col-sm-12 col-md-6">
                <p className="list-group-item">{ingredients}</p>
              </div>
            </div>
          </div>
        </div>
      );
    };

    return <div>{display()}</div>;
  }
}

export default Recipe;
