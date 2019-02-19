import React, { Component } from "react";

import { Link } from "react-router-dom";

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = `129ebdcf3f99a485fca36c622dc88df0`;
class Recipe extends Component {
  state = {
    recipe: [],
    recipe_id: "",
    apiUrl_details: `https://www.food2fork.com/api/get?key=`,

    API_KEY: API_KEY
  };

  getSelectedRecipe = async () => {
    try {
      let id = await this.props.match.params.recipe_id;

      this.setState({ recipe_id: id });
      const { API_KEY, recipe_id } = this.state;
      // console.log(recipe_id);
      const data = await fetch(
        `https://www.food2fork.com/api/get?key=${API_KEY}&rId=${recipe_id}`
      );

      const jsondata = await data.json();

      this.setState({
        recipe: jsondata.recipe
      });
      // console.log(jsondata);
    } catch (err) {
      console.log(err);
    }
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
      ingredients,
      source_url
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
                <a
                  href={source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning w-50 mt-2"
                >
                  publisher website
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div>
        {/* {this.getSelectedRecipe()} */}
        {display()}
      </div>
    );
  }
}

export default Recipe;
