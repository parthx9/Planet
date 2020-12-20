import React from "react";
import "../App.css"
import logo from '../assets/Planet.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} width='400'/>
      </div>
    </div>
  )
}

export default Header