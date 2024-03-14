import React, { useState } from 'react'
import TodoListPart from './TodoListPart'
import './timer.css';
function TodoList() {
    const [item,setItem]=useState('')
    const [list,setList]=useState([])

    const submitHandler=e=>{
        e.preventDefault()
        console.log("entered value:", item)
        const newItems=[...list,item]
        setList(newItems)
        setItem('')
    }
    const deleteHandler=(indexValue)=>{
        const newTodos=list.filter((todo,index)=>index!==indexValue)
        setList(newTodos)
        console.log('deleted value:',list)
    }
  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
                <h4>List Management</h4>
                <input type='text' value={item} onChange={e=>setItem(e.target.value)} className='Todo'/> &nbsp;
                <button type='submit' className='TodoBut'>Add</button>
            </form>
            <TodoListPart todoList={list} deleteHandler={deleteHandler}/>
        </center>
    </div>
  )
}

export default TodoList