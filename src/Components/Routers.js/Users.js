import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

export const Users = () => {
  const navigate = useNavigate()
  const [searchParams ,setSearchParams] = useSearchParams()
  const showActiveUsers = searchParams.get('filter')==='active'
  return (
    <div>
      <h4>User 1</h4>
      <h4>User 2</h4>
      <h4>User 3</h4>
      {/* <Link to={'/userdetails'}>User 1</Link> */}
      <button onClick={()=>navigate('userdetails')}>Click</button>
      <button onClick={()=>setSearchParams({filter:'active'})}>active users</button>
      <button onClick={()=>setSearchParams({filter:''})}>reset filter</button>
      {showActiveUsers? (
        <h5>showing all active users</h5>
      ):
      (
        <h5>showing all users</h5>
      )
      }
      <Outlet/>
    </div>
  )
}
