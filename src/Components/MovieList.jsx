import React, { useEffect, useState } from "react";
import _ from "lodash";

import MovieCard from "./MovieCard";
import { getMoviesWithImages } from "../Services/movieService.js";
import FilterMovieGroup from "./FilterMovieGroup.jsx";

const MovieList = () => {
  // State to hold the list of movies
  const [movies, setMovies] = useState([]);
  // State to hold the minimum rating for filtering
  const [minRating, setMinRating] = useState(0);
  // State to hold the filtered list of movies
  const [filterMovies, setFilterMovies] = useState([]);

  // filter movies based on sorting and rating
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    async function fetchData() {
      const result = await getMoviesWithImages();
      setMovies(result);
      setFilterMovies(result);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (sort.by != "default") {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
      setFilterMovies(sortedMovies);
    }
  }, [sort]);

  const handleFilterMovie = (rate) => () => {
    setMinRating(rate);
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

  const handleSort = (e) => {
    const { name, value } = e.target;
    const newSort = { ...sort, [name]: value };
    setSort(newSort);
  };

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

                <select
                  name="by"
                  className="movie_sorting"
                  onChange={handleSort}
                  value={sort.by}
                >
                  <option value="default">Sort By</option>
                  <option value="release_date">Date</option>
                  <option value="vote_average">Rating</option>
                </select>

                <select
                  name="order"
                  className="movie_sorting"
                  onChange={handleSort}
                  value={sort.order}
                >
                  <option value=""></option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
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
