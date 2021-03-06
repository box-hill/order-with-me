import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router';
import  { items } from "./items";

interface MatchParams {
    category: string;
    id: string;
}

export interface CartItemObj {
    id: string,
    quantity: number,
    name: string,
    price: string,
    imageUrl?: string,
    pending?: boolean,
    orderedAt?: number,
}

interface Props extends RouteComponentProps<MatchParams> { 
    cart: Array<CartItemObj>,
    setCart: Function,
};

function Item(props: Props) {
    const { id, category } = props.match.params;
    const { cart, setCart } = props;
    const [ quantity, setQuantity ] = useState(0);

    function modifyQuantity(modifyType:string){
        if(modifyType === 'plus'){
            setQuantity(quantity + 1);
        }
        else if(modifyType === 'minus' && quantity <= 0){
            return;
        }
        else if(modifyType === 'minus') {
            setQuantity(quantity - 1);
        }
    }

    // returns an object with the item's info 
    function returnFilteredItem(itemId: string){
        const filteredItem = items.filter(item => item.id === itemId);
        if(filteredItem.length === 0){
            console.log('cannot find item');
            return null;
        }
        else if(filteredItem.length > 1){
            console.log('duplicate items');
            return null;
        }
        else{
            return filteredItem[0];
        }
    }    

    function addToCart(){
        if(quantity === 0) return;
        // check if cart has our item or if we're adding a new item
        const filteredCart = cart.filter(item => item.id === id);

        if(filteredCart.length > 0){ // item exists in cart
            const newQuan = filteredCart[0].quantity + quantity;
            setCart([...cart].map(item => item.id === id ? {...item, quantity: newQuan, name: filteredItem!.name, price: filteredItem!.price, imageUrl:filteredItem!.imgUrl} : item));
        }
        else { // item does not exist in cart
            setCart(cart.concat({id: id, quantity: quantity, name: filteredItem!.name, price: filteredItem!.price, imageUrl:filteredItem!.imgUrl})); 
        }
    }

    let filteredItem = returnFilteredItem(id);

    if(filteredItem === null) return null;

    return (
        <div className='main-content'>
            <div className='item-view'>
                <img src={filteredItem.imgUrl} alt={filteredItem.name}/>
                <div className='item-info'>
                    <div>{filteredItem === null ? null : filteredItem.name}</div>
                    <div>{filteredItem === null ? null : filteredItem.price}</div>
                </div>
                <div className='item-buttons-container'>
                    <div className='item-buttons'>
                        <button onClick={() => modifyQuantity('minus')}>-</button>
                        <span>Quantity: {quantity}</span>
                        <button onClick={() => modifyQuantity('plus')}>+</button>
                    </div>
                    <button onClick={addToCart} disabled={quantity === 0}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}


export { Item };