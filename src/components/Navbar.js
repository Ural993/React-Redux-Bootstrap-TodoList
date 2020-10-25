import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = ()=>{
    return(
        <nav className ='navbar navbar-expand-lg navbar-dark bg-dark'>
         <ul className="navbar-nav">
            <li className="nav-item">
             <NavLink className="nav-link" to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
             <NavLink className="nav-link" to='/about'>About</NavLink>
            </li>
        </ul>
      </nav>
    )
}