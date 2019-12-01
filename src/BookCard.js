import React, { Component } from "react";
import Action from "./Action";
import Cover from "./Cover";

class BookCard extends Component {
  state = {};

  handleShelfChange = shelf => {
    this.props.onShelfChange(this.props.book, shelf);
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
