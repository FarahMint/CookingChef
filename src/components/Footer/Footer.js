import React from "react";

export default function Footer() {
  return (
    <footer className="container-fluid">
      <div className="row d-flex justify-content-around  align-items-start">
        <div className="brief__description">
          <h3>About US</h3>
          <p>
            Cooking-Chef is a service of FarahMint. It is a digital cookbook and
            cooking guide alike, that helps home cooks of every level discover
            best recipes.
          </p>
        </div>

        <a href="/" className="navbar-brand">
          Cooking-Chef
        </a>

        <div className="seo">
          <i className="fab fa-twitter-square" />
          <i className="fab fa-pinterest-square" />
          <i className="fab fa-instagram" />
        </div>
      </div>
      <div className="copy__right">
        <span>&copy; FarahMint 2019</span>
      </div>
    </footer>
  );
}
