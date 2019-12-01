import React, { Component } from "react";
import "./App.css";
import Shelf from "./Shelf";
import Search from "./Search";
import * as BooksAPI from "./BooksAPI";

class MyReads extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  };

  componentDidMount() {
    const filter = books => shelf =>
      books.filter(b => {
        return b.shelf === shelf;
      });

    BooksAPI.getAll().then(books => {
      this.setState({
        currentlyReading: filter(books)("currentlyReading"),
        wantToRead: filter(books)("wantToRead"),
        read: filter(books)("read")
      });
    });
  }

  addBook = book => {};

  moveBook = (book, shelfTarget) => {
    let newState = {
      [book.shelf]: this.state[book.shelf].filter(b => b.id !== book.id),
      [shelfTarget]: [...this.state[shelfTarget], book]
    };
    this.setState(newState);
  };
  render() {
    const { currentlyReading, wantToRead, read } = this.state;
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
              onShelfChange={this.moveBook}
            />
            <Shelf books={wantToRead} name="Want to Read" />
            <Shelf books={read} name="Read" />
          </div>
          <Search />
        </div>
      </div>
    );
  }
}

export default MyReads;
