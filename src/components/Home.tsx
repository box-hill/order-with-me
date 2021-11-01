import React from 'react';
import Form from './Form';
import Menu from './Menu';


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