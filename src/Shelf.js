import React, { Component } from "react";
import BookCard from "./BookCard";
class Shelf extends Component {
  state = {};

  handleShelfChange = (book, shelf) => {
    this.props.onShelfChange(book, shelf);
  };

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <BookCard
                key={book.id}
                book={book}
                onShelfChange={this.handleShelfChange}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
