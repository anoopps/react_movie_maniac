import React from "react";

const MovieCard = () => {
  return (
    <a>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQDsLcpn5ca20jOMi9UyuFyqSB4vlL9oq2EA&s"
        alt="Movie Poster"
        className="movie_poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">Movie Name</h3>
        <div className="movie_date_rate"></div>
      </div>
    </a>
  );
};

export default MovieCard;
