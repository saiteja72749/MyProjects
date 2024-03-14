import React from 'react'
// import Teja from './Teja'
function Sai() {
    const names=['sai','teja','chintu']
    const Persons=[
        {
            name:"sai",
            id:1,
            profession:"student",
            college:"mrec"
        },
        {
            name:"teja",
            id:2,
            profession:"student1",
            college:"mrecA"
        },
        {
        name:"saiteja",
        id:3,
        profession:"student2",
        college:"mrecAA"
        }
    ]
    const nameList=names.map((name,index)=>(<h2 index={index}>{index} {name}</h2>
    ))
  return <div>{nameList}</div>
}

export default Sai