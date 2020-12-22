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
      <Sidebar />
      <MainGrid />
    </div>
  );
}

export default App;
