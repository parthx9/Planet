import React from "react";
import "../App.css"
import {
  HeaderSubtitle,
  HeaderText,
  HeaderWrapper
} from "./styles/Headerstyles"; 

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderText>
        PLANET  
      </HeaderText>
      <HeaderSubtitle>
        A University of Melbourne Course Planner
      </HeaderSubtitle>
      
    </HeaderWrapper>
  );
}
