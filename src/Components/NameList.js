import React from 'react'
import Person from './Person'
function NameList() {
    const persons=[
        {
            name:'sai',
            id:1,
            age:20,
            college:'mrec'
        },
        {
            name:'teja',
            id:2,
            age:18,
            college:'mrec(A)' 
        },
        {
            name:'saiteja',
            id:3,
            age:19,
            college:'mrec-A'
        },
    ]
    const personList=persons.map(person=>(
    <Person key ={person.name} person={person}/> 
    ))
  return <div>{personList}</div>
} 


export default NameList