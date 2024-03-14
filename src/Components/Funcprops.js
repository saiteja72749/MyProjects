import React from 'react'

// export function Hello(){
//     return <h1>Mahi</h1>
// }
// export const Hello = () => <h1>sai</h1>
// {
// return(
// <div>
//     <h1>Mahi</h1>
//     <h3>Hima</h3>
//     <h6>mahi hima</h6>
// </div>
// )
// }
const Hello=({name,myName})=>{

// const{name,myName}=props
return(
    <div><h1>mahi{name}{myName}</h1></div>
)

}
export default Hello