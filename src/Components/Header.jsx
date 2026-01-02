import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

const Header = ({ movieType }) => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <Navbar />
    </div>
  );
};

export default Header;
