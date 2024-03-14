import React, { useState } from 'react'

const initState={
    fname: 'sai',
    lname: 'teja'
}
export const StateImmutable = () => {
    const [person,setPerson]=useState(initState)
    const changeHandler=()=>{
        const newPerson={...person}
        newPerson.fname='ms'
        newPerson.lname='d'
        setPerson(newPerson)
    }
    console.log('State Immutability render')
  return (
    <div>
        <button onClick={changeHandler}>{person.fname} {person.lname}</button>
    </div>
  )
}
