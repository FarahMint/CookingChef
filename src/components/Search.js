import React, { Component } from "react";

class Search extends Component {
  // state = {
  //   search: [],
  //   text: ""
  // };

  // handleChange = e => {
  //   const userInput = e.target.value;
  //   let search = [];

  //   if (userInput.length > 0) {
  //     let regex = new RegExp(`^${userInput}`, "i");

  //     // TITLE FILTER
  //     let test = this.props.details.map(recipe => {
  //       return recipe.title;
  //     });
  //     search = test.sort().filter(item => {
  //       return regex.test(item);
  //     });

  //     console.log(search);
  //   }

  //   this.setState(() => ({
  //     search,
  //     text: userInput
  //   }));
  // };

  // suggestionSelected = value => {
  //   // updatestate
  //   this.setState(() => ({
  //     text: value,
  //     // when user select an item empty the array
  //     search: []
  //   }));
  // };
  // displaySuggestion = () => {
  //   const { search } = this.state;
  //   console.log(search);
  //   if (search.length > 0) {
  //     return (
  //       <ul className="suggestionBox">
  //         {search.map((item, index) => (
  //           // suggestionSelected fire when click
  //           <li key={index} onClick={() => this.suggestionSelected(item)}>
  //             {item}
  //           </li>
  //         ))}
  //       </ul>
  //     );
  //   }
  // };

  render() {
    const { text } = this.props;

    return (
      <div className="searchContainer">
        <input
          className="searchBox"
          type="search"
          name="search"
          placeholder=" What would you like to cook?"
          onChange={this.props.handleChange}
          value={text}
        />

        {this.props.displaySuggestion()}
        <input type="submit" value="Search" className="searchButton" />
      </div>
    );
  }
}

export default Search;
