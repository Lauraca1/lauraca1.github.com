import "./App.css";
import image1 from './images/fareDollars.jpg'
import React from "react";

const SFPics = () => {
  return (
    <div className="App">
      <div className="body">
        <h1>SF Neighborhoods Project</h1>
        <h3>This is an ongoing photographic project I am working on. The objective is to document neighborhoods in SF.</h3>
        <h2>Financial District - Embarcadero Station</h2>
        <div className="bruh">
      <img src={image1} alt="My Image"></img>
      </div>
      </div>
      <header className="footer">
        <h3>© All Rights Reserved</h3>
      </header>
    </div>
  );
};

export default SFPics;
