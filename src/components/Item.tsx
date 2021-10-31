import React from 'react'
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import  { items, ItemInterface } from "./items";


interface MatchParams {
    category: string;
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> { };

function Item(props: Props) {
    const { id, category } = props.match.params;
    console.log('item id is ', id);
    console.log('category is ', category);

    return (
        <div>
            <Link to={`/menu/${category}`}><button>Back</button></Link>

        </div>
    );
}

export default Item;