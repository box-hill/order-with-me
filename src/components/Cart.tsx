import { map } from '@firebase/util';
import React, { useState, useEffect } from 'react'
import  { items, ItemInterface } from "./items";
import { CartItemObj } from "./Item";
import { isObjectBindingPattern } from 'typescript';

interface Props { 
    cart: Array<CartItemObj>,
    setCart: Function,
};


export function Cart(props: Props) {
    const { cart, setCart } = props;
    const [totalPrice, setTotalPrice] = useState('');

    useEffect(() => {
        // reducer here
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

    return (
        <div>
            {cart.map((item, index) => {
                let itemPrice = dollarsToCents(item.price);
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
                        <div>{centsToDollars(itemPrice*item.quantity)}</div>
                    </div>
                )
            })}
            <div>
                <div>Total: {totalPrice}</div>
                <button>Order</button>
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