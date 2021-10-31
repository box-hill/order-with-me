import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import  { categories, Category } from "./categories";


function Menu() {
    useEffect(() => {
        console.log('hello from menu')
        console.log(categories);
    }, [])
    return (
        <div className='menu'>
            {categories.map((category: Category, index) => {
                return (
                    <Link key={index} to={`/menu/${category.name.toLowerCase()}`}>{category.name}</Link>
                );
            })}
        </div>
    );
}

export default Menu;