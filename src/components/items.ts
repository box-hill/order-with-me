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
        price: '$35.00',
    },
    {
        category: 'Meat',
        name: "Sliced Pork Belly",
        id: '11',
        imgUrl: "https://unclesbutchery.com/wp-content/uploads/2020/04/Sliced-Pork-BellyRolled-Thumb.jpg",
        price: '$17.00',
    },
    {
        category: 'Meat',
        name: "Beef tongue",
        id: '12',
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvN-LvhcMYHPRhHI5kD8RzaZ7-G-gwiIHTHFUCxOQL6eQAnU8LOjYKwyOJm3mpF_wT6I&usqp=CAU",
        price: '$19.00',
    },
    {
        category: 'Meat',
        name: "Sliced Beef",
        id: '13',
        imgUrl: "https://www.mychineserecipes.com/wp-content/uploads/2019/03/beef-slices.jpg",
        price: '$17.00',
    },
    {
        category: 'Meat',
        name: "Sliced Mutton",
        id: '14',
        imgUrl: "https://my-test-11.slatic.net/p/bbafaf71ad7dfc2f59ad9f50af3d3023.jpg",
        price: '$18.50',
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
        imgUrl: "https://www.hwcmagazine.com/wp-content/uploads/2012/02/Spicy-Sichuan-Hot-Pot-1200-x-1200-1295.jpg",
        price: '$16.00',
    },
    {
        category: 'Soup',
        name: "Chicken Broth Soup Base",
        id: '52',
        imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/10/ca/45/07/macau-style-pork-bone.jpg",
        price: '$15.00',
    },
]

const drinks: ItemInterface[] = [
    {
        category: 'Drinks',
        name: "Coke",
        id: '101',
        imgUrl: "https://www.drinkscene.com.au/wp-content/uploads/2021/05/COKE-CAN-CC43-2.jpg",
        price: '$2.50',
    },
    {
        category: 'Drinks',
        name: "Sprite",
        id: '102',
        imgUrl: "https://www.drinkscene.com.au/wp-content/uploads/2021/06/Sprite-Can.png",
        price: '$2.50',
    },
    {
        category: 'Drinks',
        name: "Fanta",
        id: '103',
        imgUrl: "https://www.drinkscene.com.au/wp-content/uploads/2021/06/fanta-Can.png",
        price: '$2.50',
    },
    {
        category: 'Drinks',
        name: "Chai Tea Latte",
        id: '104',
        imgUrl: "https://cdn.shopify.com/s/files/1/0033/9148/8089/t/55/assets/acf.Screen-Shot-2021-08-09-at-11.34.13-AM.png?v=1628523606",
        price: '$5.50',
    },
    {
        category: 'Drinks',
        name: "Latte",
        id: '105',
        imgUrl: "https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg",
        price: '$4.50',
    },
    {
        category: 'Drinks',
        name: "Tea",
        id: '106',
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqI7EPCXHGP5YRc1N_2jXPwY47fVe_tL1Ba14bjJdDDh5yd2yN1-UzAtxnATqdrmmSEnc&usqp=CAU",
        price: '$2.50',
    },
]

const desserts: ItemInterface[] = [
    {
        category: 'Dessert',
        name: "Vanilla ice-cream",
        id: '71',
        imgUrl: "https://static.toiimg.com/thumb/54677722.cms?imgsize=134423&width=800&height=800",
        price: '$4.50',
    },
    {
        category: 'Dessert',
        name: "Ice Cream Mochi",
        id: '72',
        imgUrl: "https://www.biggerbolderbaking.com/wp-content/uploads/2020/08/Mochi-Ice-cream-WS-Thumbnail-500x500.jpeg",
        price: '$8.50',
    },
]

const sides: ItemInterface[] = [
    {
        category: 'Sides',
        name: "Rice",
        id: '81',
        imgUrl: "data:image/jpeg;base64,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",
        price: '$4.50',
    },
    {
        category: 'Sides',
        name: "Special Fried Rice",
        id: '82',
        imgUrl: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/C907FB56-A48F-452B-8649-E0530F4E7FE1/Derivates/2d963bfb-a7c0-4743-b352-719a69875f11.jpg",
        price: '$4.50',
    },
    {
        category: 'Sides',
        name: "Steamed Dumplings",
        id: '83',
        imgUrl: "https://images.eatsmarter.com/sites/default/files/styles/576x432/public/steamed-dim-sum-590648.jpg",
        price: '$4.50',
    },
    {
        category: 'Sides',
        name: "Shrimp Dumplings",
        id: '84',
        imgUrl: "https://dimsumguide.com/fi/shrimp_dumpling.jpg",
        price: '$4.50',
    },
]
const items: ItemInterface[] = meats.concat(soups, drinks, desserts, sides);

export {items};