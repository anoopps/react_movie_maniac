import React from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <div className="container movie_list">
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">Movie Maniac</h1>
        <p class="lead">
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
                {/* /* star rating */}
                <ul className="movie_filter">
                  <li className="movie_filter_item active">8+ Star</li>
                  <li className="movie_filter_item">7+ Star</li>
                  <li className="movie_filter_item">6+ Star</li>
                </ul>

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
        <div className="movie_card">
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
