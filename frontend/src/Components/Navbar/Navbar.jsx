import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
import logo from "../Assets/logo.jpeg"
import cart_icon from "../Assets/cart_icon.png"
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from "../Assets/Dropdown.png"


export default function Navbar() {

  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();


  const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle("nav-menu-visible");
      e.target.classList.toggle('open');
  }


  return (
    <div className='navbar'>

        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>H.G.A. HARDWARE</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src= {nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={() => {setMenu("shop")}}> <Link style={{ textDecoration: 'none'}} to = '/'>Shop</Link>{menu === "shop" ? <hr/> : <></>  } </li>
            <li onClick={() => {setMenu("building")}}> <Link style={{ textDecoration: 'none'}} to = '/building'>BUILDING</Link>{menu === "building" ? <hr/> : <></>  }</li>
            <li onClick={() => {setMenu("electrical")}}> <Link style={{ textDecoration: 'none'}} to = '/electrical'>ELECTRICAL</Link>{menu === "electrical" ? <hr/> : <></>  }</li>
            <li onClick={() => {setMenu("paint")}}> <Link style={{ textDecoration: 'none'}} to = '/paint'>PAINT</Link>{menu === "paint" ? <hr/> : <></>  }</li>
        </ul>
        <div className="nav-login-cart">
          {localStorage.getItem('auth-token')
          ? <button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button> : <Link style={{ textDecoration: 'none'}} to = '/login'><button>Login</button></Link>}
          
          <Link style={{ textDecoration: 'none'}} to = '/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">
              {getTotalCartItems()}
            </div>
        </div>

        

      
    </div>
  )
}
