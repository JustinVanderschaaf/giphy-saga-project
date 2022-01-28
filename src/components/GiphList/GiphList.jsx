import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Button from '@mui/material/Button';

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
                        {/* <img src={search.images.downsized_small.mp4} alt={search.title}/> */}
                        <video controls loop autoPlay width="250">

    <source src={search.images.downsized_small.mp4}
            type="video/mp4"/>

</video>
                        <Button onClick={() => addFavorite(search)}>Favorite</Button>
                    </li>
                    )
                })}  

              
            </ul> 
        </>

    )
}

export default GiphList;