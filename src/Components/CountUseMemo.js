import React, { useMemo, useState } from 'react'

export default function CountUseMemo() {
    const [state,setState]=useState(0)
    const [initialState,setInitialState]=useState(0)

    const Increment1=()=>{
        setState(state+1)
    }
    const Increment2=()=>{
        setInitialState(initialState+1)
    }

    const isEven=(useMemo(()=>{
        let i=0
    while(i<2000000000) i++
        return state%2===0
    },[state]))
    
    // const isOdd=()=>{
    //     return initialState%2===1
    // }
  return (
    <div>
        <button type='button' onClick={Increment1}>Increment1 {state}</button>
        <span>{isEven?'even':'odd'}</span><br/>
        <button type='button' onClick={Increment2}>Increment2 {initialState}</button>
        {/* <span>{isOdd()? 'odd':'even'}</span> */}
    </div>
  )
}
