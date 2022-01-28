import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'

function GiphList() {
    const giphList = useSelector(store=>store.searchReducer);
    console.log('giphList', giphList);

    const addFavorite = () => {
        
    }

    return(
        <>
            <h1>Gifist</h1>   
            <ul>
                {giphList.data?.map((search, i) =>  {
                    return(
                    <li key={i}>
                        <img src={search.images.original.url} alt={search.text}/>
                        <button onClick={addFavorite}>Favorite</button>
                    </li>
                    )
                })}  

              
            </ul> 
        </>

    )
}

export default GiphList;