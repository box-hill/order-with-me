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
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
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

  useEffect(()=>{
    // whenever cart gets updated, we'll update accordingly
    // we will also be listening globally for order changes (e.g. other users adding orders to firebase)
    console.log('cart updated');
  },[cart]);

  return (
    <div className='app'>
      <HashRouter basename='/'>
      <Navbar/>
        <Switch>
          <Route exact path ="/" component={() => <Home setGlobalTableId={setGlobalTableId}/>}/>
          <Route path ="/menu/:category/:id" component={(props: any) => <Item {...props} cart={cart} setCart={setCart}/>}/>
          <Route path ="/menu/:category" component={ItemsDisplay}/>
          <Route exact path="/cart" component={() => <Cart cart={cart} setCart={setCart}/>}/>
          <Route exact path="/orders" component={() => <PendingOrders/>}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
