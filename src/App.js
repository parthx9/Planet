import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CoreSubjects from "./components/CoreSubjects";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <Header />
      <Form setInputText={setInputText} />
      <CoreSubjects inputText = {inputText}/>
    </div>
  );
}

export default App;
