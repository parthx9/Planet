import React from "react";
import { Draggable, Droppable } from 'react-drag-and-drop';


export default function CoreSubjects({ subject }) {

  const onDrop=(result)=>{
    console.log(result)
  }

  const renderSubjects = () =>{
    return(
      subject.map(( subject )=>{
        //console.log(columnsFromBackend.core.items);
        return(
          <div className='col-2'>
            <Draggable type='core' data='sub'>
              <div className='subs'>
                <h4>{ subject[0] }</h4>
                <h5>{ subject[1] }</h5>
              </div>
            </Draggable>
          </div>
        )
      })
    )
  }

  if (subject){
    return(
        <div className='container'>
            <div className='grid-area'>
              <div className='core-area'>
                <h2>Core Subjects </h2>
                <Droppable>
                  <div className='row sub-row'>
                    {renderSubjects()}
                  </div>
                </Droppable>
              </div>
              <div className='selected-area'>
                <h2>Selected Subjects </h2>
                <Droppable types={['core']}>
                  <ul>

                  </ul>
                </Droppable>
              </div>
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

