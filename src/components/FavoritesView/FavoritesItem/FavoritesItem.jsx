import React from 'react';
import CategorySelector from './CategorySelector/CategorySelector';

function FavoritesItem({ gif }) {
    return (
        <div key={gif.id} style={{ height: 300, width: 300 }}>
            <img src={gif.url} alt={gif.alt} />
            <CategorySelector key={gif.id} gif={gif} />
        </div>
    )
}

export default FavoritesItem;