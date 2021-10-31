import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import app from "./firebase";
// import "firebase/database";
// import "firebase/firestore";

import './styles/style.css';
import Navbar from './components/Navbar'
import PendingOrders from './components/PendingOrders';
import Form from './components/Form';
import Home from './components/Home';
import Menu from './components/Menu';
import Item from './components/Item';
import Cart from './components/Cart';

function App() {
  
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar></Navbar>
        <Switch>
          <Route exact path ="/" component={Home}/>
          <Route path ="/menu/:category/:id" component={Item}/>
          <Route path ="/menu/:category" component={Menu}/>
          <Route exact path="/cart" component={() => <Cart/>}/>
          <Route exact path="/orders" component={() => <PendingOrders/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
