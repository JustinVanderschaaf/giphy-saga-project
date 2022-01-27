import React from 'react';
import FavoritesView from '../FavoritesView/FavoritesView';
import GiphSearchForm from '../GiphSearchForm/GiphSearchForm';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <GiphSearchForm/>
      <FavoritesView />
    </div>
  );
}

export default App;
