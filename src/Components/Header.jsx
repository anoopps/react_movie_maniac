import React from "react";

const Header = () => {
  return (
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="#">
          Latest Movies
        </a>
        <a class="p-2 text-dark" href="#">
          Popular
        </a>
        <a class="p-2 text-dark" href="#">
          Top Rated
        </a>
      </nav>
    </div>
  );
};

export default Header;
