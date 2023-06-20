import React, { useState } from 'react'
import { ChildRender } from './ChildRender'

export const ParentRender = () => {
    const [count,setCount]=useState(0)
    console.log('parent render')
  return (
    <div>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>click-{count}</button>
        <button onClick={()=>setCount(0)}>click for 0</button>
        <button onClick={()=>setCount(5)}>click for 5</button>
        <ChildRender/>
    </div>
  )
}
