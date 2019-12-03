import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookCard from "./BookCard";

class Search extends Component {
  state = {
    query: "",
    results: [],
    myBooks: this.props.myBooks
  };

  handleQuery = event => {
    this.setState({ query: event.target.value });
    BooksAPI.search(event.target.value)
      .then(results => {
        if (results && results !== "undefined") this.setState({ results });
      })
      .catch(err => {
        if (err) this.setState({ results: [] });
      });
  };

  handleAddBook = (book, shelf) => {
    this.props.onAddBook(book, shelf);
  };

  render() {
    const { results, query, myBooks } = this.state;
    let mixed = [];

    if (results && results.error !== "empty query") {
      mixed = results.filter(result => {
        const retVal = myBooks.find(obj => obj.id === result.id);
        return typeof retVal === "undefined" ? true : false;
      });
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.handleQuery}
            />
          </div>
        </div>
        {JSON.mixed}
        <div className="search-books-results">
          <ol className="books-grid">
            {mixed && mixed.error !== "empty query" && query !== "" ? (
              mixed.map(book => (
                <BookCard
                  book={book}
                  key={book.id}
                  onShelfChange={this.handleAddBook}
                />
              ))
            ) : (
              <li></li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
