import "./App.css";
import React from "react";
import {Link} from "react-router-dom";

const Travel = () => {
  return (
    <div className="App">
      <div className="body">
        <h1>Travel</h1>
        <h2>
          Here is a list of countries I've been to and some comments:
        </h2>
    
        <Link className="link" to="/travel/italy">
        Italy
    </Link>
    <p></p>
    <Link className="link" to="/travel/spain">
    Spain
    </Link>
    <p></p>
    <Link className="link" to="/travel/germany">
    Germany
    </Link>
    <p></p>
    <Link className="link" to="/travel/austria">
    Austria
    </Link>
    <p></p>
    <Link className="link" to="/travel/france">
    France
    </Link>
    <p></p>
    <Link className="link" to="/travel/uk">
    United Kingdom
    </Link>
    <p></p>
    <Link className="link" to="/travel/us">
    United States
    </Link>
      </div>
      <header className="footer">
        <h3>© All Rights Reserved</h3>
      </header>
    </div>
  );
};

export default Travel;
