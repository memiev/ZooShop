import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";

export const Nav = () => {

  const [darkMode,setDarkMode] = useDarkMode();

  const handleOnChange = ({target: {checked}}) => {
      setDarkMode(checked)
  }

  return (
    <ul>
      <li><input type="checkbox" onChange={handleOnChange} /></li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/products/cat/wiskas/?order=asc">Sort</Link></li>
    </ul>
  );
};
