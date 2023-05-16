import React from 'react'
import { Link } from 'react-router-dom'
    
const Navbar=()=>{
  return (
    <div>
      <center>
        <ul>
           <Link to='/'><li>Home</li></Link>
           <Link to='/About'><li>About</li></Link>
            <Link to='/Contact'><li>Contact</li></Link>
            <Link to='/PrivacyPolicy'><li>Privacy and policy</li></Link>
            <Link to='/Login'><li>Login/SignUp</li></Link>
        </ul>
        </center>
    </div>
  )
}

export default Navbar