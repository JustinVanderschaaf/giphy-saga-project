
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoritesView from "../FavoritesView/FavoritesView";
import GiphSearchForm from '../GiphSearchForm/GiphSearchForm';
import { HashRouter as Router, Route, Link } from "react-router-dom";


function App(props) {

  const dispatch = useDispatch();
  useEffect(() => {
    getCategories(), getFavs();
  }, []);

  const getFavs = () => {
    dispatch({
      type: 'FETCH_FAVS'
    })
  }
  const getCategories = () => {
    dispatch({
      type: 'FETCH_CATEGORIES'
    })
  }
  return (

    <header>
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
           <GiphSearchForm/>
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
