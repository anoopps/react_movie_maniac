import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { getMoviesWithImages } from "../Services/movieService.js";
import FilterMovieGroup from "./FilterMovieGroup.jsx";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [filterMovies, setFilterMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getMoviesWithImages();
      // console.log("Fetched Movies:", result);
      setMovies(result);
      setFilterMovies(result);
    }
    fetchData();
  }, []);

  const handleFilterMovie = (rate) => () => {
    setMinRating(rate);
    console.log("Filtering movies with rating:", rate);
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      const filteredMovies = movies.filter(
        (movie) => movie.vote_average >= rate
      );
      setFilterMovies(filteredMovies);
    }
  };

  // console.log("Movies in State:", movies);

  return (
    <div className="container movie_list">
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Movie Maniac</h1>
        <p className="lead">
          Welcome to Movie Maniac - Your Ultimate Movie Destination!
        </p>
      </div>

      <div>
        <header>
          <div className="row">
            <div className="col-md-8">
              <h2 className="movie_list_heading">Popular</h2>
            </div>

            <div className="col-md-4">
              <div className="movie_list_fs">
                <FilterMovieGroup
                  minRating={minRating}
                  handleFilterMovie={handleFilterMovie}
                  rating={[8, 7, 6]}
                />

                <select className="movie_sorting">
                  <option value="">Sort By</option>
                  <option value="">Date</option>
                  <option value="">Rating</option>
                </select>
                <select className="movie_sorting">
                  <option value="">Sort By</option>
                  <option value="">Ascending</option>
                  <option value="">Descending</option>
                </select>
              </div>
            </div>
          </div>
        </header>

        {/* movie card component */}
        <div className="movie_cards">
          {filterMovies.map((movie, index) => {
            // console.log("Rendering Movie:", movie);
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
