import React, { Component } from "react";
import BookCard from "./BookCard";
class Shelf extends Component {
  state = {};

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <BookCard />
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
