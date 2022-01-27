import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';


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
    <div>
      <h1>Giphy Search!</h1>
    </div>
  );
}

export default App;
