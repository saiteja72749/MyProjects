import React from 'react'
import { useReducer } from 'react'
import Count from './Count'

const initialState=0
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'reset':
            return initialState
        case 'decrement':
            return state-1
        default:
            return state
    }
}
function CounterMultiRed() {
    const [count,dispatch]=useReducer(reducer,initialState)
    const [countTwo,dispatchTWO]=useReducer(reducer,initialState)
  return (
    <div>
        <div>
        Count-{count}
        <button onClick={()=>dispatch('increment')}>increment</button>
        <button onClick={()=>dispatch('reset')}>reset</button>
        <button onClick={()=>dispatch('decrement')}>decrement</button>
    </div>
    <div>
        count-{countTwo}
        <button onClick={()=>dispatchTWO('increment')}>increment</button>
        <button onClick={()=>dispatchTWO('reset')}>reset</button>
        <button onClick={()=>dispatchTWO('decrement')}>decrement</button>
    </div>
    </div>
  )
}

export default CounterMultiRed