import React from "react";
import {Link} from "react-router-dom"
import logo from "../logo.svg";


export default function Navbar() {
  return <nav className="navbar">
    <div className="nav center">
      <img src={logo} alt="cocktail db logo" 
      className="logo" />
      <ul className="nav-link">
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">Abaut</Link>
        </li>
       
      </ul>
    </div>
  </nav>;
}
