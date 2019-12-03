import React from "react";
import BookCard from "./BookCard";
function Shelf(props) {
  const handleShelfChange = (book, shelf) => {
    props.onShelfChange(book, shelf);
  };

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(book => (
            <BookCard
              key={book.id}
              book={book}
              onShelfChange={handleShelfChange}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Shelf;
