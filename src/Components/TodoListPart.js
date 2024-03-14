import React from 'react'
import './timer.css';

const TodoListPart=({todoList,deleteHandler})=>{
  return (
    <div>
        {todoList.map((todo,index)=>
            <div key={index}>
                <h5>{todo} &nbsp; <button className='delete' onClick={()=>deleteHandler(index)}>delete</button></h5>
            </div>
        )}
    </div>
  )
}

export default TodoListPart