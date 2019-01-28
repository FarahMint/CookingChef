import React, { Component } from "react";
// import { recipes } from "../tempList";
import { Link } from "react-router-dom";
// import Post from "./Post";

import "./Post.css";

class PostList extends Component {
  render() {
    const { posts } = this.props;
    const AllRecipes = posts.map(post => {
      return (
        <div className="col-sm-12 col-md-6 col-lg-4" key={post.recipe_id}>
          <div className="mx-auto" style={{ width: "18rem" }}>
            <div className="content mt-3 mb-3 gallery-item">
              <Link to={`/${post.recipe_id}`}>
                {post.title > 17 ? (
                  <h1 className="card-title">{post.title}</h1>
                ) : (
                  (post.title = `${post.title.substring(0, 17)}...`)
                )}

                <img
                  className="responsive-img rounded  mx-auto gallery-item__img"
                  src={post.image_url}
                  alt={post.title}
                  style={{ width: "250px", height: "250px" }}
                />

                <span className="gallery-item__icon">
                  <i className="fas fa-search" />
                </span>
              </Link>
              <a className="sub__title" href={post.publisher_url}>
                provided by :{post.publisher}
              </a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <React.Fragment>
        <div className="row">{AllRecipes}</div>
      </React.Fragment>
    );
  }
}

export default PostList;
