import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import GiphList from '../GiphList/GiphList';


function GiphSearchForm() {
    const dispatch = useDispatch();
    const [newSearch, setNewSearch] = useState({
        searchQuery: ''
    })


    const onSubmit = (event) => {
        event.preventDefault();
        console.log('new search!', newSearch);

        dispatch({
            type: 'GET_SEARCH',
            payload: {
                search: newSearch
            } 
        })
    };



    return (
        <>
            <form>
            <input
                required
                placeholder="Search Gifs"
                value={newSearch.searchQuery}
                onChange={(event) => setNewSearch({
                    ...newSearch, searchQuery: event.target.value
                })}    
            />
            <button onClick={onSubmit}>SEARCH</button>
            </form>
            <GiphList/>
        </>
        
    )
}

export default GiphSearchForm;
