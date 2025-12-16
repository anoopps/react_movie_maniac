import React from "react";

const MovieCard = ({ movie }) => {
  // console.log("MovieCard received movie:", movie);
  return (
    <a href="" className="movie_card">
      <div className="card">
        <img
          src={movie.poster}
          alt={movie.title}
          referrerPolicy="no-referrer"
          className="movie_poster"
        />
        <div className="movie_details">
          <h3 className="movie_details_heading">{movie.title}</h3>
          <div className="align_center movie_date_rate">
            <p> {movie.year}</p>
            <p className="align_center"> {movie.vote_average} ⭐</p>
          </div>
          <p className="movie_description">
            {movie.tmdb_type}
            {movie.year}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            molestiae et inventore assumenda.
          </p>
        </div>
      </div>
    </a>
  );
};

export default MovieCard;
