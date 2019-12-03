import React from "react";
import Action from "./Action";
import Cover from "./Cover";

function BookCard(props) {
  let handleShelfChange = targetShelf => {
    let updatedBook = props.book;
    updatedBook.shelf = targetShelf;
    props.onShelfChange(updatedBook, targetShelf);
  };

  const { title, authors, imageLinks, shelf } = props.book;
  let links = { smallThumbnail: "" };

  if (imageLinks && imageLinks !== "undefined") {
    links = imageLinks;
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <Cover links={links} />
          <Action optionsState={shelf} onShelfChange={handleShelfChange} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors &&
            authors !== "undefined" &&
            authors.map(author => <p key={author}>{author}</p>)}
        </div>
      </div>
    </li>
  );
}

export default BookCard;
