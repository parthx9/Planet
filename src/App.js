import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import MainGrid from "./components/MainGrid"



function App() {

  const [subject, setSubject] = useState(null);

  return (
    <div className="App">
      <Header />
        <div className=''>
          <div className='row'> 
            <div className='col-4'>
              <Sidebar setSubject={setSubject} subject={subject} />
            </div>
            <div className='col-7'>
              <MainGrid />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
