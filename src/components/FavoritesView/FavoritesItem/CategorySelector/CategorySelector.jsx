import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function CategorySelector({ gif }) {

    // Dispatch hook, store access
    const dispatch = useDispatch();
    const categories = useSelector(store => store.categoryReducer);
    console.log('categories are', categories);

    // Declare handleChange
    const handleChange = (event) => {
        console.log(`in handleChange for ${gif.id}`);
        // Send PUT request to update category to newly selected option
        dispatch({
            type: 'PUT_CATEGORY',
            payload: {
                id: gif.id,
                category_id: Number(event.target.value)
            }
        });
    }
    
    return (
        <div>
            <label htmlFor="categories">Category:</label>
            <select name="categories" onChange={handleChange}>
                {categories.map( category => (
                    <option
                        value={category.id}
                        key={category.id}
                        selected={category.id === gif.category_id ? true : false}
                    >
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default CategorySelector;