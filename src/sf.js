import "./App.css";
import React from "react";
import {Link} from "react-router-dom";

const sf = () => {
  return (
    <div className="App">
      <div className="body">
        <h1>San Francisco</h1>
        <h3>
        One of my hobbies(if not my main hobby) is to be out and about. I love love love exploring cities to the point where when I travel, I like to pretend I live in whatever city I find myself in. Luckily, I don't have to pretend with San Francisco. Here are some places I've been to and what I think about them.
        </h3>
        <h2>Map of My Recommendations</h2>
    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1fUBmqEhC2rbqJl4h4RSI13lxc1YXQmw&ehbc=2E312F&noprof=1" width="800" height="480"></iframe>
      </div>
      <header className="footer">
        <h3>© All Rights Reserved</h3>
      </header>
    </div>
  );
};

export default sf;
