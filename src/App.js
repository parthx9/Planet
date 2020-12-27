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
            <div className='col-md-4 col-12'>
              <Sidebar setSubject={setSubject} subject={subject} />
            </div>
            <div className='col-md-7 col-12'>
              <MainGrid />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
