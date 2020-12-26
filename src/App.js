import './App.css';
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import MainGrid from "./components/MainGrid"
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();



function App() {
  return (
    <div className="App">
      <Header />
      <div className='row'> 
        <div className='col-5'>
          <Sidebar />
        </div>
        <div className='col-7'>
          <MainGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
