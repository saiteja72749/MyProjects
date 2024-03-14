import React, { useState } from 'react'

function CounterHook2() {
    const initalCount=0
    const [count,setCount]=useState(initalCount)
    const incrementFive=(()=>{
        for(let i=0;i<5;i++){
            setCount(prevState=>prevState+1)
        }
    })
    console.log('callback value',count)
  return (
    <div>
        {count}
        <button onClick={()=>setCount(count-1)}>decrement</button>
        <button onClick={()=>setCount(initalCount)}>reset</button>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={incrementFive}>increase 5</button>
    </div>
  )
}

export default CounterHook2