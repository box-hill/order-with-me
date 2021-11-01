import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import app from "./firebase";
import { getDatabase, ref, set, child, push, onValue } from 'firebase/database';

import './styles/style.css';
import Navbar from './components/Navbar'
import PendingOrders from './components/PendingOrders';
import Home from './components/Home';
import ItemsDisplay from './components/ItemsDisplay';
import { Item } from './components/Item';
import { Cart } from './components/Cart';


function App() {
  const [globalTableId, setGlobalTableId] = useState('');
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState([]);
  const [validSession, setValidSession] = useState (false);

  // check localStorage for a valid session
  function retrieveSession(){
    const retrievedSession = localStorage.getItem('sessionTimeStamp');
    if(retrievedSession === null){
        console.log('retrievedSession is null');
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
    // when a user enters the website, we'll listen for order changes on firebase
    const db = getDatabase(app);
    // listens actively for a change in database. 
    const docRef = ref(db, 'tables/tableId/orders');
    onValue(docRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    })
    // if they enter without a valid table id, we might have to add a listener again(?)..probably when globalTableId Updates
    // this way we cover the scenario where they change table Id. 
  },[])

  useEffect(() => {
    // whenever cart gets updated, we'll update the localStorage too, that way if the user refreshes, the items are saved
    let cartJSONString = JSON.stringify(cart);
    console.log(cartJSONString);
    localStorage.setItem('cart', cartJSONString);
  },[cart]);

  return (
    <div className='app'>
      <HashRouter basename='/'>
      <Navbar/>
        <Switch>
          <Route exact path ="/" component={() => <Home setGlobalTableId={setGlobalTableId} validSession={validSession} setValidSession={setValidSession} loading={loading}/>}/>
          <Route path ="/menu/:category/:id" component={(props: any) => <Item {...props} cart={cart} setCart={setCart}/>}/>
          <Route path ="/menu/:category" component={ItemsDisplay}/>
          <Route exact path="/cart" component={() => <Cart cart={cart} setCart={setCart} validSession={validSession} globalTableId={globalTableId}/>}/>
          <Route exact path="/orders" component={() => <PendingOrders/>}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
