import React,{useReducer} from 'react'

const initialState=0
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        case 'default':
            return state
    }
}
export const RenderUseReducer = () => {
    const [count, dispatch] = useReducer(reducer,initialState)
    console.log('reducer rendered')
 return (
    <div>
        {count}
        <button onClick={()=>dispatch('increment')}>increment</button>
        <button onClick={()=>dispatch('decrement')}>decrement</button>
        <button onClick={()=>dispatch('reset')}>reset</button>
    </div>
  )
}
