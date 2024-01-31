import React from 'react'
import "./style.css"
import { useDispatch, useSelector ,} from 'react-redux'
import { RootStore,AppDispatch } from '../State/Store'
import { decrement, increment,incremantByAction,incrementAsync } from '../State/Counter/counterSlice'
const Counter = () => {
    const count = useSelector((state:RootStore) =>state.counter.value)
    const dispatch = useDispatch<AppDispatch>()

  return (
    <div className='flex'>
        <h1>Redux Learning</h1>
      <h1>{count}</h1>
      <div>
        <button className='button' onClick={()=>dispatch(increment())}>Increment</button>
        <button className='button' onClick={()=>dispatch(decrement())}>Decrement</button>
        <button className='button' onClick={()=>dispatch(incremantByAction(10))}>IecrementByAction</button>
        <button className='button' onClick={()=>dispatch(incrementAsync(10))}>IncrementAsync</button>
      </div>
    </div>
  )
}

export default Counter
