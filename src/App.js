import React from "react";
import "./App.css";
import Main from "./components/Main.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/contact" component={ContactMe} />
      </Router>
    </div>
  );
}

export default App;
