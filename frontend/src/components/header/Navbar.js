import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='navbaar'>
      <Link to={"/add"}> Add user</Link>
      <Link to={"/getdata"}>getuser</Link>

      <Link to={"/getdata"}> update</Link>
      <Link to={"/delete"}> delete user</Link>

    </div>
  )
}

export default Navbar
