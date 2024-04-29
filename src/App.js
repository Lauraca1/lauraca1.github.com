import React from "react";
import "./App.css";
import Intro from "./intro.js";
import Recs from "./recs.js";
import Travel from "./travel.js";
import SLO from "./slo.js";
import SF from "./sf.js";
import SFPics from "./sfPics.js";
import Nav from "./nav.js";
import Italy from "./italy.js";
import Spain from "./spain.js";
import Germany from "./germany.js";
import Austria from "./austria.js";
import France from "./france.js";
import Uk from "./uk.js";
import Us from "./us.js";

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
        <Route path="/pics" element={<SFPics />} />
        <Route path="/travel/italy" element={<Italy />} />
        <Route path="/travel/spain" element={<Spain />} />
        <Route path="/travel/germany" element={<Germany />} />
        <Route path="/travel/austria" element={<Austria />} />
        <Route path="/travel/france" element={<France />} />
        <Route path="/travel/uk" element={<Uk />} />
        <Route path="/travel/us" element={<Us />} />
      </Routes>
    </Router>
  );
}
//to dos
//nav component, pass in curr page *
//add a hover component to nav links *
//media tags

export default App;
