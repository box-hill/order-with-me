// This file contains the categories that are shown on the Home page once a valid table ID has been entered.

export interface ItemInterface {
    category: string,
    id: string,
    name: string,
    imgUrl: string,
    price: string,
    alt?: string
}
const meats: ItemInterface[] = [
    {
        category: 'Meat',
        name: "A5 Wagyuu",
        id: '10',
        alt: 'A5 juicy wagyuu beef',
        imgUrl: "#",
        price: '$123.00',
    },
    {
        category: 'Meat',
        name: "Pork Belly",
        id: '11',
        imgUrl: "#",
        price: '$10.00',
    },
    {
        category: 'Meat',
        name: "Beef tongue",
        id: '12',
        imgUrl: "#",
        price: '$12.00',
    },
]

const soups: ItemInterface[] = [
    {
        category: 'Soup',
        name: "Spicy Soup Base",
        id: '51',
        imgUrl: "#",
        price: '$16.00',
    },
    {
        category: 'Soup',
        name: "Chicken Broth Soup Base",
        id: '52',
        imgUrl: "#",
        price: '$15.00',
    },
]

const drinks: ItemInterface[] = [
    {
        category: 'Drinks',
        name: "Coke",
        id: '101',
        imgUrl: "#",
        price: '$2.50',
    },
]
const items: ItemInterface[] = meats.concat(soups, drinks);

export {items};