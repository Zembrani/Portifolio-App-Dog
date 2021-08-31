import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import RootFrame from "../components/rootFrame/RootFrame";

const App = (props) => (
  <div className="App">
    <Router>
      <RootFrame />
    </Router>
  </div>
);

export default App;
