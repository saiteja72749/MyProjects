import React, { useState } from 'react'
import { ParentRender1 } from './ParentRender1'
import { ChildRender1 } from './ChildRender1'

export const ParentRender2 = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <button onClick={()=>setCount(c=>c+1)}>click {count}</button>
        <ParentRender1>
            <ChildRender1/>
        </ParentRender1>
    </div>
  )
}
