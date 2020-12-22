import React from "react";
import "../App.css"
import logo from '../assets/Planet.png'
import ParticlesBg  from "particles-bg";


const Header = () => {
  return (
    <div className='header'>
    <ParticlesBg type="cobweb" bg={true} />
      <div className='logo'>
        <img src={logo} width='400'/>
        
      </div>
    </div>
  )
}

export default Header