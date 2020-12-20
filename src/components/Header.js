import React from "react";
import "../App.css"
import logo from '../assets/Planet.png'
import {
  HeaderSubtitle,
  HeaderWrapper
} from "./styles/Headerstyles"; 

export default function Header() {
  return (
    <HeaderWrapper>
      <img alt = "Planet"src={logo} width='400'/>
      <HeaderSubtitle>
        A University of Melbourne Course Planner
      </HeaderSubtitle>
      
    </HeaderWrapper>
  );
}
