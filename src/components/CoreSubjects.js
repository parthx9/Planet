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


            <h4>{ subject[0] }</h4>
            <h5>{ subject[1] }</h5>



          </div>
        )
      })
    )
  }

  if (props.inputText){
    return(
        <div>
          
          <div className='row sub-row'>
            {renderSubjects()}
          </div>
          <div><h1>Please fill the prerequisites first.</h1></div>
          
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

