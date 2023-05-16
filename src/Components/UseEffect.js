import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=>{
        console.log('useEffect-document title updated')
        document.title=`clicked ${count} times`
        // console.log(count)
        // alert(count)
    },[count])
  return (
    <div>
        <input type='text' 
        value={name} 
        onChange={e=>setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>click  times</button>
        {count}
    </div>
  )
}

export default UseEffect