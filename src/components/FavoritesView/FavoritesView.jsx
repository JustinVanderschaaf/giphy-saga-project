import React from 'react';
import FavoritesItem from './FavoritesItem/FavoritesItem';

// Test data until GET is setup, will delete
let favorites = [
    { 
        id: 1,
        url: 'https://media1.giphy.com/media/PlTkI0HXHFXZYsV9SB/200.gif?cid=729cab9e3eb72dda659b5733fc85919ee88d92cfa33f65bb&rid=200.gif&ct=g',
        alt: 'alt text',
        category: null
    },
    { 
        id: 2,
        url: 'https://media1.giphy.com/media/PlTkI0HXHFXZYsV9SB/200.gif?cid=729cab9e3eb72dda659b5733fc85919ee88d92cfa33f65bb&rid=200.gif&ct=g',
        alt: 'alt text',
        category: null
    },
    { 
        id: 3,
        url: 'https://media1.giphy.com/media/PlTkI0HXHFXZYsV9SB/200.gif?cid=729cab9e3eb72dda659b5733fc85919ee88d92cfa33f65bb&rid=200.gif&ct=g',
        alt: 'alt text',
        category: null
    }
] // End test data

function FavoritesView() {
    return (
        <div>
            {favorites.map(gif => (
                <FavoritesItem gif={gif} />
            ))}
        </div>
    )
}

export default FavoritesView;