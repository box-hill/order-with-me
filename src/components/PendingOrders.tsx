import React, { useState, useEffect } from 'react';
import { JsxElement, JsxText } from 'typescript';

import app from "../firebase";
import { CartItemObj } from './Item';

interface Props {
  orders: any,
  loading: boolean,
}

function PendingOrders(props: Props) {
  const { orders, loading } = props;
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      const secondsNum = Math.floor(Date.now()/1000);
      setSeconds(secondsNum);
    }, 1000)
    return () => {
      clearInterval(interval);
    }
  }
  , [])

  if(loading || seconds === 0) return <div>Loading... </div>
  if(!orders) return null;

  return (
    <div>
      <div>Orders: </div>
      {Object.keys(orders).map((key: string) => {
        const orderArray: Array<CartItemObj> = orders[key];
        return orderArray.map((order, index) => {
          return (
            <div key={index}>
              <div>{order.name}</div>
              <div>{order.quantity}</div>
              <div>{timeDifference(seconds, order.orderedAt!)}</div>
              <div>__________________</div>
            </div>
          )
        })
      })}
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
