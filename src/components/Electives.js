import { useEffect, useState } from 'react';


const Electives = () => {
  const [electives, setElectives] = useState([])
  const [selectedElective, setSelectedElective] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchTerm, setSearchTerm] = useState(null)

  const renderElectiveDepartments = () => {
    return(
      electives.map(
        (dept) =>{
          return(
            <option value={dept.department} key={dept._id}>{dept.department}</option>
          )
        }
      )
    )
  }

  const renderElectives = (list) => {
    return(
      list.map( (item) =>{
        return(
          <li className='elective-item' key={item._id}>{item.name}</li>
        )
      })
    )
  }

  const selectElectives = (deptName) =>{
    electives.map( ( dept ) => {
      if(deptName === dept.department){
        setSelectedElective(dept.electives)
      }
    })
  }

  const handleDeptChange = (e) => {
    selectElectives(e.target.value)
    console.log(selectedElective)
  }

  useEffect(()=>{
    fetch('http://localhost:5001/Electives/')
    .then(res => res.json())
    .then(res => setElectives(res))
  }, [])


  return(
    <div className='elective-area'>
      <div className='title'>
        <h3>Select Your Electives:</h3>
      </div>
      <select className='form-control electivesDropdown'
        id='electivesSelect'
        onChange={(e)=>handleDeptChange(e)}
      >
        {renderElectiveDepartments()}
      </select>
      <form>
        <input type='text' className='search-bar' placeholder='Search..'></input>
        <button className='search-btn' type='submit'><i className='fa fa-search'></i></button>
      </form>
      <ul className='elective-list'>
        {renderElectives(selectedElective.slice(0,5))}
      </ul>
    </div>
  )
}

export default Electives;