import React, { useState, useEffect } from 'react'
import { CartItemObj } from "./Item";

import app from '../firebase';
import { getDatabase, ref, set, child, push } from 'firebase/database';


interface Props { 
    cart: Array<CartItemObj>,
    setCart: Function,
    validSession: boolean,
    globalTableId: string,
};


export function Cart(props: Props) {
    const { cart, setCart, validSession, globalTableId } = props;
    const [totalPrice, setTotalPrice] = useState('');

    useEffect(() => {
        // recalcualte cart total whenever it updates
        let initialValue = 0;
        let sum = cart.reduce((prev, current) => {
            const currentValue = dollarsToCents(current.price) * current.quantity;
            return prev + currentValue;
        }, initialValue);
        setTotalPrice(centsToDollars(sum));
    }, [cart])

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

    function processOrder(){
        if(!validSession){
            return;
        }
        let timeNowSeconds: number = Math.floor(Date.now()/1000);

        let cartCopy = [...cart];
        cartCopy = cartCopy.map(order => {
            return {...order, pending: true, orderedAt: timeNowSeconds}
        })
        console.log(cartCopy);
        firebasePush(cartCopy);
        setCart([]);

        function firebasePush(cart: Array<CartItemObj>){
            // https://firebase.google.com/docs/database/web/read-and-write
            const db = getDatabase(app);
            const newOrderKey = push(child(ref(db), 'tables/tableId/orders/')).key; // create new key
            set(ref(db, `tables/${globalTableId}/orders/${newOrderKey}`), cart);
        }
    }

    return (
        <div className='cart-content'>
            <div className='cart-container'>
                {cart.map((item, index) => {
                    let itemPrice = dollarsToCents(item.price);
                    return(
                        <div key={index} className='cart-item-view'>
                            <img src={item.imageUrl} alt={item.name}/>
                            <div className='cart-item-info'>
                                <div>{item.name}</div>
                                <div>{item.price}</div>
                            </div>
                            <div className='item-buttons-container'>
                                <div className='item-buttons'>
                                    <button onClick={() => modifyCart('minus', item.id)} disabled={item.quantity === 1}>-</button>
                                    <div>Quantity: {item.quantity}</div>
                                    <button onClick={() => modifyCart('plus', item.id)}>+</button>
                                </div>
                            </div>
                            <div>
                                <button className='remove-button' onClick={() => removeItemFromCart(item.id)}>Remove Item</button>
                            </div>
                            <div>{centsToDollars(itemPrice*item.quantity)}</div>
                        </div>
                    )
                })}
            </div>
            <div className='checkout-info'>
                <div>Total: <span>{totalPrice}</span></div>
                <div>Table: {globalTableId}</div>
                <button onClick={processOrder} disabled={!validSession}>Order</button>
                {validSession ? null : <div>Enter a table before ordering!</div>}
            </div>
        </div>
    );
}

// takes an input (e.g. '$5.99' or '5.99') and turns it into a number (cents)
export function dollarsToCents(input: string){
    if(input.charAt(0) === '$'){
        input = input.slice(1);
    }

    let decimalPos = -1;
    if(input.includes('.')){
        decimalPos = input.indexOf('.');
        const dollars = parseInt(input.slice(0, decimalPos), 10);

        const centsString = input.slice(decimalPos + 1);
        let cents = null;
        if(centsString.length === 1){
            cents = parseInt(input.slice(decimalPos + 1), 10);
            return dollars * 100 + cents * 10;
        }else if(centsString.length === 2){
            cents = parseInt(input.slice(decimalPos + 1), 10);
        }

        return dollars * 100 + cents!;
    }else {
        return parseInt(input, 10) * 100;
    }
}

// takes an amount in cents and outputs that as a string in $
export function centsToDollars(input: number){
    if(Number.isInteger(input) === false) return '';
    let cents = input % 100;
    let centsString = cents.toString(10);
    if(cents < 10){
        centsString = `0${cents}`;
    }
    let dollars = Math.floor(input/100);
    return `$${dollars}.${centsString}`
}