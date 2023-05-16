import React from 'react'
import { useReducer } from 'react'

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

function CounterUseRed() {
    const [count,sss]=useReducer(reducer,initialState)
  return (
    <div>
        Count-{count}
        <button onClick={()=>sss('increment')}>increment</button>
        <button onClick={()=>sss('reset')}>reset</button>
        <button onClick={()=>sss('decrement')}>decrement</button>
    </div>
  )
}

export default CounterUseRed