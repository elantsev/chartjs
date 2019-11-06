import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Graph from "./components/Graph";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Graph} />
        <Route path="/about" exact component={About} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
