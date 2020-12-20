import React from "react";
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
          <div >
            <h2>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Core Subjects </h2>
            <ul className="subjects">
              <Element
                style={{
                  position: "relative",
                  height: "400px",
                  overflow: "scroll",
                  marginBottom: "50px",
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
