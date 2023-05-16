import React from 'react'
import { useReducer } from 'react'

const initialState={
    firstCount:0,
    secondCount:10
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state, firstCount: state.firstCount+action.value}
        case 'reset':
            return initialState
        case 'decrement':
            return {...state, firstCount: state.firstCount-action.value}
        case 'decrement2':
            return {...state, secondCount: state.secondCount-action.value}
        case 'increment2':
            return {...state, secondCount: state.secondCount+action.value}
        default:
            return state
    }
}

function CounterUseRed2() {
    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        count-{count.firstCount}<br/>
        count1-{count.secondCount}<br/>
        <button onClick={()=>dispatch({type:'increment',value:1})}>increment</button>
        <button onClick={()=>dispatch({type:'reset'})}>reset</button>
        <button onClick={()=>dispatch({type:'decrement',value:1})}>decrement</button>
        <button onClick={()=>dispatch({type:'increment2',value:5})}>increment 5</button>
        <button onClick={()=>dispatch({type:'decrement2',value:5})}>decrement 5</button>
        <button onClick={()=>dispatch({type:'increment2',value:1})}>increment2</button>
        <button onClick={()=>dispatch({type:'decrement2',value:1})}>decrement2</button>
    </div>
  )
}

export default CounterUseRed2