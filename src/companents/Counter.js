import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement, incrementByAmount, decrementbyAmount} from '../redux/counter/counterSlice'


function Counter() {
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(3)

  return (
    <div>
        <h1>{countValue}</h1>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button>


        <br /> <br />

        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <button onClick={() => dispatch(incrementByAmount(amount))}>Increment by Amount</button>
        <button onClick={()=> dispatch(decrementbyAmount(amount))}>Decrement by Amount</button>
    </div>
  )
}

export default Counter;