import React, { useState } from 'react'

function ListHooks() {
    const[items,setItems]=useState([])
    const insertItem=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.ceil(Math.random()*10)
    }],console.log("callback value",items))
    }
    
  return (
    <div>
        <button onClick={insertItem}>insert</button>
        <ul>
            {items.map(item=>(
                <li key={item.id}>
                    {item.value}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ListHooks