import React from "react";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'


export default function CoreSubjects({ subject }) {

 
  const renderSubjects = () =>{
    return(
      subject.map((subject, index)=>{
        return(
          <Draggable key={index} index={index} draggableId={subject[0]}>
            {(provided)=>
              <li {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} >
                <div className='subs'>
                  <h4>{ subject }</h4>
                </div>
              </li>
            }
          </Draggable>
        )
      })
    )
  }

  if (subject){
    return(
        <div className='container'>
            <div className='grid-area'>
              <DragDropContext>
                <div className='core-area'>
                  <h2>Core Subjects </h2>
                  <Droppable droppableId='subjects'>
                    {(provided)=>(
                      <ul className='subjects' {...provided.droppableProps} ref={provided.innerRef}>
                        {renderSubjects()}
                        {provided.placeholder}
                      </ul>
                    )}
                  </Droppable>
                </div>
              </DragDropContext>
              <DragDropContext>
                <div className='selected-area'>
                  <h2>Selected Subjects </h2>
                  <Droppable droppableId='subjects'>
                    {(provided)=>(
                      <ul className='subjects' {...provided.droppableProps} ref={provided.innerRef}>

                      </ul>
                    )}
                  </Droppable>
                </div>
              </DragDropContext>
            </div>
        </div>
      )  
  }
  else{
    return(
      <div className='null-area'>
      </div>
    )
  }
}

