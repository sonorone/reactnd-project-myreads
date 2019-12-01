import React, { Component } from "react";
import "./App.css";
import Shelf from "./Shelf";
import Add from "./Add";

class MyReads extends Component {
  handleMoveBook = (updatedBook, shelfTarget) => {
    this.props.moveBook(updatedBook, shelfTarget);
  };

  render() {
    const filter = books => shelf =>
      books.filter(b => {
        return b.shelf === shelf;
      });

    const { books } = this.props;
    const currentlyReading = filter(books)("currentlyReading");
    const wantToRead = filter(books)("wantToRead");
    const read = filter(books)("read");

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Shelf
              books={currentlyReading}
              name="Currently Reading"
              onShelfChange={this.handleMoveBook}
            />
            <Shelf
              books={wantToRead}
              name="Want to Read"
              onShelfChange={this.handleMoveBook}
            />
            <Shelf
              books={read}
              name="Read"
              onShelfChange={this.handleMoveBook}
            />
          </div>
          <Add />
        </div>
      </div>
    );
  }
}

export default MyReads;
