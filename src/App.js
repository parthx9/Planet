import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CoreSubjects from "./components/CoreSubjects";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

function App() {
  const [subject, setSubject] = useState(null);
  
  return (
    <div className="App">
      <Header />
      <Form setSubject={setSubject} />
      <CoreSubjects subject = {subject}/>
    </div>
  );
}

export default App;
