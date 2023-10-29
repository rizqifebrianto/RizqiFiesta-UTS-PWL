import React, { useState } from "react";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>DIMENSI CAMERA</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to="/">Katalog</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("nikon")}}><Link style={{ textDecoration: 'none'}} to="/nikon">Nikon</Link>{menu==="nikon"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("canon")}}><Link style={{ textDecoration: 'none'}} to="/canon">Canon</Link>{menu==="canon"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("sony")}}><Link style={{ textDecoration: 'none'}} to="/sony">Sony</Link>{menu==="sony"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
