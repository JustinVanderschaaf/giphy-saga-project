import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'

function GiphList() {
    const giphList = useSelector(store=>store.searchReducer);
    console.log('giphList', giphList);

    

    return(
        <>
            <h1>GiphList</h1>   
            <ul>
                {giphList.data?.map((search, i) => {
                    <li key={i}>
                        <img src={search.url} alt={search.text}/>
                    </li>
                })}  

              
            </ul> 
        </>

    )
}

export default GiphList;