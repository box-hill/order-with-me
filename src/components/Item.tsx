import React from 'react'
import { RouteComponentProps, match } from 'react-router';

interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

function Item(props: Props) {

    const { id } = props.match.params;
    console.log('item id is ', id);
    return (
        <div>
            Item detail will go here. 
            This will show the item image, have buttons to increment and 
            decrement quantity then add to cart.
            (won't implement an immediate order now button 
            that jumps straight to checkout yet)
        </div>
    );
}

export default Item;