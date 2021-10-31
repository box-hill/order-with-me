import React from 'react'
import { Link } from 'react-router-dom';

function ItemDisplay() {

    return (
        <div>
            <Link to='/menu'><button>Back</button></Link>
            ItemDisplay goes here.
            This will include a list of items from a category.
            e.g. in the Meat category, we display wagyuu, pork belly, beef tongue etc.
        </div>
    );
}

export default ItemDisplay;