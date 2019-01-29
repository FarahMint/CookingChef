import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

class ImageResults extends Component {
  state = {
    currentImage: ""
  };

  render() {
    let imageListContent;
    const { recipes } = this.props;

    if (recipes) {
      imageListContent = recipes.map(item => {
        return (
          <div className="col-sm-12 col-md-6 col-lg-4" key={item.recipe_id}>
            <div className="mx-auto" style={{ width: "18rem" }}>
              <div className="content mt-3 mb-3 gallery-item">
                <Link to={`/${item.recipe_id}`}>
                  {item.title > 17 ? (
                    <h1 className="card-title">{item.title}</h1>
                  ) : (
                    (item.title = `${item.title.substring(0, 17)}...`)
                  )}

                  <img
                    className="responsive-img rounded  mx-auto gallery-item__img"
                    src={item.image_url}
                    alt={item.title}
                    style={{ width: "250px", height: "250px" }}
                  />

                  <span className="gallery-item__icon">
                    <i className="fas fa-search" />
                  </span>
                </Link>
                <a
                  className="sub__title"
                  href={item.publisher_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  provided by :{item.publisher}
                </a>
              </div>
            </div>
          </div>
        );
      });
    }

    return <React.Fragment>{imageListContent}</React.Fragment>;
  }
}

ImageResults.propTypes = {
  recipes: PropTypes.array.isRequired
};
export default ImageResults;
