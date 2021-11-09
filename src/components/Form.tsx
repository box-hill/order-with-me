import React, { useEffect, useState } from 'react';

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
    const [disableBtn, setDisableBtn] = useState(true);

    useEffect(() => {
        const regex = /^[a-zA-Z0-9]{4}$/;
        if(regex.test(tableId)){
            setDisableBtn(false);
        }
        else{
            setDisableBtn(true);
        }
    }, [tableId])

    function onChangeHandler(e: React.FormEvent<HTMLInputElement>){
        setTableId(e.currentTarget.value);
    }
    
    function JoinTable(e: React.MouseEvent){
        e.preventDefault();
        const inputId = tableId;
        // check if tableId has number and alphabets only and len = 4 (allow lowercase)
        const regex = /^[a-zA-Z0-9]{4}$/;
        if(regex.test(inputId)){
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
        <div className="main-content">   
            <form className="form-table" style={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('./img/shopfront.jpg')`}}>
                <label>{validSession ? validLabel : label}</label>
                <div>
                    <input type="text" minLength={4} maxLength={4} onChange={onChangeHandler} value={tableId} />
                    <button onClick={JoinTable} disabled={disableBtn}>{validSession ? 'Change Table' : 'Join Table'}</button>
                </div>
            </form>
        </div>
    );
}
  
export default Form;