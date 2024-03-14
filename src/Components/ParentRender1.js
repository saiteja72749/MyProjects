import React, { useState } from 'react'
import { ChildRender1 } from './ChildRender1'

export const ParentRender1 = ({children}) => {
    const [count,setCount]=useState(0)
    console.log('parent render1')
  return (
    <div>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>click-{count}</button>
        {/* <button onClick={()=>setCount(0)}>click for 0</button>
        <button onClick={()=>setCount(5)}>click for 5</button> */}
        {/* <ChildRender1/> */}
        {children}
    </div>
  )
}
