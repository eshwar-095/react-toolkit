import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './sliceIcecream'

export const IceCreamView = () => {
  const noOfIceCreams = useSelector((state)=> state.icecream.numOfIcecreams)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>No of IceCream -{noOfIceCreams} </h2>
        <button onClick={()=>dispatch(ordered())}>IceCream Cake</button>
        <button onClick={()=>dispatch(restocked(5))}>IceCream Cake</button>
    </div>
  )
}
