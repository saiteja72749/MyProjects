import React, { useContext } from 'react'
import { CountContext } from './ParentContext'

export const ChildContext = () => {
    console.log('ChildContext Render')
  return (
    <div>
        ChildContext
        <ChildContext2/>
        {/* <MemoizedChildContext1/> */}
    </div>
  )
}
export const MemoizedChildContext = React.memo(ChildContext)

export const ChildContext1 = () => {
    console.log('ChildContext1 Render')
  return (
    <div>
        ChildContext1
        <ChildContext2/>
    </div>
  )
}
export const MemoizedChildContext1=React.memo(ChildContext1)

export const ChildContext2 = () => {
  const count = useContext(CountContext)
  console.log('ChildContext2 Render')
return (
  <div>
      ChildContext2 <br/>
      count = {count}
  </div>
)
}




