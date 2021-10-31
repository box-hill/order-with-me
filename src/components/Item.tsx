import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import  { items, ItemInterface } from "./items";


interface MatchParams {
    category: string;
    id: string;
}

interface CartItemObj {
    id: string,
    quantity: number,
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
        console.log(quantity);
    }

    function addToCart(){
        if(quantity === 0) return;
        // check if cart has our item or if we're adding a new item
        const filteredCart = cart.filter(item => item.id === id);
        if(filteredCart.length > 0){
            const newQuan = filteredCart[0].quantity + quantity;
            setCart([...cart].map(item => item.id === id ? {...item, quantity: newQuan} : item));
        }
        else {
            setCart(cart.concat({id: id, quantity: quantity})); // item does not exist in cart
        }
        console.log(cart);
    }
    return (
        <div>
            <Link to={`/menu/${category}`}><button>Back</button></Link>
            <div>
                <button onClick={() => modifyQuantity('minus')}>-</button>
                <span>Quan: {quantity}</span>
                <button onClick={() => modifyQuantity('plus')}>+</button>
                <button onClick={addToCart}>Add to cart</button>
            </div>

        </div>
    );
}

export default Item;