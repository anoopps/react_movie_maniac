import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="my-2 my-md-0 mr-md-3">
      <NavLink className="p-2 text-dark" to="/">
        Popular
      </NavLink>
      <NavLink className="p-2 text-dark" to="/toprated">
        Top Rated
      </NavLink>
      <NavLink className="p-2 text-dark" to="/latest">
        Latest Movies
      </NavLink>
    </nav>
  );
};

export default Navbar;
