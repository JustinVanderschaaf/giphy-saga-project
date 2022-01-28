

import React from 'react';
import CategorySelector from './CategorySelector/CategorySelector';
import { useDispatch } from "react-redux";
function FavoritesItem({ gif }) {
    const dispatch = useDispatch();

    const removeGif = () => {
        console.log("delete", gif.id);
        dispatch({ type: "DELETE_GIF", payload: gif.id});
        //need refresh
      };



    return (
        <div key={gif.id}>
            <img src={gif.url} alt={gif.alt} />
            <CategorySelector key={gif.id} gif={gif} />
            <button onClick={removeGif}>Remove</button>
        </div>
    )
}

export default FavoritesItem;
