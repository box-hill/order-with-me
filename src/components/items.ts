// This file contains the categories that are shown on the Home page once a valid table ID has been entered.

export interface Item {
    category: string,
    name: string,
    imgUrl: string,
    alt?: string
}

const items: Item[] = [
    {
        category: 'Meat',
        name: "A5 Wagyuu",
        alt: 'A5 juicy wagyuu beef',
        imgUrl: "#",
    },
    {
        category: 'Meat',
        name: "Pork Belly",
        imgUrl: "#",
    },
    {
        category: 'Meat',
        name: "Beef tongue",
        imgUrl: "#",
    },

]

export {items};