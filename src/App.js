import React from "react";
import "./App.css";
import Intro from "./intro.js";
import Recs from "./recs.js";
import Travel from "./travel.js";
import SLO from "./slo.js";
import SF from "./sf.js";
import Nav from "./nav.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav currLocation={window.location.pathname} />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/recs" element={<Recs />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/recs/slo" element={<SLO />} />
        <Route path="/recs/sf" element={<SF />} />
      </Routes>
    </Router>
  );
}
//to dos
//nav component, pass in curr page *
//add a hover component to nav links *
//media tags

export default App;
