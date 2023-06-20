import React, {useEffect, useMemo, useState} from 'react'

function UseMemoPrac() {
    const [number,setNumber]=useState(0)
    const [dark,setDark]=useState(false)
    const doubleNumber= useMemo(()=>{
        return slowFunction(number)
    },[number])
    const themeChange = useMemo(()=>{
        return {
            backgroundColor: dark? 'black' : 'white',
            color: dark? 'white' : 'black',
        };
    },[dark])
    useEffect(()=>{
        console.log('theme changed')
    },[themeChange])
  return (
    <div>
        <input type='number' value={number} name='number' id='number' onChange={(e)=>setNumber(Number(e.target.value))}/>
        <button onClick={()=>setDark(!dark)}>change theme</button>
        <h1 style={themeChange}>number is: {doubleNumber}</h1>
    </div>
  )
}
const slowFunction=(number)=>{
    for (let index = 0; index < 10000; index++) {
      console.log('slowFunction running')  
      return number * number
    }
}

export default UseMemoPrac