import React from 'react'
import {UserContext,MyContext} from '../App'

function ContextFunc3() {
  return (
    <div>
        <UserContext.Consumer>
            {user=>{
                    return (
                        <MyContext.Consumer>
                            {channel=>{
                               return <div>context value {user}, context value {channel}</div> 
                            }}
                        </MyContext.Consumer>
                    )
                }}
        </UserContext.Consumer>
    </div>
  )
}

export default ContextFunc3