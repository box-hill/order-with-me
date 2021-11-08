import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DiagnosticCategory } from 'typescript';
import  { Category } from "./categories";
const { categories } = require("./categories");


function Menu() {

    return (
        <div className='menu-grid'>
            {categories.map((category: Category, index: number) => {
                return (
                    <div className='grid-item' style={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${category.imgUrl})`}}>
                        <Link key={index} to={`/menu/${category.name.toLowerCase()}`}>
                            {category.name}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Menu;