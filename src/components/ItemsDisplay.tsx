import React from 'react'
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import  { items, ItemInterface } from "./items";

interface MatchParams {
    category: string;
}

interface Props extends RouteComponentProps<MatchParams> { };


function ItemsDisplay(props: Props) {
    const { category } = props.match.params;
    console.log(category);
    const filteredItems = items.filter(item => item.category.toLowerCase() === category.toLowerCase());

    return (
        <div>
            <Link to='/'><button>Back</button></Link>
            {filteredItems.map((item:ItemInterface, index) => {
                return (
                    <Link key={index} to={`/menu/${category}/${item.id}`}>{item.name}</Link>    
                );
            })}
        </div>
    );
}

export default ItemsDisplay;