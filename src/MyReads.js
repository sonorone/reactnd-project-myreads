import React, { Component } from "react";
import "./App.css";
import Shelf from "./Shelf";
// import AddButton from "./AddButton";
import * as BooksAPI from "./BooksAPI";

class MyReads extends Component {
  state = {
    books: [],
    shelves: [
      { name: "Currently Reading" },
      { name: "Want to Read" },
      { name: "Read" }
    ]
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
      console.log("books", books);
    });
  }

  addBook = book => {};

  addToShelf = book => {};

  removeFromShelf = book => {};

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {this.state.shelves.map(s => (
              <Shelf key={s.name} name={s.name} />
            ))}
          </div>
          <div className="open-search">
            <button onClick={() => this.setState({ showSearchPage: true })}>
              Add a book
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyReads;
