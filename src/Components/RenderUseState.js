import React, { useState } from 'react'

export const RenderUseState = () => {
    const [count,setCount]=useState(0)
    console.log('rendered')
  return (
    <div>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>click-{count}</button>
        <button onClick={()=>setCount(0)}>click for 0</button>
        <button onClick={()=>setCount(5)}>click for 5</button>
    </div>
  )
}
