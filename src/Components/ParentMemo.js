import React, { useCallback, useMemo, useState } from 'react'
import { MemoizedChildMemo } from './ChildMemo'
import { MemoizedChildMemo2 } from './ChildMemo2'
import { MemoizedChildMemo3 } from './ChildMemo3'

export const ParentMemo = () => {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('Mr')
    const person={
      fname: 'sai',
      lname: 'teja'
    }
    const memoizedPerson = useMemo(()=>person,[])
    const handleClick = () => {}
    const memoizedHandleClick = useCallback(handleClick,[])
    console.log('Parent Memo')
  return (
    <div>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>click-{count}</button>
        <button onClick={()=>setName('Mr.')}>click1</button>
        {/* <MemoizedChildMemo name={name}><strong>Hello</strong></MemoizedChildMemo> */}
        {/* <MemoizedChildMemo3 name={name} person={memoizedPerson}/> */}
        <MemoizedChildMemo3 name={name} person={JSON.stringify(person)}
        // person ={memoizedPerson} 
        handleClick={memoizedHandleClick} 
        />
    </div>
  )
}
