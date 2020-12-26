import React, { useEffect } from "react";
import "../App.css"
import logo from '../assets/Planet.png'


const Header = () => {
  useEffect(()=>{
    fetch('http://localhost:5001/Breadths/')
    .then(res => res.json())
    .then(res => console.log(res))
  })
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} width='400'/>
        
      </div>
    </div>
  )
}

export default Header