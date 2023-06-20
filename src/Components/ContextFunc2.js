import React, {useContext} from 'react'
import ContextFunc3 from './ContextFunc3'
import { UserContext,MyContext } from '../App'

function ContextFunc2() {
  const user= useContext(UserContext)
  const channel= useContext(MyContext)
  return (
    <div>ContextFunc2 <br/>
        {/* <ContextFunc3/> */}
        {user}, {channel}
    </div>
  )
}

export default ContextFunc2