// Item information

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
        name: "Wagyuu Beef",
        id: '10',
        imgUrl: "https://cdn.shopify.com/s/files/1/0482/3233/files/LoneMountainWagyu-seotool-64272-WhatToPair-blogbanner1.jpg?v=1609320587",
        price: '$123.00',
    },
    {
        category: 'Meat',
        name: "Sliced Pork Belly",
        id: '11',
        imgUrl: "https://unclesbutchery.com/wp-content/uploads/2020/04/Sliced-Pork-BellyRolled-Thumb.jpg",
        price: '$10.00',
    },
    {
        category: 'Meat',
        name: "Beef tongue",
        id: '12',
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvN-LvhcMYHPRhHI5kD8RzaZ7-G-gwiIHTHFUCxOQL6eQAnU8LOjYKwyOJm3mpF_wT6I&usqp=CAU",
        price: '$12.00',
    },
    {
        category: 'Meat',
        name: "Sliced Beef",
        id: '13',
        imgUrl: "https://www.mychineserecipes.com/wp-content/uploads/2019/03/beef-slices.jpg",
        price: '$12.00',
    },
    {
        category: 'Meat',
        name: "Sliced Mutton",
        id: '14',
        imgUrl: "https://my-test-11.slatic.net/p/bbafaf71ad7dfc2f59ad9f50af3d3023.jpg",
        price: '$12.00',
    },
    {
        category: 'Meat',
        name: "Sliced Steak",
        id: '15',
        imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/0e/cb/4c/b2/sliced-steak.jpg",
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