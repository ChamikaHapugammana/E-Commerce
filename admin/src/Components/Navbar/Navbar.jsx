import React from 'react'
import "./Navbar.css"
import navlogo from "../../assets/logo.jpeg"
import navprofile from "../../assets/nav-profile.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
        <img  className = "nav-logo" src={navlogo} alt="" />
        <p>H.G.A. HARDWARE</p>
        </div>
        
        <img src={navprofile} alt="" className='nav-profile' />
      
    </div>
  )
}

export default Navbar
