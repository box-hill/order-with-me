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

    // allows direct modification of cart
    function modifyCart(modifyType: string, itemId: string){
        let newQuan = cart.filter(item =>  item.id === itemId)[0].quantity;

        if(newQuan <= 1 && modifyType === 'minus') return;
        if(modifyType === 'plus'){
            newQuan++;
        } else if(modifyType === 'minus'){
            newQuan--;
        }
        
        setCart([...cart].map(item => item.id === itemId ? {...item, quantity: newQuan} : item));
    }

    function removeItemFromCart(itemId: string){
        let newCart = [...cart];
        newCart = newCart.filter(item =>  item.id !== itemId);
        setCart(newCart);
    }

    return (
        <div>
            {cart.map((item, index) => {
                return(
                    <div key={index}>
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                        <div>
                            <button onClick={() => modifyCart('minus', item.id)} disabled={item.quantity === 1}>-</button>
                            <div>Quantity: {item.quantity}</div>
                            <button onClick={() => modifyCart('plus', item.id)}>+</button>
                        </div>
                        <button onClick={() => removeItemFromCart(item.id)}>Remove Item</button>
                    </div>
                )
            })}
        </div>
    );
}

export default Cart;