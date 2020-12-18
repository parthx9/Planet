import React from "react";


export default function CoreSubjects(props) {
  const columnsFromBackend = {
    core: {
      name: "Core Subjects",
      items: props.inputText,
    },

    1: {
      name: "Subject 1",
      items: [],
    },
    2: {
      name: "Subject 2",
      items: [],
    },
    3: {
      name: "Subject 3",
      items: [],
    },
    4: {
      name: "Subject 4",
      items: [],
    },
  };
  
  return (
    <div>
      <h1>The Core subjects for this major is {columnsFromBackend.core.items}</h1>
    </div>
  );
}

