import { map } from '@firebase/util';
import React from 'react'
import  { items, ItemInterface } from "./items";
import { CartItemObj } from "./Item";

interface Props { 
    cart: Array<CartItemObj>,
    setCart: Function,
};


function Cart(props: Props) {
    const { cart, setCart } = props;

    return (
        <div>
            {cart.map(item => {
                return(
                    <div>
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                        <div>Quantity: {item.quantity}</div>
                    </div>
                )
            })}
        </div>
    );
}

export default Cart;