import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";

const App = () => {
  const type = "popular";

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={<MovieList type="popular" title="popular" />}
            />
            <Route
              path="/toprated"
              element={<MovieList type="toprated" title="popular" />}
            />
            <Route
              path="/latest"
              element={<MovieList type="latest" title="latest" />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
