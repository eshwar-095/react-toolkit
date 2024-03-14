import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './cakeSlice';

export const CakeView = () => {
  const noOfCakes = useSelector((state)=> state.cake.numOfCakes)
  const dispatch = useDispatch();
  return (
    <div>
        <h2>No of cakes -{noOfCakes} </h2>
        <button onClick={()=>dispatch(ordered())}>Order Cake</button>
        <button onClick={()=>dispatch(restocked(8))}>Restock Cake</button>
    </div>
  )
}
