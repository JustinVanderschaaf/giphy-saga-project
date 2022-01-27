import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CategorySelector({ gif }) {

    // Dispatch hook, store access
    const dispatch = useDispatch();
    const categories = useSelector(store => store.categoryReducer);
    console.log('categories are', categories);

    // Set state variable for categoryInput
    const [categoryInput, setCategoryInput] = useState(gif.category_id);

    // Declare handleChange
    const handleChange = () => {
        console.log(`in handleChange for ${gif.id}`);

        // TODO: dispatch to update the category to new selected value
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

export default CategorySelector