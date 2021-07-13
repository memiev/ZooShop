import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/products/cat/wiskas/?order=asc">Sort</Link></li>
    </ul>
  );
};