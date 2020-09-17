import React from "react";
import "./App.css";
import About from "./About.js";
import Shop from "./Shop.js";
import Nav from "./Nav.js";
import ItemDetail from "./ItemDetail.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>App</h1>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
};

export default App;
