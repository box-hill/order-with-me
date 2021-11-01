import React, { useState, useEffect } from 'react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import { JsxElement, JsxText } from 'typescript';

import app from "../firebase";
import { CartItemObj } from './Item';

interface Props {
  orders: any,
  loading: boolean,
}

interface SumOrders {
  id: string,
  name: string,
  quantity: number,
}

function PendingOrders(props: Props) {
  const { orders, loading } = props;
  const [seconds, setSeconds] = useState(0);
  const [sumOfOrders, setSumOfOrders] = React.useState<Array<SumOrders>>([])
  //const [sumOfOrders, setSumOfOrders] = useState([]);

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
    Object.keys(orders).map((key: string) => {
      const orderArray: Array<CartItemObj> = orders[key];
      orderArray.forEach(item => {
        const itemId = item.id;
        const itemQuan = item.quantity;
        const itemName = item.name;
        let filteredItem = sumOrdersCopy.filter(itemCopy => itemCopy.id === itemId);
        console.log('filtered item,' ,filteredItem);
        if(filteredItem.length === 0){
          sumOrdersCopy = [...sumOrdersCopy, {id: itemId, quantity: itemQuan, name: itemName}];
          console.log('sum of orders', sumOrdersCopy);  
        }else{
          sumOrdersCopy = sumOrdersCopy.map(currItem => currItem.id === itemId ? {...currItem, quantity: currItem.quantity + itemQuan,} : currItem)
          console.log('sum of orders', sumOrdersCopy);  
        }
        setSumOfOrders(sumOrdersCopy);
        })
    })
  }, [orders])


  if(loading || seconds === 0) return <div>Loading... </div>
  if(!orders) return null;

  return (
    <div>
      <div>Orders: </div>
      {Object.keys(orders).map((key: string) => {
        const orderArray: Array<CartItemObj> = orders[key];
        return orderArray.map((order, index) => {
          if(order.pending){  
            return (
              <div key={index}>
                <div>{order.name}</div>
                <div>{order.quantity}</div>
                <div>{timeDifference(seconds, order.orderedAt!)}</div>
                <div>__________________</div>
              </div>
            )
          }else{
            return null;
          }
        })
      })}
      {sumOfOrders.map((item,index) => <div key={index}><span>{item.quantity}</span><span> - {item.name}</span></div>)}
    </div>
  );
}

function timeDifference(a:number, b:number){
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

export default PendingOrders;
