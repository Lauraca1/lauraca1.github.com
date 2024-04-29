import "./App.css";
import {Link} from "react-router-dom";

const Intro = () => {
  return (
    <div className="App">
      <div className="body">
        <h1>Hello! I’m Laura!</h1>
        <h2>
          I am a software engineer based out of the 
          <a className="aCool" href="/pics"> San Francisco </a>
           Bay Area. This
          is my work-in-progress personal website. Feel free to click around and
          let me know what you think!
        </h2>
        
      </div>
      <header className="footer">
        <h3>© All Rights Reserved</h3>
      </header>
    </div>
  );
};

export default Intro;
