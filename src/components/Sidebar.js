import React, { useEffect, useState } from "react";
import "../App.css";


function Sidebar() {

  const handleOnChange = (event) =>{
    console.log(event.target)
  }

  const renderMajors = () => {
    if (majorList.length > 0){
      return(
        majorList.map( (major) => {
          return(
            <option value={major.name} key={major._id}>{major.name}</option>
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

  const [subject, setSubject] = useState(null);
  const [majorList, setMajorList] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5001/Majors/')
    .then( res => res.json() )
    .then( res => setMajorList(res))
  }, [])

  return (
    <div className="sidebar">
      <div className='container'>
        <select className="form-control" name='majorSelect' id="majorSelect" onSelect={handleOnChange()}>
          {renderMajors()}
        </select> 
      </div>
    </div>
  );
}

export default Sidebar;
