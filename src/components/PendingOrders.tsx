import React from 'react';

import app from "../firebase";
import { getDatabase, ref, set, child, push, onValue } from 'firebase/database';

function PendingOrders() {
  function FirebasePush(){
    // https://firebase.google.com/docs/database/web/read-and-write
    const db = getDatabase(app);
    const newOrderKey = push(child(ref(db), 'tables/tableId/orders/')).key; // create new key
    console.log(newOrderKey);
    // tableId should be a variable from user input (security)
    set(ref(db, 'tables/tableId/orders/' + newOrderKey),{
      tableId: '29',
      collab: false,
    });

    // listens actively for a change in database. 
    const docRef = ref(db, 'tables/tableId/orders');
    onValue(docRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    })
  }
  
  return (
    <div>
      <button onClick={FirebasePush}>Click me to active firebase push, and onValue listener</button>
    </div>
  );
}

export default PendingOrders;
