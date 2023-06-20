import React, { useState } from 'react'
import useDocumentTitle from '../Hooks/useDocumentTitle'
function DocTitle2() {
    const [count,setCount]=useState(0)
    useDocumentTitle(count)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>click {count}</button>
    </div>
  )
}

export default DocTitle2