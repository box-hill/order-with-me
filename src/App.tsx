import React, { useState } from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
// import app from "./firebase";
// import "firebase/database";
// import "firebase/firestore";

import './styles/style.css';
import Navbar from './components/Navbar'
import PendingOrders from './components/PendingOrders';
import Home from './components/Home';
import Menu from './components/Menu';
import ItemDisplay from './components/ItemDisplay';
import Item from './components/Item';
import Cart from './components/Cart';

function App() {
  const [globalTableId, setGlobalTableId] = useState('');

  return (
    <div className='app'>
      <HashRouter basename='/'>
      <Navbar></Navbar>
        <Switch>
          <Route exact path ="/" component={() => <Home setGlobalTableId={setGlobalTableId}/>}/>
          <Route path ="/menu/:category/:id" component={Item}/>
          <Route path ="/menu/:category" component={ItemDisplay}/>
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/cart" component={() => <Cart/>}/>
          <Route exact path="/orders" component={() => <PendingOrders/>}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
