import React, { useState, useEffect } from 'react';
import app from "../firebase";
import { getDatabase, ref, onValue } from 'firebase/database';

function Kitchen() {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState(null);

    useEffect(() => {
        const db = getDatabase(app);
        const docRef = ref(db, `tables/`);
        onValue(docRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            if(data === null){
                setLoading(false);
            }
        })
    }, [])

    useEffect(() => {
        if(orders != null) setLoading(false);

    }, [orders])

    if(loading){
        return <div>Loading...</div>
    }
    return (
        <div>
        </div>
    );
}

export default Kitchen;