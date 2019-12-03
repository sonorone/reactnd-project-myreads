import React from "react";
import MyReads from "./MyReads";
import Search from "./Search";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  addBook = (book, shelf) => {
    book.shelf = shelf;
    if (shelf !== "none") {
      this.setState(prevState => ({
        books: [...prevState.books, book]
      }));
    }
    BooksAPI.update(book, shelf);
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  moveBook = (updatedBook, shelfTarget) => {
    if (shelfTarget !== "none") {
      this.setState(prevState => ({
        books: [
          ...prevState.books.filter(b => b.id !== updatedBook.id),
          updatedBook
        ]
      }));
    } else {
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== updatedBook.id)
      }));
    }

    BooksAPI.update(updatedBook, shelfTarget);
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MyReads books={this.state.books} moveBook={this.moveBook} />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search myBooks={this.state.books} onAddBook={this.addBook} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
