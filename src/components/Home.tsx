import React from 'react';
import Form from './Form';
import Menu from './Menu';
import { useState, useEffect } from 'react';

// The home page will show the menu categories if the user has already entered a table number (check localstorage session too)
// else, the home page will show a simple form component so the user can input a table number

interface Props {
    setGlobalTableId: Function
}

function Home(props: Props) {
    const { setGlobalTableId } = props;
    const [loading, setLoading] = useState(true);
    const [validSession, setValidSession] = useState (false);
    const [tableId, setTableId] = useState('');

    useEffect(() => {
        retrieveSession();

    },[]);

    // check localStorage for a valid session
    function retrieveSession(){
        const retrievedSession = localStorage.getItem('sessionTimeStamp');
        if(retrievedSession === null){
            console.log('retrievedSession is null');
        }
        else{
            const timeNow = Date.now();
            const lastEntered = parseInt(retrievedSession);
            console.log(timeNow, lastEntered);
            if(timeNow - lastEntered < 3.6e+6){
                console.log('recovering previous session from within 1 hour ago');
                setValidSession(true);
            }
        }
        setLoading(false);
    }
    
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
            <Form 
                label="Enter your 4 Digit Table ID to get Started!" 
                tableId={tableId} setTableId={setTableId} 
                setValidSession={setValidSession} setGlobalTableId={setGlobalTableId}></Form>}
        </div>
    );
}
  
export default Home;