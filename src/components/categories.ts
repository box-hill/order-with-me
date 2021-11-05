// This file contains the categories that are shown on the Home page once a valid table ID has been entered.

export interface Category {
    name: string,
    imgUrl: string
}

const categories: Category[] = [
    {
        name: "Meat",
        imgUrl: "#",
    },
    {
        name: "Soup",
        imgUrl: "#",
    },
    {
        name: "Sides",
        imgUrl: "#",
    },
    {
        name: "Dessert",
        imgUrl: "#",
    },
    {
        name: "Drinks",
        imgUrl: "#",
    },
]

export {categories};