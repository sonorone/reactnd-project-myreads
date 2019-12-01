import React, { Component } from "react";
import "./App.css";
import Shelf from "./Shelf";
import Search from "./Search";
import * as BooksAPI from "./BooksAPI";

class MyReads extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  addBook = book => {};

  moveBook = (updatedBook, shelfTarget) => {
    if (shelfTarget !== "none") {
      this.setState(prevState => ({
        books: [
          ...prevState.books.filter(b => b.id !== updatedBook.id),
          updatedBook
        ]
      }));
    } else {
      console.log(`shelf '${shelfTarget}' doesnt exist`);
      console.log(updatedBook);
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== updatedBook.id)
      }));
    }
  };

  render() {
    const filter = books => shelf =>
      books.filter(b => {
        return b.shelf === shelf;
      });

    const { books } = this.state;
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
              onShelfChange={this.moveBook}
            />
            <Shelf
              books={wantToRead}
              name="Want to Read"
              onShelfChange={this.moveBook}
            />
            <Shelf books={read} name="Read" onShelfChange={this.moveBook} />
          </div>
          <Search />
        </div>
      </div>
    );
  }
}

export default MyReads;
