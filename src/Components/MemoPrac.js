import React, { useState } from 'react'
import MemoPrac1 from './MemoPrac1'
import MemoPrac2 from './MemoPrac2'

function MemoPrac() {
    const [count,setCount]=useState('sai')
    const [count1,setCount1]=useState(0)
    console.log(count)
    console.log(count1)
  return (
    <div>
        <button onClick={()=>setCount('teja')}>Click</button>
        <button onClick={()=>setCount1(prevCount=>prevCount+1)}>Click 1</button>
        <MemoPrac1/>
        <MemoPrac2/>
    </div>
  )
}

export default MemoPrac