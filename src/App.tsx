import React from 'react';

import app from "./firebase";
import { getDatabase, ref, set } from 'firebase/database';
// import "firebase/database";
// import "firebase/firestore";

import './styles/style.css';
import Navbar from './components/Navbar'

function App() {
  function FirebasePush(){
    // https://firebase.google.com/docs/database/web/read-and-write
    const db = getDatabase(app)
    //const todosRef = ref(db, "tables");
    set(ref(db, 'tables/' + 'tableId'),{
      tableId: '29',
      collab: false,
    })

  }
  
  return (
    <div>
      Hello world!!!!
      <Navbar></Navbar>
      <button onClick={FirebasePush}>CLick me to test the firebase push</button>
    </div>
  );
}

export default App;
