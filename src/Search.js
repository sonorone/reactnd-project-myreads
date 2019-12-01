import React from "react";

function Search(props) {
  return (
    <div className="open-search">
      <button onClick={() => props.showSearch({ showSearchPage: true })}>
        Add a book
      </button>
    </div>
  );
}

export default Search;
