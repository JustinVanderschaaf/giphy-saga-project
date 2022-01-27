import { useDispatch } from 'react-redux';

function CategorySelector({ gif }) {
    const dispatch = useDispatch();
    // Test Categories (to be deleted after GET setup)
    let categories = [
        {id: 1, name:'funny'},
        {id: 2, name:'cohort'},
        {id: 3, name:'cartoon'},
        {id: 4, name:'nsfw'},
        {id: 5, name:'meme'}
    ]


    const setCategory = (id) => {
        console.log('in setCategory');

        dispatch({
            type: 'SET_CATEGORIES',
            payload: category
        });
        
    }
    
    return (
        <div>
            <label htmlFor="categories">Category:</label>
            <select name="categories" id="cars">
                {categories.map( category => (
                    <option value={category} key={category}>{category}</option>
                ))}
            </select>
        </div>
    )
}

export default CategorySelector;