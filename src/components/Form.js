import React from "react";
import { FirstOption, groupedOptions,intakeOptions } from "./data";
import Select from 'react-select';
import "../App"

const formatGroupLabel = (data) => (
  <div className='groupStyles'>
    <span>{data.label}</span>
  </div>
);

export default function Form({ setSubject }) {
  const selectMajor = (e) => {
    setSubject(e.core);
  };
  return (
    <div>
      <div className='form-area'>
        <h4>Select your Major</h4>
          <div className='select-custom'>
          <Select
            defaultValue={FirstOption[0]}
            options={groupedOptions}
            formatGroupLabel={formatGroupLabel}
            onChange={selectMajor} /> 
          </div> 
          <h4>Select Intake</h4>
          <div className='select-custom'>
          <Select
            defaultValue={FirstOption[0]}
            options={intakeOptions}
            formatGroupLabel={formatGroupLabel}
            /> 
          </div>
      </div>
      
     
      
    </div>
  );
}