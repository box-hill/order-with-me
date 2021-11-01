import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import app from "./firebase";
import { getDatabase, ref, set, child, push, onValue } from 'firebase/database';

import './styles/style.css';
import Navbar from './components/Navbar'
import PendingOrders from './components/PendingOrders';
import Home from './components/Home';
import ItemsDisplay from './components/ItemsDisplay';
import Menu from './components/Menu';
import Form from './components/Form';
import { Item, CartItemObj } from './components/Item';
import { Cart } from './components/Cart';


function App() {
  const [globalTableId, setGlobalTableId] = useState('');
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState({});
  const [cart, setCart] = useState([]);
  const [validSession, setValidSession] = useState (false);

  // check localStorage for a valid session
  function retrieveSession(){
    const retrievedSession = localStorage.getItem('sessionTimeStamp');
    if(retrievedSession === null){
        console.log('retrievedSession is null');
        localStorage.clear();
    }
    else{
        const timeNow = Date.now();
        const lastEntered = parseInt(retrievedSession);
        console.log(timeNow, lastEntered);
        if(timeNow - lastEntered < 3.6e+6){
            console.log('recovering previous session from within 1 hour ago');
            setValidSession(true);
            const tableIdstring = localStorage.getItem('tableId')
            if(tableIdstring != null) setGlobalTableId(tableIdstring);
            // TO DO: recover cart here
            let cartJSONString = localStorage.getItem('cart');
            if(cartJSONString != null){
              setCart(JSON.parse(cartJSONString));
            }
        }
    }
    setLoading(false);
  }

  useEffect(() => {
    retrieveSession();
  }, [])

  useEffect(() => {
    // whenever cart gets updated, update the localStorage cart too, so it persists
    let cartJSONString = JSON.stringify(cart);
    localStorage.setItem('cart', cartJSONString);
  }, [cart]);

  useEffect(() => {
    if(validSession === true && globalTableId !== ''){ // on
      const db = getDatabase(app);
      // listens actively for a change in database. 
      const docRef = ref(db, `tables/${globalTableId}/orders`);
      onValue(docRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setOrders(data);
      // Object.keys(data).forEach((key: string) => {
      //   const orderArray: Array<CartItemObj> = data[key];
      //   console.log(orderArray);
      // });
      })
    }
  }, [validSession, globalTableId])

  return (
    <div className='app'>
      <HashRouter basename='/'>
      <Navbar/>
        <Switch>
          <Route exact path ="/" component={() => <Home setGlobalTableId={setGlobalTableId} validSession={validSession} setValidSession={setValidSession} loading={loading}/>}/>
          <Route path ="/menu/:category/:id" component={(props: any) => <Item {...props} cart={cart} setCart={setCart}/>}/>
          <Route path ="/menu/:category" component={ItemsDisplay}/>
          <Route path ="/menu" component={Menu}/>
          <Route path = "/table" component={() => <Form label="Enter your 4 Digit Table ID to get Started!" validSession={validSession} setValidSession={setValidSession} globalTableId={globalTableId} setGlobalTableId={setGlobalTableId}></Form>}/>
          <Route exact path="/cart" component={() => <Cart cart={cart} setCart={setCart} validSession={validSession} globalTableId={globalTableId}/>}/>
          <Route exact path="/orders" component={() => <PendingOrders orders={orders} loading={loading}/>}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
