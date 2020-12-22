import React, { useState } from "react";
import "../App.css";
import Form from "./Form";
import CoreSubjects from "./CoreSubjects";
import Scroll from "react-scroll";

var Element = Scroll.Element;

function Sidebar() {
  const [subject, setSubject] = useState(null);
  return (
    <div className="Sidebar">
      <Element
        style={{
          position: "relative",
          overflow: "scroll",
          marginBottom: "50px",
        }}
      >
        <Form setSubject={setSubject} />
        <CoreSubjects subject={subject} />
      </Element>
    </div>
  );
}

export default Sidebar;
