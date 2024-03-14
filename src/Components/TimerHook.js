import React, { useEffect, useState } from 'react'

function TimerHook() {
    const [count,setCount]=useState(0)

    const tick=()=>{
        setCount(prevCount=>prevCount+1)
    }
    useEffect(()=>{
        function doSomething(){
            console.log('sai')
        }
        doSomething()
        var interval=setInterval(tick,1)
        return()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <div>{count}</div>
  )
}

export default TimerHook