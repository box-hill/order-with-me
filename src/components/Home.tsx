import React from 'react';
import Form from './Form';
import Menu from './Menu';
import { useState, useEffect } from 'react';

// The home page will show the menu categories if the user has already entered a table number (check localstorage session too)
// else, the home page will show a simple form component so the user can input a table number

interface Props {
    setGlobalTableId: Function,
    validSession: boolean,
    setValidSession: Function,
    loading: boolean,   
}

function Home(props: Props) {
    const { setGlobalTableId, validSession, setValidSession, loading } = props;
    
    if(loading){
        return (
            <div>
                Loading.... 
                Place a loader here
            </div>
        )
    }

    return (
        <div>
            {validSession ? 
            <Menu/> : 
            <Form label="Enter your 4 Digit Table ID to get Started!" setValidSession={setValidSession} setGlobalTableId={setGlobalTableId}></Form>}
        </div>
    );
}




export default Home;