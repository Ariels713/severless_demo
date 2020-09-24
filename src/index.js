import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ScoreProvider } from "./contexts/ScoreContext.js";

ReactDOM.render(
  <Router>
    <ScoreProvider>
      <App />
    </ScoreProvider>
  </Router>,
  document.getElementById("root")
);
