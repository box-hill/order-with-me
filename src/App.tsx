import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import app from "./firebase";
import { getDatabase, ref, onValue } from 'firebase/database';

import './styles/style.css';
import Navbar from './components/Navbar'
import PendingOrders from './components/PendingOrders';
import Home from './components/Home';
import ItemsDisplay from './components/ItemsDisplay';
import Menu from './components/Menu';
import Form from './components/Form';
import Kitchen from './components/Kitchen';
import { Item, CartItemObj } from './components/Item';
import { Cart } from './components/Cart';


function App() {
  const [globalTableId, setGlobalTableId] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingOrder, setLoadingOrder] = useState(true);
  const [orders, setOrders] = useState(null);
  const [pendingOrders, setPendingOrders] = React.useState<Array<CartItemObj>>([])
  const [pastOrders, setPastOrders] = React.useState<Array<CartItemObj>>([])
  const [cart, setCart] = useState([]);
  const [validSession, setValidSession] = useState (false);

  // check localStorage for a valid session
  function retrieveSession(){
    const retrievedSession = localStorage.getItem('sessionTimeStamp');
    if(retrievedSession === null){
        localStorage.clear();
    }
    else{
        const timeNow = Date.now();
        const lastEntered = parseInt(retrievedSession);
        if(timeNow - lastEntered < 3.6e+6){
            setValidSession(true);
            const tableIdstring = localStorage.getItem('tableId');
            if(tableIdstring != null) setGlobalTableId(tableIdstring);
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
    if(validSession === true && globalTableId !== ''){ 
      const db = getDatabase(app);
      const docRef = ref(db, `tables/${globalTableId}/orders`);
      onValue(docRef, (snapshot) => {
      const data = snapshot.val();
      setOrders(data);
      if(data === null){setLoadingOrder(false)};
      })
    }
  }, [validSession, globalTableId])

  useEffect(() => {
    if(orders != null){
      setLoadingOrder(false)
      let pending: Array<CartItemObj> = [];
      let past: Array<CartItemObj> = [];
      Object.keys(orders).map((key: string) => {
        const orderArray: Array<CartItemObj> = orders[key];
        const filteredPending = orderArray.filter((order) => order.pending === true);
        pending = pending.concat(filteredPending)
        const filteredPast = orderArray.filter((order) => order.pending === false);
        past = past.concat(filteredPast);
      })
      setPendingOrders(pending);
      console.log('pending');
      console.table(pending)
      setPastOrders(past);
      console.log('past');
      console.table(past)
    }

  }, [orders])

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
          <Route exact path="/orders" component={() => <PendingOrders orders={orders} loading={loading} loadingOrder={loadingOrder} pendingOrders={pendingOrders}/>}/>
          <Route exact path="/kitchen" component={Kitchen}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
