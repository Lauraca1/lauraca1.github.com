import "./App.css";
import {Link} from "react-router-dom";

const Intro = () => {
  return (
    <div className="App">
      <div className="body">
        <h1>Recommendations </h1>
        <h2>
          Here are some of my recs for cities I'm familiar with:
        </h2>
        <Link className="link" to="/recs/slo">
        San Luis Obispo
    </Link>
    <Link className="link" to="/recs/sf">
    San Francisco
    </Link>
      </div>
      <header className="footer">
        <h3>© All Rights Reserved</h3>
      </header>
    </div>
  );
};

export default Intro;
