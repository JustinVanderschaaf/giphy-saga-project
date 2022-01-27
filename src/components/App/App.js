import React from "react";
import FavoritesView from "../FavoritesView/FavoritesView";
import { HashRouter as Router, Route, Link } from "react-router-dom";

function App(props) {
  return <header>
    <h1>GIFFY SEARCH APP</h1>
    <Router>
      <div>
        <ul className="nav">
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/favorites">favorites</Link>
          </li>
        </ul>
        <Route exact path="/">
          
        </Route>
        <Route exact path="/favorites">
          <FavoritesView />
        </Route>
      </div>
    </Router>
    
  );
  </header>
}

export default App;
