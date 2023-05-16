import React, {useEffect, useState} from 'react'

function CountHooks() {
    const [count,setCount]=useState(0)
    const func=()=>{
        setCount(count+1)
    }
   
    useEffect(()=>{
      console.log("callback value")
    },[count])
  return (
    <div>
      {count}
        <button onClick={func}>Click </button>
    </div>
  )
}

export default CountHooks