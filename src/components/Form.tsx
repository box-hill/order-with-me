import React, { ButtonHTMLAttributes, useState } from 'react';

import app from "../firebase";
import { getDatabase, ref, set, child, push, onValue } from 'firebase/database';
import { isPropertySignature } from 'typescript';

interface Props {
    label: string,
    setValidSession: Function,
    globalTableId?: string,
    setGlobalTableId: Function,
    validSession?: boolean,
}
function Form(props: Props) {
    const { label, validSession, setValidSession, globalTableId, setGlobalTableId } = props;
    const [tableId, setTableId] = useState('');
    function onChangeHandler(e: React.FormEvent<HTMLInputElement>){
        setTableId(e.currentTarget.value);
    }

    // Find if tableid exists on the database. 
    // function FindExistingTable(){
    //     const db = getDatabase(app);
    //     const docRef = ref(db, 'tables/' + tableId);
    //     onValue(docRef, (snapshot) => {
    //         const data = snapshot.val();
    //         console.log('Find existing table: ', data);
    //     }, {
    //         onlyOnce: true
    //     });
    // }
    
    function JoinTable(e: React.MouseEvent){
        e.preventDefault();
        const inputId = tableId;
        // check if tableId has number and alphabets only and len = 4 (allow lowercase)
        const regex = /^[a-zA-Z0-9]{4}$/;
        if(regex.test(inputId)){
            console.log('correct table id');
            setValidSession(true);
            localStorage.setItem('tableId', inputId);
            localStorage.setItem('sessionTimeStamp', Date.now().toString(10));
            setGlobalTableId(tableId);
        }
        else{
            console.log('incorrect table id');
        }
    }
  
    const validLabel = 'Current Table: ' + globalTableId;

    return (
      <form>
          <label>{validSession ? validLabel : label}</label>
          <input type="text" minLength={4} maxLength={4} onChange={onChangeHandler} value={tableId} />
          <button onClick={JoinTable}>{validSession ? 'Change Table' : 'Join Table'}</button>
      </form>
    );
}
  
export default Form;