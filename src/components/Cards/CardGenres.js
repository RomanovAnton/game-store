import React from "react";

export default function CardGenres({ genres }) {
  return (
    <div className="card-item__genres">
      {genres.map((genre) => {
        return <div className="genres__item" key={genre}>{genre}</div>;
      })}
    </div>
  );
}
