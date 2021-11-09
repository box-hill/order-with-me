import React, { useState, useEffect } from 'react';
import { CartItemObj } from './Item';
import Loader from './Loader';

interface Props {
  orders: any,
  loading: boolean,
  loadingOrder: boolean,
  pendingOrders: any,
  validSession: boolean,
}

interface SumOrders {
  id: string,
  name: string,
  quantity: number,
}

export function PendingOrders(props: Props) {
  const { orders, loading, loadingOrder, validSession, pendingOrders } = props;
  const [seconds, setSeconds] = useState(0);
  const [sumOfOrders, setSumOfOrders] = React.useState<Array<SumOrders>>([])

  useEffect(() => {
    function timer(){
      const secondsNum = Math.floor(Date.now()/1000);
      setSeconds(secondsNum);
    }
    timer();
    let interval = setInterval(() => timer(), 1000)
    return () => {
      clearInterval(interval);
    }
  }
  , [])

  useEffect(() => {
    let sumOrdersCopy: SumOrders[] = [];
    try {
      if(!(orders === null || orders.length === 0)){
        Object.keys(orders).map((key: string) => {
          const orderArray: Array<CartItemObj> = orders[key];
          orderArray.forEach(item => {
            const itemId = item.id;
            const itemQuan = item.quantity;
            const itemName = item.name;
            if(item.pending === true){
              let filteredItem = sumOrdersCopy.filter(itemCopy => itemCopy.id === itemId);
            if(filteredItem.length === 0){
              sumOrdersCopy = [...sumOrdersCopy, {id: itemId, quantity: itemQuan, name: itemName}];
            }else{
              sumOrdersCopy = sumOrdersCopy.map(currItem => currItem.id === itemId ? {...currItem, quantity: currItem.quantity + itemQuan,} : currItem)
            }
            setSumOfOrders(sumOrdersCopy);
            }
          })
        })
      }
    }
    catch(error){
      console.error(error);
    }
  }, [orders])

  if(!validSession) return <div className='main-content'>Enter a table to get started!</div>
  if(loading || loadingOrder || seconds === 0) return (
    <div className='main-content'>
      <Loader/>
    </div>
    );
  if(orders === null) return <div className='main-content'>You currently have no pending orders!</div>;

  return (
    <div className='order-content'>
      <div className='order-container'>
        {Object.keys(orders).map((key: string) => {
          const orderArray: Array<CartItemObj> = orders[key];
          return orderArray.map((order, index) => {
            if(order.pending){  
              return (
                <div key={index} className='order-item-view'>
                  <img src={order.imageUrl} alt={order.name}/>
                  <div className='order-item-info'>
                    <div>{order.quantity}</div>
                    <div>{order.name}</div>
                  </div>
                  <div>{timeDifference(seconds, order.orderedAt!)}</div>
                </div>
              )
            }else{
              return null;
            }
          })
        })}
      </div>
      <div>{sumOfOrders.map((item,index) => <div key={index}><span>{item.quantity}</span><span> - {item.name}</span></div>)}</div>
    </div>
  );
}

export function timeDifference(a:number, b:number){
  let timeDif = a - b;
  if(timeDif >= 6000) return '99:99';
  const minutes = Math.floor(timeDif/60);
  const minutesString = minutes.toString(10); 
  const seconds = timeDif % 60;
  let secondsString = seconds.toString(10);
  if(seconds < 10){
    secondsString = `0${seconds}`;
  }
  return minutesString + ':' + secondsString;
}


