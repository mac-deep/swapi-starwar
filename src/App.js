import React from "react";
import "./App.css";
import Films from "../src/Components/Films/Films";
import Starships from "../src/Components/Starships/Starships";
import Navbar from "../src/Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Fullpage from "../src/Components/Films/Fullpage";

function App() {
  return (
    <Router>
      <div className="app__container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/films" exact component={Films}></Route>
          <Route path="/starships" component={Starships}></Route>
          <Route path={`/films/:id`} component={Fullpage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    {/* <img
      className="starwarImg"
      src="http://imagizer.imageshack.com/a/img922/3783/oyvsRd.png"
    ></img> */}
  </div>
);

export default App;
