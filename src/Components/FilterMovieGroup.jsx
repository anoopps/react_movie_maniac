import React from "react";

function FilterMovieGroup({ minRating, handleFilterMovie, rating }) {
  return (
    <div>
      <ul className="movie_filter">
        {rating.map((rate, index) => {
          return (
            <li
              className={
                minRating == rate
                  ? "movie_filter_item active"
                  : "movie_filter_item"
              }
              onClick={handleFilterMovie(rate)}
            >
              {rate}+ Star
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FilterMovieGroup;
