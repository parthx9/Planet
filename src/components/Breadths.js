import { useEffect, useState } from 'react';

const Breadths = () =>{
  const [breadths, setBreadths] = useState([])

  const renderBreadths = (list) => {
    return(
      list.map( (breadth) =>{
        return(
          <li className='breadth-item'>{breadth.name}</li>
        )
      })
    )
  }

  useEffect(()=>{
      fetch('http://localhost:5001/Breadths/')
      .then(res => res.json())
      .then(res => setBreadths(res))
  })

  return(
    <div className='breadth-area'>
      <div className='title'>
        <h3>Select Your Breadth Subjects:</h3>
      </div>
      <input type='text' className='search-elective' placeholder='Search..'></input>
      <ul className='breadth-list'>
        {renderBreadths(breadths.splice(0,5))}
      </ul>
    </div>
  )
}

export default Breadths