import React, { useState, useEffect } from 'react';
import app from "../firebase";
import { getDatabase, ref, onValue } from 'firebase/database';
import { timeDifference } from './PendingOrders';

interface OrdersArray {
    [key: string]: Array<Order>;
}

interface Order{
    id: string,
    uid?: string,
    tableId: string,
    name: string,
    quantity: number,
    orderedAt: number,
    pending: boolean,
    price: string,
}
function Kitchen() {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState(null);
    const [ordersArray, setOrdersArray] = React.useState<Array<Order>>([]);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // Start timer
        function timer(){
            const secondsNum = Math.floor(Date.now()/1000);
            setSeconds(secondsNum);
        }
        timer();
        let interval = setInterval(() => timer(), 1000)

        // Get data from firebase
        const db = getDatabase(app);
        const docRef = ref(db, `tables/`);
        onValue(docRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            if(data === null){
                setLoading(false);
            }
            setOrders(data);
        })

        return () => {
            clearInterval(interval);
        }
    }, [])

    // data structure for orders: tables/*tableId*/orders/*orderId*/ArrayOfOrders/Item
    // listed elements are tracked by combining: tableId(4) + orderId(20) + itemId(varying len) 

    useEffect(() => {
        if(orders != null){
            setLoading(false);
            let ordersArr: Order[] = [];
            Object.keys(orders).map((tableID: string) => {
                const ordersArray: OrdersArray = orders[tableID]['orders'];
                Object.keys(ordersArray).map((orderID: string) => {
                    ordersArray[orderID].forEach(item => {
                        item.tableId = tableID;
                        item.uid = tableID + orderID + item.id;
                        ordersArr = ordersArr === null ? [item] : [...ordersArr, item];
                    })
                })
            })
            setOrdersArray(ordersArr);
            console.log(ordersArr);
        }
    }, [orders])

    if(loading || seconds === 0){
        return <div>Loading...</div>
    }
    return (
        <div>
            {ordersArray.map(order => {
                return (
                    <div key={order.uid}>
                        <span>{order.name}</span>
                        <span>---- {order.quantity}</span>
                        <span>---- {timeDifference(seconds, order.orderedAt!)}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default Kitchen;