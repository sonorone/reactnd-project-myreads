import React, { Component } from "react";
import Action from "./Action";
import Cover from "./Cover";

class BookCard extends Component {
  handleShelfChange = targetShelf => {
    let updatedBook = this.props.book;
    updatedBook.shelf = targetShelf;
    this.props.onShelfChange(updatedBook, targetShelf);
  };

  render() {
    const { title, authors, imageLinks, shelf } = this.props.book;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <Cover links={imageLinks} />
            <Action
              optionsState={shelf}
              onShelfChange={this.handleShelfChange}
            />
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">
            {authors.map(author => (
              <p key={author}>{author}</p>
            ))}
          </div>
        </div>
      </li>
    );
  }
}

export default BookCard;
