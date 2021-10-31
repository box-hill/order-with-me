// This file contains the categories that are shown on the Home page once a valid table ID has been entered.

export interface ItemInterface {
    category: string,
    id: string,
    name: string,
    imgUrl: string,
    price: string,
    alt?: string
}

const items: ItemInterface[] = [
    {
        category: 'Meat',
        name: "A5 Wagyuu",
        id: '1',
        alt: 'A5 juicy wagyuu beef',
        imgUrl: "#",
        price: '$123.00',
    },
    {
        category: 'Meat',
        name: "Pork Belly",
        id: '2',
        imgUrl: "#",
        price: '$10.00',
    },
    {
        category: 'Meat',
        name: "Beef tongue",
        id: '3',
        imgUrl: "#",
        price: '$12.00',
    },
    {
        category: 'Drinks',
        name: "Coke",
        id: '4',
        imgUrl: "#",
        price: '$2.50',
    },

]

export {items};