import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FavoritesItem from './FavoritesItem/FavoritesItem';

function FavoritesView() {

    // Store access, dispatch hook
    const favorites = useSelector(store => store.favReducer);
    console.log('favorites are', favorites)
    const dispatch = useDispatch();

    return (
        <div>
            {favorites.map(gif => (
                <>
                <FavoritesItem key={gif.id} gif={gif} />
                </>
            ))}
        </div>
    )
}

export default FavoritesView;