import React from "react";
import "../App.css"
import Scroll from "react-scroll";

var Element = Scroll.Element;

export default function CoreSubjects({ subject }) {
  const renderSubjects = () => {
    return subject.map((subject) => {
      return (
        <li>
          <div className="col-2 subs">
            <h6>{subject}</h6>
          </div>
        </li>
      );
    });
  };

  if (subject) {
    return (
      <div>
        <div>
          <div className="core-area">
            <h2>Core Subjects</h2>
            <ul className="subjects">
              <Element
                style={{
                  position: "relative",
                  height: "200px",
                  overflow: "scroll",
                  marginBottom: "60px",
                  marginRight:"40px",
                  borderRadius:"20px"
                }}
              >
                {renderSubjects()}
              </Element>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="null-area"></div>;
  }
}
