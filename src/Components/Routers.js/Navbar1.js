import { NavLink } from "react-router-dom";
import './RouterStyling.css'
import { useAuth } from "./Auth";

export const Navbar1 = () => {
  const navLinkStyle = ({isActive}) => {
    return {
      fontWeight: isActive? 'bold':'normal',
      textDecoration: isActive? 'none':'underline'
    }
  }
  const auth = useAuth()
  return (
  <nav className='primary'> 
    <NavLink to='/' 
    // style={navLinkStyle}
    >Home</NavLink>
    <NavLink to='/about' 
    // style={navLinkStyle}
    >About</NavLink>
    <NavLink to={'/products'}>Products</NavLink>
    <NavLink to={'/profile'}>Profile</NavLink>
    {!auth.user && (
      <NavLink to={'/login'}>Login</NavLink>
    )
    }
  </nav>
  )
}