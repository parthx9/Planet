import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";



export default function CoreSubjects(props) {
  const coresFromBackend = [props.inputText]

 
 
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
          
          <div className='divStyle2'>
          <p>&nbsp;</p>
          <h3>Please fill the prerequisites.</h3>
          <div >
            <p>&nbsp;</p>
            <h2> Core Subjects </h2>
            <div className='row sub-row'>
            {renderSubjects()}
            </div>
            <p>&nbsp;</p>
            <h2> Year 1 Semester 1 </h2>
            <p>&nbsp;</p>
            <h2> Year 1 Semester 2 </h2>
            <p>&nbsp;</p>
            <h2> Year 2 Semester 1 </h2>
            <p>&nbsp;</p>
            <h2> Year 2 Semester 2 </h2>
            <p>&nbsp;</p>
            <h2> Year 3 Semester 1 </h2>
            <p>&nbsp;</p>
            <h2> Year 3 Semester 2 </h2>

          </div>
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

