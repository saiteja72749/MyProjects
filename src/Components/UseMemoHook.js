import React, { useMemo, useState } from 'react'

function UseMemoHook() {
    const [count,setCount]=useState(0)
    const [count1,setCount1]=useState(1)
    const isEven=useMemo(()=>{
        let i=0
        while(i<1000000)i++
        return count % 2===0
    },[count])
    // console.log(isEven)
    const isOdd=()=>{
        return count1 % 2===1
    }
    // console.log(isOdd)
    const increment=()=>{
        setCount(count+1)
    }
    const increment1=()=>{
        setCount1(count1+1)
    }
    // console.log('clicked')
  return (
    <div>
        <button onClick={increment}>Click 1</button>
        <span>{isEven? 'even' : 'odd'}</span><br/>
        {count}<br/>
        <button onClick={increment1}>Click 2</button>
        <span>{isOdd()? 'odd' : 'even'}</span><br/>
        {count1}
    </div>
  )
}

export default UseMemoHook