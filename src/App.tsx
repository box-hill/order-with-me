import React from 'react';

import app from "./firebase";

// import "firebase/database";
// import "firebase/firestore";

import './styles/style.css';
import Navbar from './components/Navbar'
import PendingOrders from './components/PendingOrders';
import Form from './components/Form';

function App() {
  
  return (
    <div>
      <Navbar></Navbar>
      <PendingOrders/>
      <Form></Form>
    </div>
  );
}

export default App;
