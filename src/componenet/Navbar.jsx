import React from 'react'
import { NavLink } from 'react-router-dom'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import  "./Navbar.css"
const Navbar = () => {
  return (
    <div className='maindiv'>
        <AcUnitIcon />
      <ul className="ul">
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
        <li><NavLink to={"/project"}>Portfolio</NavLink></li>
      </ul>
      <button>Hire Me</button>
    </div>
  )
}

export default Navbar
