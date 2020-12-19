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



  const renderSubjects = () =>{
    return(
      props.inputText.map(( subject )=>{
        return(
          <div className='col-2 subs'>
            <h2>{ subject[0] }</h2>
            <h3>{ subject[1] }</h3>
          </div>
        )
      })
    )
  }

  if (props.inputText){
    return(
        <div>
          <h1>The Core subjects for this major is {columnsFromBackend.core.items}</h1>
          <div className='row sub-row'>
            {renderSubjects()}
          </div>
        </div>
      )  
  }
  else{
    return(
      <div>

      </div>
    )
  }
}

