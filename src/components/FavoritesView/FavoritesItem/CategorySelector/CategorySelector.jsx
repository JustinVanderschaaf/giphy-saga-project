function CategorySelector({ gif }) {

    // Test Categories (to be deleted after GET setup)
    let categories = [
        'funny',
        'cohort',
        'cartoon',
        'nsfw',
        'meme'
    ]
    
    return (
        <div>
            <label for="categories">Category:</label>
            <select name="categories" id="cars">
                {categories.map( category => (
                    <option value={category}>{category}</option>
                ))}
            </select>
        </div>
    )
}

export default CategorySelector;