import "./App.css";
import {Link} from "react-router-dom";

const us = () => {
  return (
    <div className="App">
      <div className="body">
        <h1>United States</h1>
        <Link className="link" to="/sfPics">
    San Francisco
    </Link>
        <h2>Boston</h2>
<h2>Los Angeles</h2>
<h2>Seattle</h2>
<h2>Yosemite</h2>
      </div>
      <header className="footer">
        <h2>© All Rights Reserved</h2>
      </header>
    </div>
  );
};

export default us;
