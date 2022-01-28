import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'

function GiphList() {
    const dispatch = useDispatch();
    const giphList = useSelector(store=>store.searchReducer);
    console.log('giphList', giphList);

    const addFavorite = (search) => {
        dispatch({type: 'POST_FAV', payload: search})
    }

    return(
        <>
            <h1>Gifist</h1>   
            <ul>
                {giphList.data?.map((search, i) =>  {
                    return(
                    <li key={i}>
                        <img src={search.images.original.url} alt={search.title}/>
                        <button onClick={() => addFavorite(search)}>Favorite</button>
                    </li>
                    )
                })}  

              
            </ul> 
        </>

    )
}

export default GiphList;