import React, { useState } from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
// import app from "./firebase";
// import "firebase/database";
// import "firebase/firestore";

import './styles/style.css';
import Navbar from './components/Navbar'
import PendingOrders from './components/PendingOrders';
import Home from './components/Home';
import ItemsDisplay from './components/ItemsDisplay';
import Item from './components/Item';
import Cart from './components/Cart';

function App() {
  const [globalTableId, setGlobalTableId] = useState('');
  const [cart, setCart] = useState([{id: '1', quantity: 4}]);

  return (
    <div className='app'>
      <HashRouter basename='/'>
      <Navbar/>
        <Switch>
          <Route exact path ="/" component={() => <Home setGlobalTableId={setGlobalTableId}/>}/>
          <Route path ="/menu/:category/:id" component={(props: any) => <Item {...props} cart={cart} setCart={setCart}/>}/>
          <Route path ="/menu/:category" component={ItemsDisplay}/>
          <Route exact path="/cart" component={() => <Cart/>}/>
          <Route exact path="/orders" component={() => <PendingOrders/>}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
