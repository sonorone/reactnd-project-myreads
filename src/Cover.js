import React from "react";

function Cover(props) {
  return (
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url(${props.links.smallThumbnail})`
      }}
    ></div>
  );
}

export default Cover;
