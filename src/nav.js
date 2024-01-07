import React from 'react';
import "./App.css";
import {Link} from "react-router-dom";

const Nav = ({currLocation}) =>{
    console.log(currLocation);
  return (
    <header className="header">
    <Link className="link" to="/travel">
      Travel
    </Link>
    <Link className="link" to="/recs">
      Recs
    </Link>
    <Link className="link" to="/">
      Introduction
    </Link>
  </header>
  );
}
export default Nav;