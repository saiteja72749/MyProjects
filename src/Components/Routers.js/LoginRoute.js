import React, { useState } from 'react'
import { useAuth } from './Auth'
import { useLocation, useNavigate } from 'react-router-dom'

export const LoginRoute = () => {
  const [user,setUser] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || '/' 
  const handleLogin = () => {
    auth.login(user)
    navigate(redirectPath,{replace: true})
    console.log('login successful')
  }
  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <label>UserName:</label>
        <input type='text' value={user} onChange={(e)=>setUser(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}
