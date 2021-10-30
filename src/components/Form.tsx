import React, { useState } from 'react';

import app from "../firebase";
import { getDatabase, ref, set, child, push, onValue } from 'firebase/database';

function Form() {
    const [tableId, setTableId] = useState('');

    function onChangeHandler(e: React.FormEvent<HTMLInputElement>){
        console.log(e.currentTarget.value);
        setTableId(e.currentTarget.value);
    }

    // Find if tableid exists on the database. 
    function FindExistingTable(){
        const db = getDatabase(app);
        const docRef = ref(db, 'tables/' + tableId);
        onValue(docRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
        })
    }
    
    function JoinTable(){
        FindExistingTable();
    }
  
    return (
      <div>
          <input type="number" onChange={onChangeHandler} value={tableId}/>
          <button onClick={JoinTable}>Join Table</button>
      </div>
    );
  }
  
  export default Form;