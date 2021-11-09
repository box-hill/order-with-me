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
    const filteredItems = items.filter(item => item.category.toLowerCase() === category.toLowerCase());

    return (
        <div className='fill-screen'>
            <div className='items-container'>
            {filteredItems.map((item:ItemInterface, index) => {
                return (
                    <Link key={index} to={`/menu/${category}/${item.id}`}>
                        <div className='item-container'>    
                            <img className='item-img' src={item.imgUrl} alt={item.name}/>
                            <div className='text-container'>
                                <div>{item.name}</div>
                                <div>{item.price}</div>
                            </div>
                        </div>
                    </Link>    
                );
            })}
            </div>
        </div>
    );
}

export default ItemsDisplay;