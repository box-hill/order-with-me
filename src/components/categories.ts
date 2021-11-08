// This file contains the categories that are shown on the Home page once a valid table ID has been entered.

export interface Category {
    name: string,
    imgUrl: string
}

const categories: Category[] = [
    {
        name: "Meat",
        imgUrl: "./img/meat.jpg",
    },
    {
        name: "Soup",
        imgUrl: "https://images.unsplash.com/photo-1611345157614-26d3bdd10c93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    },
    {
        name: "Sides",
        imgUrl: "./img/sides.jpg",
    },
    {
        name: "Dessert",
        imgUrl: "./img/dessert.jpeg",
    },
    {
        name: "Drinks",
        imgUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    },
]

export {categories};