import React from "react";
import "./App.css";
import Films from "../src/Components/Films/Films";
import Navbar from "../src/Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Fullpage from "../src/Components/Films/Fullpage";
import HomePage from "./Components/HomePage";
import E404 from "./Components/E404";

function App() {
  return (
    <Router>
      <div className="app__container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/films" exact component={Films}></Route>
          <Route path="/starships" component={E404}></Route>
          <Route path="/people" component={E404}></Route>
          <Route path="/planets" component={E404}></Route>
          <Route path={`/films/:id`} component={Fullpage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
