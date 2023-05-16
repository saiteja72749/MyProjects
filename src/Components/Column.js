import React from 'react'

function Column() {
    const items=[]
  return (
    <React.Fragment>
        {
            items.map(item=>(
                <React.Fragment key={item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        }
        <td>name</td>
        <td>rollno</td>
    </React.Fragment>
  )
}

export default Column