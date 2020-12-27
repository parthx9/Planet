import React, { useEffect, useState } from "react";
import "../App.css";


function Sidebar({ setSubject, subject }) {
  const [majorList, setMajorList] = useState([])
  const [cores, setCores] = useState([])

  const handleCore = (majorName) =>{
    majorList.map( (major)=>{
      if (majorName === major.name){
        setCores(major.core)
      }
      return cores
    })
  }

  const handleOnChange = (event) =>{
    // setSubject(event.value)
    handleCore(event.value)
    console.log(cores)
  }

  const renderCoreSubjects = () => {
    if (cores.length > 0){
      return(
        cores.map( core => {
          return(
            <li className='core-item'>{core.name}</li>
          )
        })
      )
    }
    else{
      return(
        <h2>Select a Major</h2>
      )
    }
  }

  const renderMajors = () => {
    if (majorList.length > 0){
      return(
        majorList.map( (major) => {
          return(
            <option value={major.name} name={major.name} key={major._id}>{major.name}</option>
          )
        })
      )
    }
    else{
      return (
        <option>Loading...</option>
      )
    }
  }

  useEffect(()=>{
    fetch('http://localhost:5001/Majors/')
    .then( res => res.json() )
    .then( res => setMajorList(res))
  }, [])

  return (
    <div className="sidebar">
      <div className=''>
        <form className='major'>
          <div className='title'>
            <h3>Select Your Major:</h3>
          </div>
          <select 
            className="form-control majorDropdown" 
            id="majorSelect" 
            onChange={(e)=>handleOnChange(e.target)}
          >
            {renderMajors()}
          </select> 
        </form>
        <div className='core-area'>
          <div className='title'>
            <h3>Core Subjects for your Major:</h3>
          </div>
          <ul className='core-list'>
            {renderCoreSubjects()}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
