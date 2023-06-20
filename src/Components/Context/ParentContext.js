import React, { useState } from 'react'
import { MemoizedChildContext } from './ChildContext'

export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

export const ParentContext = ({children}) => {
    const [count,setCount]=useState(0)
    console.log('ParentContext Render')
  return (
    <div>
        <button onClick={()=>setCount(c=>c+1)}>Click</button><br/>
        ParentContext
        <CountProvider value={count}>
            {children}
        </CountProvider>
    </div>
  )
}
